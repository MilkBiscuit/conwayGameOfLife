export function convertFileArrayToMap(files) {
  const resultMap = {};

  files.forEach((file) => {
    const title = file.name;

    if (title.startsWith('Os-')) {
      if (!resultMap['Oscillators']) {
        resultMap['Oscillators'] = [];
      }
      resultMap['Oscillators'].push(file);
    } else if (title.startsWith('Ot-')) {
      if (!resultMap['Other']) {
        resultMap['Other'] = [];
      }
      resultMap['Other'].push(file);
    } else if (title.startsWith('Still-')) {
      if (!resultMap['Still lifes']) {
        resultMap['Still lifes'] = [];
      }
      resultMap['Still lifes'].push(file);
    } else if (title.startsWith('Space-')) {
      if (!resultMap['Spaceships']) {
        resultMap['Spaceships'] = [];
      }
      resultMap['Spaceships'].push(file);
    }
  });

  return resultMap;
}
