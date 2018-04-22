import React from 'react';
import { ListView, Platform } from 'react-native';
import { View } from 'native-base';
import { getAliveNeighbourNum } from '../utils';
import { RowOfCells } from './RowOfCells';

const wholeGrid = new Array(10);
const neighbourNumArray = new Array(10);
const items = [];
const intervals = (Platform.OS === 'ios') ? [400, 200, 50] : [1000, 500, 200];
let intervalId;
let sameNumber = 0;

function resetGrid() {
  for (let i = 0; i < 10; i++) {
    wholeGrid[i] = new Array(20);
    wholeGrid[i].fill(0);

    neighbourNumArray[i] = new Array(20);
    neighbourNumArray[i].fill(0);

    items[i] = { index: i, value: wholeGrid[i] };
  }
}

function loadGrid(gridArray) {
  for (let i = 0; i < 10; i++) {
    wholeGrid[i] = gridArray[i];

    neighbourNumArray[i] = new Array(20);
    neighbourNumArray[i].fill(0);

    items[i] = { index: i, value: wholeGrid[i] };
  }
}

function nextGeneration() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 20; j++) {
      const num = getAliveNeighbourNum(i, j, wholeGrid);
      neighbourNumArray[i][j] = num;
    }
  }

  sameNumber = 0;

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 20; j++) {
      const num = neighbourNumArray[i][j];
      if (num < 2 || num > 3) {
        if (wholeGrid[i][j] === 0) {
          sameNumber++;
        } else {
          wholeGrid[i][j] = 0;
        }
      } else if (num === 3) {
        if (wholeGrid[i][j] === 1) {
          sameNumber++;
        } else {
          wholeGrid[i][j] = 1;
        }
      } else {
        sameNumber++;
      }
    }
  }

  if (sameNumber === 10 * 20) {
    clearInterval(intervalId);
  } else {
    fillItems();
  }
}

function fillItems() {
  for (let i = 0; i < 10; i++) {
    items[i] = { index: i, value: wholeGrid[i] };
  }
}

class Board20x10 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listViewData: items
    };
  }

  componentWillMount() {
    if (this.props.gridArray) {
      loadGrid(this.props.gridArray);
    } else {
      resetGrid();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.play !== nextProps.play) {
      if (nextProps.play) {
        this.startPlaying(this.props.speed);
      } else {
        clearInterval(intervalId);
      }
    } else if (this.props.nextPressed !== nextProps.nextPressed) {
      clearInterval(intervalId);

      nextGeneration();
    } else if (this.props.speed !== nextProps.speed) {
      if (this.props.play) {
        clearInterval(intervalId);

        this.startPlaying(nextProps.speed);
      }
    }
  }

  startPlaying(speed) {
    intervalId = setInterval(() => {
      nextGeneration();
      if (sameNumber === 20 * 10) {
        this.props.gameOver();
      }
      this.setState({ refresh: new Date() });
    }, intervals[speed]);
  }

  renderRow(item) {
    const onSelect = (rowId, colId, selected) => {
      wholeGrid[rowId][colId] = selected ? 1 : 0;
    };

    return (
      <RowOfCells
        big
        rowId={item.index}
        rowValue={item.value}
        onSelect={(colId, selected) => onSelect(item.index, colId, selected)}
      />
    );
  }

  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    return (
      <View style={styles.container} >
          <View style={styles.topBorder} />
          <ListView
            scrollEnabled={false}
            dataSource={ds.cloneWithRows(items)}
            renderRow={this.renderRow}
          />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    paddingTop: 12,
    alignItems: 'center'
  },
  topBorder: {
    height: 1,
    width: 600,
    backgroundColor: '#0000007f',
  }
};

export { Board20x10 };
