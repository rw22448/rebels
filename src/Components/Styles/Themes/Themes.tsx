interface Theme {
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };

  contentSizes: {
    md: string;
    lg: string;
    xl: string;
  };

  transitions: {
    short: string;
    shorter: string;
    shortest: string;
  };

  colours: {
    green: string;
    blue: {
      blue: string;
      darkBlue: string;
      darkerBlue: string;
    };
    black: string;
    grey: {
      lightGrey: string;
      grey: string;
      darkGrey: string;
      darkerGrey: string;
    };
    red: {
      red: string;
      darkRed: string;
      darkerRed: string;
    };
    white: string;
  };

  fontWeights: {
    regular: string;
    semiBold: string;
    bold: string;
  };

  shadows: {
    shadowColour: string;
    downShadow: string;
  };

  background: string;
  contentColour: string;
  containerColour: string;
  secondaryContainerColour: string;
  invertedContentColour: string;
  invertedContainerColour: string;

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

  navAlt: {
    contentColour: string;

    pseudo: {
      contentColour: string;
    };

    special: {
      backgroundColour: string;

      hover: {
        backgroundColour: string;
      };

      active: {
        backgroundColour: string;
      };
    };
  };
}

interface ThemeObject {
  theme: Theme;
}

const breakpoints = {
  sm: '576px',

  // 204 (nav) + 656 (profile content) + 24 * 2 (content margin)
  md: '908px',

  // 204 (nav) + 918 (profile content) + 24 * 2 (content margin)
  lg: '1170px',

  // 204 (nav) + 1266 (profile content) + 24 * 2 (content margin)
  xl: '1518px',
};

const contentSizes = {
  md: '656px',
  lg: '918px',
  xl: '1266px',
};

const transitions = {
  short: '0.2s',
  shorter: '0.1s',
  shortest: '0.05s',
};

const colours = {
  green: '#00C989',
  blue: {
    blue: '#009ee2',
    darkBlue: '#0081B8',
    darkerBlue: '#004766',
  },
  black: '#24292E',
  grey: {
    lightGrey: '#E0E0E0',
    grey: '#C4C4C4',
    darkGrey: '#A3A3A3',
    darkerGrey: '#525252',
  },
  red: {
    red: '#DE1A1A',
    darkRed: '#B71515',
    darkerRed: '#800F0F',
  },
  white: '#FFFFFF',
};

const fontWeights = {
  regular: '400',
  semiBold: '600',
  bold: '700',
};

const shadows = {
  shadowColour: 'rgba(0, 0, 0, 0.16)',
  downShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
};

const commonTheme = {
  breakpoints,
  contentSizes,
  transitions,
  colours,
  fontWeights,
  shadows,
};

const lightTheme: Theme = {
  ...commonTheme,

  background: '#EFEFEF',
  contentColour: '#24292e',
  containerColour: '#FFFFFF',
  secondaryContainerColour: '#F5F5F5',
  invertedContentColour: '#E0E0E0',
  invertedContainerColour: '#1B1E22',

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

  navAlt: {
    contentColour: '#A3A3A3',

    pseudo: {
      contentColour: '#24292E',
    },

    special: {
      backgroundColour: '#DCDCDC',

      hover: {
        backgroundColour: '#C4C4C4',
      },

      active: {
        backgroundColour: '#A3A3A3',
      },
    },
  },
};

const darkTheme: Theme = {
  ...commonTheme,

  background: '#363D45',
  contentColour: '#E0E0E0',
  containerColour: '#1B1E22',
  secondaryContainerColour: '#24282D',
  invertedContentColour: '#24292e',
  invertedContainerColour: '#E0E0E0',

  nav: {
    background: '#24292E',
    contentColour: '#C4C4C4',

    pseudo: {
      contentColour: '#E0E0E0',
    },

    hover: {
      linkColour: '#1B1E22',
    },

    active: {
      linkColour: '#090A0B',
    },
  },

  navAlt: {
    contentColour: '#C4C4C4',

    pseudo: {
      contentColour: '#E0E0E0',
    },

    special: {
      backgroundColour: '#24292E',

      hover: {
        backgroundColour: '#1B1E22',
      },

      active: {
        backgroundColour: '#090A0B',
      },
    },
  },
};

export { lightTheme, darkTheme };
export type { ThemeObject, Theme };
