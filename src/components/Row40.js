import React from 'react';
import { View } from 'react-native';
import { Cell } from './Cell';

const Row40 = (props) => {
  const onSelect = (index, selected) => {
    props.onSelect(index, selected);
  };

  const rowValue = props.rowValue;
  const height = 15;

  const leftBorderStyle = () => {
    return {
      width: 0.5,
      height,
      backgroundColor: '#0000007f',
    };
  };

  return (
    <View style={styles.row}>
      <View style={leftBorderStyle()} />
      <Cell value={rowValue[0]} height={height} onSelect={(selected) => onSelect(0, selected)} />
      <Cell value={rowValue[1]} height={height} onSelect={(selected) => onSelect(1, selected)} />
      <Cell value={rowValue[2]} height={height} onSelect={(selected) => onSelect(2, selected)} />
      <Cell value={rowValue[3]} height={height} onSelect={(selected) => onSelect(3, selected)} />
      <Cell value={rowValue[4]} height={height} onSelect={(selected) => onSelect(4, selected)} />
      <Cell value={rowValue[5]} height={height} onSelect={(selected) => onSelect(5, selected)} />
      <Cell value={rowValue[6]} height={height} onSelect={(selected) => onSelect(6, selected)} />
      <Cell value={rowValue[7]} height={height} onSelect={(selected) => onSelect(7, selected)} />
      <Cell value={rowValue[8]} height={height} onSelect={(selected) => onSelect(8, selected)} />
      <Cell value={rowValue[9]} height={height} onSelect={(selected) => onSelect(9, selected)} />
      <Cell value={rowValue[10]} height={height} onSelect={(selected) => onSelect(10, selected)} />
      <Cell value={rowValue[11]} height={height} onSelect={(selected) => onSelect(11, selected)} />
      <Cell value={rowValue[12]} height={height} onSelect={(selected) => onSelect(12, selected)} />
      <Cell value={rowValue[13]} height={height} onSelect={(selected) => onSelect(13, selected)} />
      <Cell value={rowValue[14]} height={height} onSelect={(selected) => onSelect(14, selected)} />
      <Cell value={rowValue[15]} height={height} onSelect={(selected) => onSelect(15, selected)} />
      <Cell value={rowValue[16]} height={height} onSelect={(selected) => onSelect(16, selected)} />
      <Cell value={rowValue[17]} height={height} onSelect={(selected) => onSelect(17, selected)} />
      <Cell value={rowValue[18]} height={height} onSelect={(selected) => onSelect(18, selected)} />
      <Cell value={rowValue[19]} height={height} onSelect={(selected) => onSelect(19, selected)} />
      <Cell value={rowValue[20]} height={height} onSelect={(selected) => onSelect(20, selected)} />
      <Cell value={rowValue[21]} height={height} onSelect={(selected) => onSelect(21, selected)} />
      <Cell value={rowValue[22]} height={height} onSelect={(selected) => onSelect(22, selected)} />
      <Cell value={rowValue[23]} height={height} onSelect={(selected) => onSelect(23, selected)} />
      <Cell value={rowValue[24]} height={height} onSelect={(selected) => onSelect(24, selected)} />
      <Cell value={rowValue[25]} height={height} onSelect={(selected) => onSelect(25, selected)} />
      <Cell value={rowValue[26]} height={height} onSelect={(selected) => onSelect(26, selected)} />
      <Cell value={rowValue[27]} height={height} onSelect={(selected) => onSelect(27, selected)} />
      <Cell value={rowValue[28]} height={height} onSelect={(selected) => onSelect(28, selected)} />
      <Cell value={rowValue[29]} height={height} onSelect={(selected) => onSelect(29, selected)} />
      <Cell value={rowValue[30]} height={height} onSelect={(selected) => onSelect(30, selected)} />
      <Cell value={rowValue[31]} height={height} onSelect={(selected) => onSelect(31, selected)} />
      <Cell value={rowValue[32]} height={height} onSelect={(selected) => onSelect(32, selected)} />
      <Cell value={rowValue[33]} height={height} onSelect={(selected) => onSelect(33, selected)} />
      <Cell value={rowValue[34]} height={height} onSelect={(selected) => onSelect(34, selected)} />
      <Cell value={rowValue[35]} height={height} onSelect={(selected) => onSelect(35, selected)} />
      <Cell value={rowValue[36]} height={height} onSelect={(selected) => onSelect(36, selected)} />
      <Cell value={rowValue[37]} height={height} onSelect={(selected) => onSelect(37, selected)} />
      <Cell value={rowValue[38]} height={height} onSelect={(selected) => onSelect(38, selected)} />
      <Cell value={rowValue[39]} height={height} onSelect={(selected) => onSelect(39, selected)} />
    </View>
  );
};

const styles = {
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  }
};

export { Row40 };
