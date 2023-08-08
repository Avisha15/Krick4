import React, {useEffect} from 'react';
import {Provider, useDispatch} from 'react-redux';
import store from './libs/configStore';
import Navigator from './navigation/Navigator';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {onAppStart} from './helper/app';
import {refreshToken} from './actions/authActions';
import RootComponent from './RootComponent';
onAppStart();
const App = () => {
  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <RootComponent>
          <Navigator />
        </RootComponent>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
