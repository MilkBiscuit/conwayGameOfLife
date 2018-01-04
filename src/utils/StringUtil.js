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
