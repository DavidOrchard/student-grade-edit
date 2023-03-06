import React, { useState} from 'react';
import {gradeToScore, scoreToGrade} from './gradeUtils';

const onChange = (field:string, courseId?: string) => {
  const gradeList = document.querySelectorAll(`.subject-${courseId} .value.Grade`);
  const scoreList = document.querySelectorAll(`.subject-${courseId} .value.Score`);
  const gradeValue = (gradeList?.[0] as HTMLInputElement)?.value;
  const scoreValue = (scoreList?.[0] as HTMLInputElement)?.value;
  if (field === "Grade") {
    // @ts-ignore
    scoreList[0].value = gradeToScore(gradeValue);
  } else if (field === "Score") {
    // @ts-ignore
    gradeList[0].value = scoreToGrade(parseInt(scoreValue));
  }
}

// TODO: refactor to use company standard for forms.
// TODO: think about refactoring to make standalone component, if it makes sense with form std.
// TODO: think about refactoring to take in left and right children to support the edit/save button.
const Row = ({label, value, isEditing, courseId}:{label:string, value:string,isEditing?:boolean, courseId?: string}) => {
  return (<div className={`row ${label}`}>
    <div className="label">{label}</div>
    {isEditing ? 
      <input className={`value ${label}`} type="text" defaultValue={value}  onChange={() => onChange(label, courseId)}/> :
      <div className="`value`">{value}</div>
    }
    </div>);
}

export default function SelectedstudentSubjectsEdit({studentSubjects, onSaveScores}:
  {studentSubjects: Record<string,any>, onSaveScores: (courseId:string, grade:string, score:string)=>void}):JSX.Element {
  const [scoresBeingEdited, setScoresBeingEdited] = useState<{[key: string]: any}>({});

  // could be a bit smarter and delete prop that is false
  // TODO: refaector to not use closure to get onSaveScores & setScoresBeingEdited
  const handleEditSave = (courseId: string) => {
    const {[courseId]:isEditing, ...rest} = scoresBeingEdited;

    if(isEditing) {
      const gradeList = document.querySelectorAll(`.subject-${courseId} .value.Grade`);
      const scoreList = document.querySelectorAll(`.subject-${courseId} .value.Score`);
      const gradeValue = (gradeList?.[0] as HTMLInputElement)?.value; 
      const scoreValue = (scoreList?.[0] as HTMLInputElement)?.value;    
      onSaveScores(courseId, gradeValue, scoreValue);
      setScoresBeingEdited(rest)
    } else {
      setScoresBeingEdited({
        ...scoresBeingEdited,
        [courseId]: true
      });
    }
  }

  // This is very hacky form, done to show how everything is wired up.
  // TODO: refactor to controlled components
  // TODO: refactor to use company standard for forms.
  return(
    <div className="search-wrapper">
      <h1>studentSubjects</h1>
      <form className="studentSubjects">
        {studentSubjects.map((subject:Record<string, any>) => {
          const isEditing = scoresBeingEdited[subject.courseId];
          return (
            <div className={`subject-${subject.courseId}`} key={subject.courseId}>
              <div className="editSave row">
                <div className="label"/>
                <div className="value">
                  <button onClick={(e) => {
                    e.preventDefault();
                    handleEditSave(subject.courseId);
                  }}>{isEditing ? "Save" : "Edit"}</button>
                </div>
              </div>
              <Row label="Course Id" value={subject.courseId}/>
              <Row label="Subject" value={subject.subject} />
              <Row label="Score" value={subject.score} isEditing={isEditing} courseId={subject.courseId}/>
              <Row label="Grade" value={subject.grade} isEditing={isEditing} courseId={subject.courseId}/>
              <Row label="Credits" value={subject.credits} />
            </div>
          )})}
      </form>
    </div>
  )
}