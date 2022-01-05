import {combineReducers} from 'redux';

import {QuizReducer} from './quizReducer';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';

const rootReducer = combineReducers({
  quizReducer: QuizReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export {rootReducer};
