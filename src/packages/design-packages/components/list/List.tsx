import { ComponentPropsWithoutRef } from 'react';
import { cva, cx } from '../../../../../styled-system/css';
import { styled } from '../../../../../styled-system/jsx';

export const listRecipe = cva({
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const List = ({ className, ...props }: ComponentPropsWithoutRef<'ul'>) => {
  return (
    <ul
      {...props}
      className={cx(
        // using the list recipe
        listRecipe(),
        // adding style overrides (external)
        className
      )}
    />
  );
};

const listItemRecipe = cva({
  base: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    height: '45px',
  },
  variants: {
    divider: {
      true: {
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: 'black004',
      },
    },
  },
});

List.Item = styled('li', listItemRecipe);

export { List };
