import { defineConfig, defineRecipe } from '@pandacss/dev';

const buttonRecipe = defineRecipe({
  className: 'button-recipe',
  description: 'The styles for the Button component',
  base: {
    display: 'flex',
  },
  variants: {
    val: {
      funky: { background: 'red', color: 'white' },
      edgy: { border: '1px solid red' },
    },
    size: {
      sm: { padding: '4', fontSize: '12px' },
      lg: { padding: '8', fontSize: '40px' },
    },
    shape: {
      square: { borderRadius: '0' },
      circle: { borderRadius: '50%', backgroundColor: 'blue' },
    },
  },
  jsx: ['Button'],
});

export default defineConfig({
  // Whether to opt-out of the defaults config presets
  // [@pandacss/preset-base, @pandacss/preset-panda]
  eject: true,

  // The namespace prefix for the generated css classes and css variables.
  prefix: 'flexteam',

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

  // Useful for theme customization
  theme: {
    recipes: {
      Button: buttonRecipe,
    },
    tokens: {
      colors: {
        primary: { value: '#0FEE0F', description: 'Primary color' },
        secondary: { value: '#EE0F0F' },
      },
      fonts: {
        body: { value: 'system-ui, sans-serif' },
      },
    },
    semanticTokens: {
      colors: {
        danger: { value: '{colors.secondary}' },
        success: { value: '{colors.primary}' },
      },
    },
  },

  // The css utility definitions.
  utilities: {
    color: {
      values: 'colors',
    },
    px: {
      transform(value) {
        return {
          paddingLeft: value,
          paddingRight: value,
        };
      },
    },
  },

  jsxFramework: 'react',

  // The output directory for your css system
  outdir: 'styled-system',
});
