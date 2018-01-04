import React from 'react';
import { Scene, Stack, Router } from 'react-native-router-flux';
import Game from './Game';
import Home from './Home';
import SavedPatterns from './SavedPatterns';

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
        <Scene
          key='patterns'
          title='Saved Patterns'
          component={SavedPatterns}
        />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
