import { ComponentPropsWithoutRef } from 'react';
import { cva, cx } from '../../../../../styled-system/css';

const typographyRecipe = cva({
  base: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.5,
    color: 'black',
  },
});

interface Props extends ComponentPropsWithoutRef<'span'> {}

const Typography = ({ children, className, ...props }: Props) => {
  return (
    <span
      className={cx(
        // using the list recipe
        typographyRecipe(),
        // adding style overrides (external)
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export { Typography };
