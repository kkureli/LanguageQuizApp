import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import {rootReducer} from './reducers';
import {reduxFirestore, getFirestore} from 'redux-firestore';
import {getFirebase} from 'react-redux-firebase';
import firebase, {firebaseConfig} from '../config/config';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(firebase, firebaseConfig)
  )
);
export {store};
