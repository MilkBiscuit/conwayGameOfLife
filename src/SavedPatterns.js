import React from 'react';
import { Container, Content, List } from 'native-base';
import { PatternItem } from './components';

class SavedPatterns extends React.Component {

  renderRow(item) {
    return (
      <PatternItem item={item} />
    );
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <List
            dataArray={this.props.files}
            renderRow={this.renderRow}
          />
        </Content>
      </Container>
    );
  }
}

const styles = {
  container: {
    backgroundColor: 'white'
  }
};

export default SavedPatterns;
