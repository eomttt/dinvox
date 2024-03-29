import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cva, cx } from '../../../../../styled-system/css';
import { Flex } from '../layout/Flex';

const buttonRecipes = cva({
  base: {
    cursor: 'pointer',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'black008',
    },
  },
  variants: {
    active: {
      true: {
        backgroundColor: 'black004',
      },
    },
  },
});

interface Props extends ComponentPropsWithoutRef<'button'> {
  active?: boolean;
  leftSlot?: ReactNode;
}

const Button = ({ className, leftSlot, children, active, ...props }: Props) => {
  return (
    <button
      className={cx(
        // using the list recipe
        buttonRecipes({
          active: active,
        }),
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
