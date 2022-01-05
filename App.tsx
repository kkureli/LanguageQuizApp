import React, {FC} from 'react';
import HomeScreen from './src/screens/homeScreen/HomeScreen';
import {Provider} from 'react-redux'; //binding redux withreact app
import {createFirestoreInstance} from 'redux-firestore';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';
import firebase, {firebaseConfig} from './src/config/config';
import {store} from './src/redux';

const rrfProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

const App: FC = () => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <HomeScreen />
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

export default App;
