import React from 'react';
import { ListView, View } from 'react-native';
import { Container, Content, Text } from 'native-base';
import { PatternItem } from './components';
import { convertFileArrayToMap } from './utils';

class SavedPatterns extends React.Component {

  renderRow(item) {
    return (
      <PatternItem item={item} />
    );
  }

  renderSectionHeader(sectionData, category) {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{category}</Text>
      </View>
    );
  }

  renderSeparator() {
    return (
      <View style={styles.splitLine} />
    );
  }

  render() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });
    const filesWithSection = convertFileArrayToMap(this.props.files);

    return (
      <Container style={styles.container}>
        <Content style={{ flex: 1 }}>
          <ListView
            dataSource={ds.cloneWithRowsAndSections(filesWithSection)}
            renderRow={this.renderRow}
            renderSectionHeader={this.renderSectionHeader}
            renderSeparator={this.renderSeparator}
          />
        </Content>
      </Container>
    );
  }
}

const styles = {
  container: {
    backgroundColor: 'white'
  },
  headerRow: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sectionHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: '#0097a7',
  },
  sectionHeaderText: {
    color: 'white',
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: 'bold',
  },
  splitLine: {
    height: 1,
    backgroundColor: '#dddddd'
  }
};

export default SavedPatterns;
