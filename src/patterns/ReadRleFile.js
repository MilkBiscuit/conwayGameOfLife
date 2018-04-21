import { Platform } from 'react-native';
import { ReadPattern } from './ReadPattern';

const RNFS = require('react-native-fs');

function ReadRleFile(path) {
  return (Platform.OS === 'ios') ? readRleFileIos(path) : readRleFileAndroid(path);
}

function readRleFileAndroid(path) {
  return new Promise((resolve, reject) => {
    RNFS.readFileAssets(path, 'utf8')
      .then((fileContent) => {
        // parseFileContent(fileContent, resolve);

        const content = fileContent.trim();
        const textByLine = content.split('\n');

        const info = textByLine[textByLine.length - 2];
        const regex = /= \d+/g;
        const array = info.match(regex);
        const x = array[0].substring(2);
        const y = array[1].substring(2);

        const pattern = ReadPattern(textByLine[textByLine.length - 1], x, y);

        resolve(pattern);
      })
      .catch((err) => {
        console.log(err.message, err.code);
        reject();
      });
  });
}

function readRleFileIos(path) {
  return new Promise((resolve, reject) => {
    RNFS.readFile(path, 'utf8')
      .then((fileContent) => {
        const content = fileContent.trim();
        const textByLine = content.split('\n');

        const info = textByLine[textByLine.length - 2];
        const regex = /= \d+/g;
        const array = info.match(regex);
        const x = array[0].substring(2);
        const y = array[1].substring(2);

        const pattern = ReadPattern(textByLine[textByLine.length - 1], x, y);

        resolve(pattern);
      })
      .catch((err) => {
        console.log(err.message, err.code);
        reject();
      });
  });
}

function parseFileContent(fileContent, resolve) {
  const content = fileContent.trim();
  const textByLine = content.split('\n');

  const info = textByLine[textByLine.length - 2];
  const regex = /= \d+/g;
  const array = info.match(regex);
  const x = array[0].substring(2);
  const y = array[1].substring(2);

  const pattern = ReadPattern(textByLine[textByLine.length - 1], x, y);

  resolve(pattern);
}

export { ReadRleFile };
