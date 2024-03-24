import { ComponentPropsWithoutRef } from 'react';
import { cva, cx } from '../../../../../styled-system/css';

const listRecipe = cva({
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

interface ListItemProps extends ComponentPropsWithoutRef<'li'> {
  divider?: boolean;
}

const ListItem = ({ className, divider = false, ...props }: ListItemProps) => {
  return (
    <li
      {...props}
      className={cx(
        listItemRecipe({
          divider: divider ? true : false,
        }),
        className
      )}
    />
  );
};

List.Item = ListItem;

export { List };
