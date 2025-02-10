export function pxr(px, baseFontSize = 16) {
  if (typeof px !== 'number' || typeof baseFontSize !== 'number') {
    throw new Error('Both px and baseFontSize should be numbers.');
  }
  return `${(px / baseFontSize).toFixed(4)}rem`;
}
