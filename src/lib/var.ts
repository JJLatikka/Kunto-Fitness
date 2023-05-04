const { X, Y }: { X: number; Y: number } = {
  X: window.innerWidth,
  Y: window.innerHeight,
};

const kunto_fitness: string = "Kunto fitness";

const image_style: object = {
  width: X * 0.25,
  marginTop: Y * 0.05,
};

const gridRH: number = (Y * 0.65) / 9;

const cap = (k: string): string =>
  `${k.charAt(0).toUpperCase()}${k.substring(1)}`;

const dateFormat: string = "ddd, DD / MM / YYYY HH:mm";

const confirmMessage = "Please, confirm the deletion!";

const tab_style_override: object = {
  backgroundColor: "#c4c4c4",
};

const input_style_override: object = {
  backgroundColor: "#c4c4c4",
  minWidth: 150,
  mt: 3.5,
  ml: 7,
};

export {
  X,
  Y,
  kunto_fitness,
  image_style,
  gridRH,
  cap,
  dateFormat,
  confirmMessage,
  tab_style_override,
  input_style_override,
};
