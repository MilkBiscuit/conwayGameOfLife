import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Text, View } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Pentadecathlon } from './patterns';

class Home extends React.Component {
  onQuickStart() {
    Actions.game({ type: 'reset' });
  }

  onPatterns() {
    Actions.push('game', { grid: Pentadecathlon });
  }

  onSaved() {

  }

  onAbout() {

  }

  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={this.onQuickStart} style={styles.menuItemContainer}>
            <Text style={styles.menuItem}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPatterns} style={styles.menuItemContainer}>
            <Text style={styles.menuItem}>Patterns</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onAbout} style={styles.menuItemContainer}>
            <Text style={styles.menuItem}>About</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }

}

const styles = {
  container: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#333333'
  },
  rowContainer: {
    width: '39%',
    height: '61%',
    paddingTop: 20,
    paddingBottom: 20
  },
  menuItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuItem: {
    fontSize: 26,
    color: '#ffff4c'
  }
};

export default Home;
