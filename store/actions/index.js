
/* export const addPatient = formValues => async (dispatch) => {
    const response = await patient.post('/patientcreate', formValues);
  
    dispatch({ type: actionTypes.ADD_PATIENT, payload: response.data });
    history.push('/patient/list');
  };   */

import { TodayClasses, Homework, Test, Exam, AllClasses, Notifications } from '../../data/dummy'
   
export const fetchTodayClasses = () => {
  return { type: 'FETCH_TODAYCLASSES' , payload: TodayClasses };
};

export const fetchHomeworks = () => {
  return { type: 'FETCH_HOMEWORKS' , payload: Homework };
};

export const fetchTests = () => {
  return { type: 'FETCH_TESTS' , payload: Test };
};

export const fetchExams = () => {
  return { type: 'FETCH_EXAMS' , payload: Exam };
};

export const fetchAllClasses = () => {
  return { type: 'FETCH_ALLCLASSES', payload: AllClasses}
}

export const fetchNotifications = () => {
  return { type: 'FETCH_NOTIFICATIONS', payload: Notifications}
}