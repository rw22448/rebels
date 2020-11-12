interface Theme {
  background: string;
  colour: string;
}

const lightTheme: Theme = {
  background: '#EFEFEF',
  colour: '#24292e',
};

const darkTheme: Theme = {
  background: '#000',
  colour: '#FFF',
};

export { lightTheme, darkTheme };
export type { Theme };
