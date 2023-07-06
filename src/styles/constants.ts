export const color = {
  black: '#000000',
  gray: {
    10: '#0f0f0f',
    9: '#333333',
    8: '#3d3d3d',
    7: '#6f6f6f',
    6: '#8b8b8b',
    5: '#a5a5a5',
    4: '#c1c1c1',
    3: '#dfdfdf',
    2: '#f5f4f3',
    1: '#f7f7f7',
  } as const,
  white: '#ffffff',
  alert: '#f22222',
  warning: '#ffc123',
  complete: '#00c974',
  active: '#007df0',
  main: {
    // main 색상 변경 가능
    1: '#FF5C00',
    2: '#FFA51F',
    3: '#dff157',
    4: '#966E57',
  },
} as const;

export const radius = {
  4: 4,
  8: 8,
  12: 12,
};

export const fontFamily = {
  SUIT: 'SUIT Variable',
  EF_JEJU: 'EF_jejudoldam',
};

export const fontWeight = {
  bold: 700,
  semiBold: 600,
  medium: 500,
  regular: 300,
};

export const typograpy = {
  title: {
    1: {
      fontFamily: fontFamily.SUIT,
      fontSize: 20,
      fontWeight: fontWeight.bold,
      lineHeight: 150,
    },
    2: {
      fontFamily: fontFamily.SUIT,
      fontSize: 20,
      fontWeight: fontWeight.semiBold,
      lineHeight: 150,
    },
    3: {
      fontFamily: fontFamily.SUIT,
      fontSize: 20,
      fontWeight: fontWeight.medium,
      lineHeight: 150,
    },
    4: {
      fontFamily: fontFamily.SUIT,
      fontSize: 18,
      fontWeight: fontWeight.bold,
      lineHeight: 150,
    },
    5: {
      fontFamily: fontFamily.SUIT,
      fontSize: 18,
      fontWeight: fontWeight.semiBold,
      lineHeight: 150,
    },
    6: {
      fontFamily: fontFamily.SUIT,
      fontSize: 18,
      fontWeight: fontWeight.medium,
      lineHeight: 150,
    },
    7: {
      fontFamily: fontFamily.SUIT,
      fontSize: 18,
      fontWeight: fontWeight.regular,
      lineHeight: 150,
    },
  },
  paragraph: {
    1: {
      fontFamily: fontFamily.SUIT,
      fontSize: 16,
      fontWeight: fontWeight.semiBold,
      lineHeight: 150,
    },
    2: {
      fontFamily: fontFamily.SUIT,
      fontSize: 16,
      fontWeight: fontWeight.medium,
      lineHeight: 150,
    },
    3: {
      fontFamily: fontFamily.SUIT,
      fontSize: 16,
      fontWeight: fontWeight.regular,
      lineHeight: 150,
    },
    4: {
      fontFamily: fontFamily.SUIT,
      fontSize: 14,
      fontWeight: fontWeight.semiBold,
      lineHeight: 150,
    },
    5: {
      fontFamily: fontFamily.SUIT,
      fontSize: 14,
      fontWeight: fontWeight.medium,
      lineHeight: 150,
    },
    6: {
      fontFamily: fontFamily.SUIT,
      fontSize: 14,
      fontWeight: fontWeight.regular,
      lineHeight: 150,
    },
    7: {
      fontFamily: fontFamily.SUIT,
      fontSize: 14,
      fontWeight: fontWeight.regular,
      lineHeight: 150,
    },
  },
  caption: {
    1: {
      fontFamily: fontFamily.SUIT,
      fontSize: 12,
      fontWeight: fontWeight.semiBold,
      lineHeight: 150,
    },
    2: {
      fontFamily: fontFamily.SUIT,
      fontSize: 12,
      fontWeight: fontWeight.medium,
      lineHeight: 150,
    },
    3: {
      fontFamily: fontFamily.SUIT,
      fontSize: 12,
      fontWeight: fontWeight.regular,
      lineHeight: 150,
    },
    4: {
      fontFamily: fontFamily.SUIT,
      fontSize: 10,
      fontWeight: fontWeight.semiBold,
      lineHeight: 150,
    },
    5: {
      fontFamily: fontFamily.SUIT,
      fontSize: 10,
      fontWeight: fontWeight.medium,
      lineHeight: 150,
    },
    6: {
      fontFamily: fontFamily.SUIT,
      fontSize: 10,
      fontWeight: fontWeight.regular,
      lineHeight: 150,
    },
    7: {
      fontFamily: fontFamily.SUIT,
      fontSize: 10,
      fontWeight: fontWeight.regular,
      lineHeight: 150,
    },
  },
};
