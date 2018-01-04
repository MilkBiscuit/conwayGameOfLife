import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

class Cell extends React.Component {
  constructor(props) {
    super(props);

    const selected = (props.value === 1);
    this.state = {
      selected
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ selected: nextProps.value });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.selected !== nextState.selected) {
      return true;
    }
    return false;
  }

  onPress() {
    const selected = !this.state.selected;

    this.setState({ selected });
    this.props.onSelect(selected);
  }

  getCellStyle() {
    const bgColor = (this.state.selected) ? 'blue' : 'white';
    const height = this.props.height;

    return ({
      width: height,
      height,
      backgroundColor: bgColor,
      borderBottomWidth: 0.5,
      borderRightWidth: 0.5,
      borderColor: '#0000007f'
    });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onPress.bind(this)}>
        <View style={this.getCellStyle()} />
      </TouchableWithoutFeedback>
    );
  }

}

export { Cell };
