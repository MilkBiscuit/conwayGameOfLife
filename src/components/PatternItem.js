import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ListItem, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { ReadRleFile } from '../patterns';
import { formatPatternName } from '../utils';

class PatternItem extends React.Component {

  onItemClick() {
    ReadRleFile(this.props.item.path)
      .then(pattern => {
        Actions.push('game', { grid: pattern });
      });
  }

  render() {
    let title = this.props.item.name;
    title = formatPatternName(title);

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.onItemClick.bind(this)}
      >
        <Text
          style={styles.text}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 30,
    paddingLeft: 14
  },
  text: {
    fontSize: 16
  }
};

export { PatternItem };
