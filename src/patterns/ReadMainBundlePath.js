
const RNFS = require('react-native-fs');

const ReadPath = new Promise((resolve, reject) => {
  // get a list of files and directories in the main bundle
  RNFS.readDir(RNFS.MainBundlePath)
    .then((results) => {
      const rleResults = results.filter(result => result.name.endsWith('.rle'));

      resolve(rleResults);
    })
    .catch((err) => {
      console.log(err.message, err.code);
      reject();
    });
});

export { ReadPath };
