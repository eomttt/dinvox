import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cva, cx } from '../../../../../styled-system/css';
import { Flex } from '../layout/Flex';

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

interface Props extends ComponentPropsWithoutRef<'button'> {
  leftSlot?: ReactNode;
}

const Button = ({ className, leftSlot, children, ...props }: Props) => {
  return (
    <button
      className={cx(
        // using the list recipe
        buttonRecipes(),
        // adding style overrides (external)
        className
      )}
      {...props}
    >
      {leftSlot ? (
        <Flex
          css={{
            gap: '8px',
          }}
          align="center"
        >
          {leftSlot}
          {children}
        </Flex>
      ) : (
        children
      )}
    </button>
  );
};

export { Button };
