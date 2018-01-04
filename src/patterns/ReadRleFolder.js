
const RNFS = require('react-native-fs');

const ReadRleFolder = new Promise((resolve, reject) => {
  // get a list of files and directories in the main bundle
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
});

export { ReadRleFolder };
