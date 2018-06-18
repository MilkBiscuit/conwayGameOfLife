import React from 'react';
import { View } from 'native-base';
import { getAliveNeighbourNum } from '../utils';
import { INTERVALS } from './Constants';
import { Row30 } from './Row30';

const rowNum = 15;
const colNum = 30;
const wholeGrid = new Array(rowNum);
const neighbourNumArray = new Array(rowNum);
const items = [];
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

class Board30x15 extends React.Component {
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
    }, INTERVALS[speed]);
  }

  render() {
    const onSelect = (rowId, colId, selected) => {
      wholeGrid[rowId][colId] = selected ? 1 : 0;
    };

    return (
      <View style={styles.container} >
        <View style={styles.topBorder} />
        <Row30
          rowId={0}
          rowValue={items[0].value.slice()}
          onSelect={(colId, selected) => onSelect(0, colId, selected)}
        />
        <Row30
          rowId={1}
          rowValue={items[1].value.slice()}
          onSelect={(colId, selected) => onSelect(1, colId, selected)}
        />
        <Row30
          rowId={2}
          rowValue={items[2].value.slice()}
          onSelect={(colId, selected) => onSelect(2, colId, selected)}
        />
        <Row30
          rowId={3}
          rowValue={items[3].value.slice()}
          onSelect={(colId, selected) => onSelect(3, colId, selected)}
        />
        <Row30
          rowId={4}
          rowValue={items[4].value.slice()}
          onSelect={(colId, selected) => onSelect(4, colId, selected)}
        />
        <Row30
          rowId={5}
          rowValue={items[5].value.slice()}
          onSelect={(colId, selected) => onSelect(5, colId, selected)}
        />
        <Row30
          rowId={6}
          rowValue={items[6].value.slice()}
          onSelect={(colId, selected) => onSelect(6, colId, selected)}
        />
        <Row30
          rowId={7}
          rowValue={items[7].value.slice()}
          onSelect={(colId, selected) => onSelect(7, colId, selected)}
        />
        <Row30
          rowId={8}
          rowValue={items[8].value.slice()}
          onSelect={(colId, selected) => onSelect(8, colId, selected)}
        />
        <Row30
          rowId={9}
          rowValue={items[9].value.slice()}
          onSelect={(colId, selected) => onSelect(9, colId, selected)}
        />
        <Row30
          rowId={10}
          rowValue={items[10].value.slice()}
          onSelect={(colId, selected) => onSelect(10, colId, selected)}
        />
        <Row30
          rowId={11}
          rowValue={items[11].value.slice()}
          onSelect={(colId, selected) => onSelect(11, colId, selected)}
        />
        <Row30
          rowId={12}
          rowValue={items[12].value.slice()}
          onSelect={(colId, selected) => onSelect(12, colId, selected)}
        />
        <Row30
          rowId={13}
          rowValue={items[13].value.slice()}
          onSelect={(colId, selected) => onSelect(13, colId, selected)}
        />
        <Row30
          rowId={14}
          rowValue={items[14].value.slice()}
          onSelect={(colId, selected) => onSelect(14, colId, selected)}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center'
  },
  topBorder: {
    height: 0.5,
    width: 450,
    backgroundColor: '#0000007f',
  }
};

export { Board30x15 };
