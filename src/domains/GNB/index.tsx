import { useState } from 'react';
import { styled } from '../../../styled-system/jsx';
import { Header } from './components/Header';
import { MenuList } from './components/MenuList';

const GNB = () => {
  const [isFloating, setIsFloating] = useState(false);

  return (
    <StyledContainer floating={isFloating}>
      <Header
        onClickHide={() => {
          setIsFloating(!isFloating);
        }}
      />
      <MenuList />
    </StyledContainer>
  );
};

const StyledContainer = styled('nav', {
  base: {
    width: 'gnb',
    height: '100vh',
    backgroundColor: 'black004',

    transition: 'transform',
  },
  variants: {
    floating: {
      true: {
        transform: 'translateY(40px)',

        position: 'absolute',
        height: 'fit-content',
        backgroundColor: 'grayLightest',
        zIndex: 1,
        borderRadius: 4,
        boxShadow: 'rgba(0, 0, 0, 0.024) -1px 0px 0px 0px inset',
      },
    },
  },
});

export default GNB;
