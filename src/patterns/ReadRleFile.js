import { ReadPattern } from './ReadPattern';

const RNFS = require('react-native-fs');

function ReadRleFile(path) {
  return new Promise((resolve, reject) => {
    RNFS.readFile(path, 'utf8')
      .then((contents) => {
        console.log(contents);
        const textByLine = contents.split('\n');

        const info = textByLine[textByLine.length - 2];
        const regex = /= \d+/g;
        const array = info.match(regex);
        const x = array[0].substring(2);
        const y = array[1].substring(2);
        console.log('x is ' + x);
        console.log('y is ' + y);

        const pattern = ReadPattern(textByLine[textByLine.length - 1], 3, 3);

        resolve(pattern);
      })
      .catch((err) => {
        console.log(err.message, err.code);
        reject();
      });
  });
}

export { ReadRleFile };
