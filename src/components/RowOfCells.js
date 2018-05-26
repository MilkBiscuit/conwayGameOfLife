import React from 'react';
import { ListView, View } from 'react-native';
import { Cell } from './Cell';

// This class is not used because performance of hard code is better than listview
const RowOfCells = (props) => {
  const onSelect = (index, selected) => {
    props.onSelect(index, selected);
  };

  const rowValue = props.rowValue;
  const height = props.big ? 30 : 15;
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

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
      <ListView
        horizontal
        scrollEnabled={false}
        dataSource={ds.cloneWithRows(rowValue)}
        renderRow={(cellValue, sectionId, rowId) =>
          <Cell
            value={cellValue}
            height={height}
            onSelect={(selected) => onSelect(rowId, selected)}
          />
        }
      />
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

export { RowOfCells };
