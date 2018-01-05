import React from 'react';
import { Scene, Stack, Router } from 'react-native-router-flux';
import About from './About';
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
        <Scene
          key='about'
          title='About'
          component={About}
        />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
