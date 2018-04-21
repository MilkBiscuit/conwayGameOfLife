import React from 'react';
import { Platform } from 'react-native';
import { View } from 'native-base';
import { getAliveNeighbourNum } from '../utils';
import { Row40 } from './Row40';

const rowNum = 20;
const colNum = 40;
const wholeGrid = new Array(rowNum);
const neighbourNumArray = new Array(rowNum);
const items = [];
const intervals = (Platform.OS === 'ios') ? [400, 200, 50] : [1000, 500, 200];
let intervalId;
let sameNumber = 0;

function resetGrid() {
  for (let i = 0; i < rowNum; i++) {
    wholeGrid[i] = new Array(colNum);
    wholeGrid[i].fill(0);

    neighbourNumArray[i] = new Array(colNum);
    neighbourNumArray[i].fill(0);

    items[i] = { index: i, value: wholeGrid[i] };
  }
}

function loadGrid(gridArray) {
  for (let i = 0; i < rowNum; i++) {
    wholeGrid[i] = gridArray[i];

    neighbourNumArray[i] = new Array(colNum);
    neighbourNumArray[i].fill(0);

    items[i] = { index: i, value: wholeGrid[i] };
  }
}

function nextGeneration() {
  for (let i = 0; i < rowNum; i++) {
    for (let j = 0; j < colNum; j++) {
      const num = getAliveNeighbourNum(i, j, wholeGrid);
      neighbourNumArray[i][j] = num;
    }
  }

  sameNumber = 0;
  // Have to calculate all the neighbour nums in first iteration
  for (let i = 0; i < rowNum; i++) {
    for (let j = 0; j < colNum; j++) {
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

  if (sameNumber === rowNum * colNum) {
    console.log('the same!!!');
    clearInterval(intervalId);
  } else {
    fillItems();
  }
}

function fillItems() {
  for (let i = 0; i < rowNum; i++) {
    items[i] = { index: i, value: wholeGrid[i] };
  }
}

class Board40x20 extends React.Component {
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
    console.log('start playing');
    intervalId = setInterval(() => {
      nextGeneration();
      if (sameNumber === rowNum * colNum) {
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
      <Row40
        rowId={item.index}
        rowValue={item.value}
        onSelect={(colId, selected) => onSelect(item.index, colId, selected)}
      />
    );
  }

  render() {
    const onSelect = (rowId, colId, selected) => {
      wholeGrid[rowId][colId] = selected ? 1 : 0;
    };

    return (
      <View style={styles.container} >
        <View style={styles.topBorder} />
        <Row40
          rowId={0}
          rowValue={items[0].value}
          onSelect={(colId, selected) => onSelect(0, colId, selected)}
        />
        <Row40
          rowId={1}
          rowValue={items[1].value}
          onSelect={(colId, selected) => onSelect(1, colId, selected)}
        />
        <Row40
          rowId={2}
          rowValue={items[2].value}
          onSelect={(colId, selected) => onSelect(2, colId, selected)}
        />
        <Row40
          rowId={3}
          rowValue={items[3].value}
          onSelect={(colId, selected) => onSelect(3, colId, selected)}
        />
        <Row40
          rowId={4}
          rowValue={items[4].value}
          onSelect={(colId, selected) => onSelect(4, colId, selected)}
        />
        <Row40
          rowId={5}
          rowValue={items[5].value}
          onSelect={(colId, selected) => onSelect(5, colId, selected)}
        />
        <Row40
          rowId={6}
          rowValue={items[6].value}
          onSelect={(colId, selected) => onSelect(6, colId, selected)}
        />
        <Row40
          rowId={7}
          rowValue={items[7].value}
          onSelect={(colId, selected) => onSelect(7, colId, selected)}
        />
        <Row40
          rowId={8}
          rowValue={items[8].value}
          onSelect={(colId, selected) => onSelect(8, colId, selected)}
        />
        <Row40
          rowId={9}
          rowValue={items[9].value}
          onSelect={(colId, selected) => onSelect(9, colId, selected)}
        />
        <Row40
          rowId={10}
          rowValue={items[10].value}
          onSelect={(colId, selected) => onSelect(10, colId, selected)}
        />
        <Row40
          rowId={11}
          rowValue={items[11].value}
          onSelect={(colId, selected) => onSelect(11, colId, selected)}
        />
        <Row40
          rowId={12}
          rowValue={items[12].value}
          onSelect={(colId, selected) => onSelect(12, colId, selected)}
        />
        <Row40
          rowId={13}
          rowValue={items[13].value}
          onSelect={(colId, selected) => onSelect(13, colId, selected)}
        />
        <Row40
          rowId={14}
          rowValue={items[14].value}
          onSelect={(colId, selected) => onSelect(14, colId, selected)}
        />
        <Row40
          rowId={15}
          rowValue={items[15].value}
          onSelect={(colId, selected) => onSelect(15, colId, selected)}
        />
        <Row40
          rowId={16}
          rowValue={items[16].value}
          onSelect={(colId, selected) => onSelect(16, colId, selected)}
        />
        <Row40
          rowId={17}
          rowValue={items[17].value}
          onSelect={(colId, selected) => onSelect(17, colId, selected)}
        />
        <Row40
          rowId={18}
          rowValue={items[18].value}
          onSelect={(colId, selected) => onSelect(18, colId, selected)}
        />
        <Row40
          rowId={19}
          rowValue={items[19].value}
          onSelect={(colId, selected) => onSelect(19, colId, selected)}
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
    height: 0.5,
    width: 600,
    backgroundColor: '#0000007f',
  }
};

export { Board40x20 };
