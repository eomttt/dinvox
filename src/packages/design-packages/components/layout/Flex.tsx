import { ComponentPropsWithoutRef } from 'react';
import { RecipeVariantProps, cva } from '../../../../../styled-system/css';
import { styled } from '../../../../../styled-system/jsx';

const flexRecipe = cva({
  base: {
    display: 'flex',
  },
  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
    },
    align: {
      stretch: {
        alignItems: 'stretch',
      },
      center: {
        alignItems: 'center',
      },
      start: {
        alignItems: 'flex-start',
      },
      end: {
        alignItems: 'flex-end',
      },
    },
    justify: {
      stretch: {
        justifyContent: 'stretch',
      },
      center: {
        justifyContent: 'center',
      },
      start: {
        justifyContent: 'flex-start',
      },
      end: {
        justifyContent: 'flex-end',
      },
    },
  },
  defaultVariants: {
    direction: 'row',
    align: 'stretch',
    justify: 'stretch',
  },
});

const Flex = styled('div', flexRecipe);

export { Flex };
