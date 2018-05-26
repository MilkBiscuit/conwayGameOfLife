import React from 'react';
import { Platform } from 'react-native';
import { Container, Content, Footer } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Board30x15, Board40x20, BottomControlPanel } from './components';

class Game extends React.Component {

  constructor() {
    super();
    this.state = {
      playPressed: null,
      nextPressed: null,
      homePressed: null,
      speed: 1
    };
  }

  onNext() {
    this.setState({
      playPressed: null,
      nextPressed: new Date()
    });
  }

  onPlayPause() {
    if (this.state.playPressed) {
      this.onPause();
    } else {
      this.setState({ playPressed: new Date() });
    }
  }

  onPause() {
    this.setState({ playPressed: null });
  }

  onHome() {
    this.onPause();
    Actions.home({ type: 'reset' });
  }

  onSpeedChanged(speed) {
    this.setState({ speed });
  }

  onGameOver() {
    this.setState({ playPressed: null });
  }

  renderBoard() {
    let gridArray;
    if (this.props.grid) {
      gridArray = this.props.grid;
    }

    if (Platform.OS === 'ios') {
      return (
        <Board40x20
          gridArray={gridArray}
          play={this.state.playPressed}
          nextPressed={this.state.nextPressed}
          speed={this.state.speed}
          gameOver={this.onGameOver.bind(this)}
        />
      );
    }

    return (
      <Board30x15
        gridArray={gridArray}
        play={this.state.playPressed}
        nextPressed={this.state.nextPressed}
        speed={this.state.speed}
        gameOver={this.onGameOver.bind(this)}
      />
    );
  }

  render() {
    const playing = this.state.playPressed != null;

    return (
      <Container>
        <Content>
          {this.renderBoard()}
        </Content>
        <Footer>
          <BottomControlPanel
            playPressed={this.onPlayPause.bind(this)}
            nextPressed={this.onNext.bind(this)}
            homePressed={this.onHome.bind(this)}
            speedChanged={this.onSpeedChanged.bind(this)}
            playing={playing}
          />
        </Footer>
      </Container>
    );
  }
}

export default Game;
