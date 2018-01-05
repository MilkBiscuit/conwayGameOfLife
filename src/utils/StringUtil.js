export function formatPatternName(title) {
  if (title.startsWith('Os-')) {
    return title.substring(3);
  } else if (title.startsWith('Ot-')) {
    return title.substring(3);
  } else if (title.startsWith('Still-')) {
    return title.substring(6);
  } else if (title.startsWith('Space-')) {
    return title.substring(6);
  }

  return title;
}

export function removeLastCharacter(str) {
  if (str && str.length > 0) {
    return str.substring(0, str.length - 1);
  }

  return '';
}

export function getLastCharacter(str) {
  if (str && str.length > 0) {
    return str.substring(str.length - 1, str.length);
  }

  return '';
}

