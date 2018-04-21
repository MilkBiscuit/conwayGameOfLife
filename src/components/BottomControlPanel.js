import React from 'react';
import { Platform, Slider, StyleSheet } from 'react-native';
import { Button, Text, View } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class BottomControlPanel extends React.Component {
  constructor() {
    super();
    this.state = { playing: false };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.playing !== nextProps.playing) {
      this.setState({ playing: nextProps.playing });
    }
  }

  onPlayPressed() {
    this.setState({ playing: !this.state.playing });
    this.props.playPressed();
  }

  renderPlayButton() {
    const text = (this.state.playing) ? 'Pause' : 'Play';
    const icon = (this.state.playing) ? 'pause' : 'play-arrow';

    return (
      <Button iconRight transparent onPress={this.onPlayPressed.bind(this)}>
        <Text>{text}</Text>
        <MaterialIcons active name={icon} size={22} style={{ color: 'gray' }} />
      </Button>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderPlayButton()}
        <Button iconRight transparent onPress={this.props.nextPressed}>
          <Text>Next</Text>
          <MaterialIcons active name='skip-next' size={22} style={{ color: 'gray' }} />
        </Button>
        <View style={styles.sliderContainer} >
          <Text>Speed</Text>
          <Slider
            step={1}
            minimumValue={0}
            maximumValue={2}
            value={1}
            onValueChange={speed => this.props.speedChanged(speed)}
            style={styles.slider}
            thumbTintColor='black'
          />
        </View>
        <Button iconRight transparent onPress={this.props.homePressed}>
          <Text>Home</Text>
          <MaterialIcons active name='home' size={22} style={{ color: 'gray' }} />
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: 'white'
  },
  sliderContainer: {
    height: (Platform.OS === 'ios') ? 42 : 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  slider: {
    height: (Platform.OS === 'ios') ? 10 : 40,
    width: 150,
    margin: (Platform.OS === 'ios') ? 10 : 0
  }
});

export { BottomControlPanel };
