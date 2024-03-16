import { ComponentPropsWithoutRef } from 'react';
import { cva, cx } from '../../../../../styled-system/css';

const buttonRecipes = cva({
  base: {
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'black004',
    },
  },
});

const Button = ({
  className,
  ...props
}: ComponentPropsWithoutRef<'button'>) => {
  return (
    <button
      className={cx(
        // using the list recipe
        buttonRecipes(),
        // adding style overrides (external)
        className
      )}
      {...props}
    />
  );
};

export { Button };
