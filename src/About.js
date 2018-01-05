import React from 'react';
import { Image, Linking } from 'react-native';
import { Body, Container, Content, Card, CardItem, H1, H3, Right, Text } from 'native-base';

const imgBlinker = require('./img/example_blinker.gif');
const imgBlock = require('./img/example_block.png');
const imgGlider = require('./img/example_glider.gif');

class About extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem header>
              <H1>Conway's Game of Life</H1>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Conway's Game of Life, also known simply as Life,
                  is a cellular automaton devised by the British mathematician
                  John Horton Conway in 1970.

                  This game is a 0-player game, meaning that its evolution is
                  determined by its initial state, requiring no further input.
                </Text>
              </Body>
            </CardItem>

            <CardItem header>
              <H3>Rules</H3>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Each cell is in one of 2 possible states, alive or dead.
                  Every cell interacts with its 8 neighbours, which are the cells that are
                  horizontally, vertically, or diagonally adjacent.{'\n'}{'\n'}

                  At each step in time:{'\n'}
                  • Any live cell with fewer than 2 live neighbours dies,
                  as if caused by underpopulation.{'\n'}
                  • Any live cell with 2 or 3 live neighbours lives on to the next generation.{'\n'}
                  • Any live cell with more than 3 live neighbours dies,
                  as if by overpopulation.{'\n'}
                  • Any dead cell with exactly 3 live neighbours becomes a live cell,
                  as if by reproduction.{'\n'}
                </Text>
              </Body>
            </CardItem>

            <CardItem header>
              <H3>Examples</H3>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  There are many different types of patterns in the Game of Life, including {' '}
                  <Text style={styles.boldText}>
                    Still lifes, Oscillators, and patterns that translate themselves
                    across the board. {' '}
                  </Text>
                  Some frequently occurring examples of these three classes are shown below,
                  with live cells shown in black, and dead cells shown in white.
                </Text>
              </Body>
            </CardItem>
            <CardItem style={styles.imageContainer}>
              <Text style={styles.boldText}>
                Block (Still lifes)
              </Text>
              <Text style={styles.boldText}>
                Blinker (Oscillators)
              </Text>
              <Text style={styles.boldText}>
                Glider (Spaceships)
              </Text>
            </CardItem>
            <CardItem cardBody style={styles.imageContainer}>
              <Image
                style={styles.exampleImage}
                source={imgBlock}
              />
              <Image
                style={styles.exampleImage}
                source={imgBlinker}
              />
              <Image
                style={styles.exampleImage}
                source={imgGlider}
              />
            </CardItem>
            <CardItem>
              <Right>
                <Text>From wikipedia</Text>
              </Right>
            </CardItem>
          </Card>

          <Card>
            <CardItem header>
              <H1>About</H1>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  My name is Chandler Cheng, I am a mobile developer living in New Zealand.
                  I built this app from scratch as a means to learn React Native Development.
                </Text>
              </Body>
            </CardItem>

            <CardItem header>
              <H3>Patterns</H3>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  All patterns used in this app are downloaded from the website{' '}
                  <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.conwaylife.com')}>
                    www.conwaylife.com
                  </Text>
                </Text>
              </Body>
            </CardItem>

            <CardItem header>
              <H3>Open source</H3>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  The code of this app can be found on{' '}
                  <Text style={styles.linkText} onPress={() => Linking.openURL('https://github.com/MilkBiscuit/conwayGameOfLife')}>
                    GitHub.
                  </Text>
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }

}

const styles = {
  boldText: {
    fontWeight: 'bold'
  },
  linkText: {
    color: 'blue'
  },
  imageContainer: {
    justifyContent: 'space-around'
  },
  exampleImage: {
    width: 80,
    height: 80,
    marginLeft: 20
  }
};

export default About;
