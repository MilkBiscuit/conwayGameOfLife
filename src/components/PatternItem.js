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
      <ListItem>
        <TouchableOpacity
          onPress={this.onItemClick.bind(this)}
        >
          <Text>{title}</Text>
        </TouchableOpacity>
      </ListItem>
    );
  }

}

export { PatternItem };
