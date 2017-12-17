import React from 'react';
import { Scene, Stack, Router } from 'react-native-router-flux';
import Game from './Game';
import Home from './Home';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key='root'>
        <Scene
          key='home'
          component={Home}
          hideNavBar
        />
        <Scene
          key='game'
          component={Game}
          hideNavBar
        />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
