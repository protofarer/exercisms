const BANDS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

export const decodedValue = (colors) => {
  let colorsSelect = colors.slice(0,2);
  colorsSelect = colorsSelect.map(color => BANDS.indexOf(color.toLowerCase()));
  colorsSelect = parseInt(colorsSelect.join(''));
  return colorsSelect;
};
