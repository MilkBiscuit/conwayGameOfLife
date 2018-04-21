import { Platform } from 'react-native';

const RNFS = require('react-native-fs');

const ReadRleFolder = new Promise((resolve, reject) => {
  // get a list of files and directories in the main bundle
  if (Platform.OS === 'ios') {
      readRleFolderIos(resolve, reject);
    } else {
      readRleFolderAndroid(resolve, reject);
    }
});

function readRleFolderAndroid(resolve, reject) {
  RNFS.readDirAssets('rle')
    .then((results) => {
      const rleResults = results.filter(result => result.name.endsWith('.rle'));

      if (rleResults) {
        resolve(rleResults);
      }
    })
    .catch((err) => {
      console.log(err.message, err.code);
      reject();
    });

  RNFS.readFileAssets('os_1beacon.rle', 'utf8')
    .then((results) => {
      // console.log('results 222 are ' + results);
      const rleResults = results.filter(result => result.name.endsWith('.rle'));

      if (rleResults) {
        resolve(rleResults);
      }
    });
}

function readRleFolderIos(resolve, reject) {
  RNFS.readDir(RNFS.MainBundlePath)
    .then((results) => {
      const rleResults = results.filter(result => result.name.endsWith('.rle'));

      if (rleResults) {
        resolve(rleResults);
      }
    })
    .catch((err) => {
      console.log(err.message, err.code);
      reject();
    });
}

export { ReadRleFolder };
