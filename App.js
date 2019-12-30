import React from 'react';
import {StatusBar} from 'react-native';
import {AppContainer} from './src/navigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <AppContainer />
    </>
  );
};

export default App;
