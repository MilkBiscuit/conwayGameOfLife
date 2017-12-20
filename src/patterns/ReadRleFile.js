import { ReadPattern } from './ReadPattern';

const RNFS = require('react-native-fs');

const ReadRleFile = new Promise((resolve, reject) => {
  // get a list of files and directories in the main bundle
  RNFS.readDir(RNFS.MainBundlePath)
    .then((results) => {
      const rleResults = results.filter(result => result.name.endsWith('.rle'));

      if (rleResults) {
        return RNFS.readFile(rleResults[0].path, 'utf8');
      }

      return 'no file';
    })
    .then((contents) => {
      console.log(contents);
      const textByLine = contents.split('\n');
      const pattern = ReadPattern(textByLine[textByLine.length - 1]);

      resolve(pattern);
    })
    .catch((err) => {
      console.log(err.message, err.code);
      reject();
    });
});

export { ReadRleFile };
