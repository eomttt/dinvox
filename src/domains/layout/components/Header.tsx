import { Flex } from 'packages/design-packages/components/layout/Flex';
import { ReactNode } from 'react';
import { styled } from '../../../../styled-system/jsx';

interface Props {
  title?: ReactNode;
  rightSlot?: ReactNode;
}

const GNB_HEADER_HEIGHT = 40;

const Header = ({ title, rightSlot }: Props) => {
  return (
    <StyledContainer align="center" justify="between">
      <div>{title}</div>
      {rightSlot}
    </StyledContainer>
  );
};

const StyledContainer = styled(Flex, {
  base: {
    height: GNB_HEADER_HEIGHT,
    px: 10,
  },
});

export { Header };
