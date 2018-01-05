import { ReadPattern } from './ReadPattern';

const RNFS = require('react-native-fs');

function ReadRleFile(path) {
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

export { ReadRleFile };
