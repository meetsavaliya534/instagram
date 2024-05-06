import React from 'react';

import { registerRootComponent } from 'expo';
import 'react-native-gesture-handler';
import AuthNavigation from './AuthNavigation';

const App = () => {
  return <AuthNavigation />;
};
registerRootComponent(App);


export default App;
