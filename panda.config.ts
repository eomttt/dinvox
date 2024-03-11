import {
  ColorKeyType,
  ColorValueType,
  colors,
} from '@/packages/design-packages/colors';
import { utils } from '@/packages/design-packages/utils';
import {
  defineConfig,
  definePreset,
  defineTokens,
  defineUtility,
} from '@pandacss/dev';
import type { UtilityConfig } from '@pandacss/types';
import { NestedCssProperties } from './styled-system/types';

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
      transform: value => {
        return utilityFunc(value as never) as NestedCssProperties | undefined;
      },
    }),
  };
}, {} as UtilityConfig);

const presets = definePreset({
  theme: {
    tokens: defineTokens({
      colors: colorTokens,
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
  prefix: 'flexteam',
  jsxFactory: 'flexteam',

  // Whether to watch for changes and regenerate the css.
  watch: true,

  // Where to look for your css declarations
  include: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/pages/**/*.{ts,tsx,js,jsx}',
  ],

  // Files to exclude
  exclude: [],

  // Whether to allow shorthand properties
  shorthands: false,

  globalCss: {
    'html, body': {
      margin: 0,
      padding: 0,
    },
  },

  jsxFramework: 'react',

  // The output directory for your css system
  outdir: 'styled-system',
});
