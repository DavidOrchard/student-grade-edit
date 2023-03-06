import React, { useReducer } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { ClientOnly } from '@/components/clientOnly';
import SubjectsEdit from '@/components/selectedSubjectsView';

import subjects from '@/components/subjectsFixture.json';

// Would be passed in via url or cookie or auth session etc.
const teacherId = "5";

// mutates grades
// TODO make immutable
const mergeGradesWithLocalStorage = (grades:Record<string,any>, storedGrades:Record<string,any>) => {
  Object.entries(storedGrades).forEach(([key, val]:[string, Record<string,any>]) => {
    const subjectEntry = grades.find((subject:Record<string,any>) => subject.courseId === key);
    if(!subjectEntry) {
      return;
    }
    subjectEntry.score = val.score;
    subjectEntry.grade = val.grade;
  });
}

export default function Search() {
    // https://reactjs.org/docs/hooks-faq.html#is-there-something-like-forceupdate
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  const [storedGrades, setStoredGrades]:[Record<string, any>, any] = useLocalStorage(teacherId, {});

  mergeGradesWithLocalStorage(subjects, storedGrades);

  const onSaveScores = (courseId:string, grade:string, score:string) => {
    storedGrades[courseId] = {grade, score};
    setStoredGrades(storedGrades);
    forceUpdate();
  }

  return <ClientOnly><SubjectsEdit studentSubjects={subjects} onSaveScores={onSaveScores}/></ClientOnly>;
}