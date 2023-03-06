import React from 'react'
import { fireEvent, render, screen} from '@testing-library/react'
import SubjectsEdit from './selectedSubjectsView';
import subjects from './subjectsFixture.json';

describe('SelectedSubjectsEdits component', () => {
  it('should render', () => {
    render(<SubjectsEdit studentSubjects={subjects} onSaveScores={()=> {}}/>);
    expect(screen.getByText('125739')).toBeTruthy();
    // could do snapshot testing here.
  });
  it('should edit', () => {
    render(<SubjectsEdit studentSubjects={subjects} onSaveScores={()=> {}}/>);
    const button = screen.getAllByText('Edit');
    fireEvent.click(button[0]);
    expect(screen.getByText('Save')).toBeTruthy();
    const grade = screen.getByDisplayValue('A+');
    fireEvent.change(grade, {target: {value: 'B'}});
    expect(screen.getByDisplayValue('84')).toBeTruthy();
  });
  // test the save
  // test multiple edits at same time
  // test localstorage value is read for initial value
});
