interface Theme {
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };

  background: string;
  colour: string;
  shadow: string;

  nav: {
    background: string;
    contentColour: string;

    pseudo: {
      contentColour: string;
    };

    hover: {
      linkColour: string;
    };

    active: {
      linkColour: string;
    };
  };
}

const defaultBreakpoints = {
  sm: '576px',
  md: '768px',

  // 72 (nav) + 918 (profile content) + 24 * 2 (content margin)
  lg: '1038px',

  // 72 (nav) + 1266 (profile content) + 24 * 2 (content margin)
  xl: '1386px',
};

const lightTheme: Theme = {
  breakpoints: defaultBreakpoints,

  background: '#EFEFEF',
  colour: '#24292e',
  shadow: 'rgba(0, 0, 0, 0.16)',

  nav: {
    background: '#FFFFFF',
    contentColour: '#A3A3A3',

    pseudo: {
      contentColour: '#24292E',
    },

    hover: {
      linkColour: '#EBEBEB',
    },

    active: {
      linkColour: '#D6D6D6',
    },
  },
};

const darkTheme: Theme = {
  breakpoints: defaultBreakpoints,

  background: '#363D45',
  colour: '#FFF',
  shadow: 'rgba(0, 0, 0, 0.16)',

  nav: {
    background: '#24292E',
    contentColour: '#C4C4C4',

    pseudo: {
      contentColour: '#FFFFFF',
    },

    hover: {
      linkColour: '#1B1E22',
    },

    active: {
      linkColour: '#090A0B',
    },
  },
};

export { lightTheme, darkTheme };
export type { Theme };
