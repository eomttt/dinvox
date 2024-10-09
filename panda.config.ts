import {
  defineConfig,
  definePreset,
  defineTokens,
  defineUtility,
} from '@pandacss/dev';
import type { PropertyTransform, UtilityConfig } from '@pandacss/types';
import {
  ColorKeyType,
  ColorValueType,
  colors,
} from 'packages/design-packages/colors';
import { utils } from 'packages/design-packages/utils';

const colorTokens = Object.entries(colors).reduce(
  (acc, [key, value]) => {
    return {
      ...acc,
      [key]: {
        value,
      },
    };
  },
  {} as Record<ColorKeyType, { value: ColorValueType }>
);

const utilities = Object.entries(utils).reduce((acc, [key, utilityFunc]) => {
  return {
    ...acc,
    [key]: defineUtility({
      transform: utilityFunc as PropertyTransform,
    }),
  };
}, {} as UtilityConfig);

const presets = definePreset({
  theme: {
    tokens: defineTokens({
      colors: colorTokens,
      sizes: {
        snb: {
          value: '240px',
        },
      },
    }),
  },
  utilities: utilities,
});

export default defineConfig({
  // Whether to opt-out of the defaults config presets
  // [@pandacss/preset-base, @pandacss/preset-panda]
  eject: true,

  presets: ['@pandacss/preset-base', presets],

  // The namespace prefix for the generated css classes and css variables.
  prefix: 'dinvox',

  // Whether to watch for changes and regenerate the css.
  watch: true,

  // Where to look for your css declarations
  include: [
    './src/domains/**/*.{ts,tsx,js,jsx}',
    './src/packages/**/*.{ts,tsx,js,jsx}',
    './src/app/**/*.{ts,tsx,js,jsx}',
  ],

  // Files to exclude
  exclude: [],

  // Whether to allow shorthand properties
  shorthands: false,

  globalCss: {
    'html, body': {
      fontFamily: `ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"`,
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'auto',
      lineHeight: 1,
      fontSize: '14px',
      margin: 0,
      padding: 0,
      fontWeight: 500,
    },
    '*': { boxSizing: 'border-box' },
    'a, area, button, [role="button"], input:not([type="range"]), label, select, summary, textarea':
      {
        outline: 'none',
      },

    '[role="button"]': {
      background: 'none',
    },

    'input, button,select, optgroup, textarea': {
      margin: '0',
      padding: '0',
      border: 'none',
      color: 'inherit',
      fontSize: 'inherit',
      fontFamily: 'inherit',
      lineHeight: 'inherit',
    },
    'button, html [type="button"],[type="reset"], [type="submit"]': {
      '-webkit-appearance': 'none',
    },
    p: {
      marginTop: 0,
      marginBottom: 0,
    },
    'h1, h2, h3, h4, h5, h6': {
      margin: 0,
      padding: 0,
    },

    'input, textarea': {
      '-webkit-appearance': 'none',
      appearance: 'none',
    },
    'input[type="search"]': {
      '-webkit-appearance': 'none',
    },
    'ul, ol': {
      listStyle: 'none',
      paddingInlineStart: 0,
      marginInlineStart: 0,
      marginInlineEnd: 0,
      marginBlockStart: 0,
      marginBlockEnd: 0,
    },
  },

  jsxFramework: 'react',

  // The output directory for your css system
  outdir: 'styled-system',
});
