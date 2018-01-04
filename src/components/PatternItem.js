import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ListItem, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { ReadRleFile } from '../patterns';

class PatternItem extends React.Component {

  onItemClick() {
    ReadRleFile(this.props.item.path)
      .then(pattern => {
        Actions.push('game', { grid: pattern });
      });
  }

  render() {
    return (
      <ListItem>
        <TouchableOpacity
          onPress={this.onItemClick.bind(this)}
        >
          <Text>{this.props.item.name}</Text>
        </TouchableOpacity>
      </ListItem>
    );
  }

}

export { PatternItem };
