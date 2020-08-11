import {combineReducers} from 'redux';


const classReducer = (state=[], action) => {
    switch (action.type) {
        case "FETCH_TODAYCLASSES":
          return action.payload;
        default: 
            return state
    }
};

const homeworksReducer = (state=[], action) => {
    switch (action.type) {
        case "FETCH_HOMEWORKS":
          return action.payload;
        default: 
            return state
    }
};

const testsReducer = (state=[], action) => {
    switch (action.type) {
        case "FETCH_TESTS":
          return action.payload;
        default: 
            return state
    }
};

const examsReducer = (state=[], action) => {
    switch (action.type) {
        case "FETCH_EXAMS":
          return action.payload;
        default: 
            return state
    }
};

const allClassesReducer = (state=[], action) => {
    switch (action.type) {
        case "FETCH_ALLCLASSES":
          return action.payload;
        default: 
            return state
    }
};

const notificationsReducer = (state=[], action) => {
  switch (action.type) {
      case "FETCH_NOTIFICATIONS":
        return action.payload;
      default: 
          return state
  }
};

export default combineReducers({
    classes: classReducer,
    exams: examsReducer,
    tests: testsReducer,
    homeworks: homeworksReducer,
    allClasses: allClassesReducer,
    notifications: notificationsReducer
  });