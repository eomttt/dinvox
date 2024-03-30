import { Menu } from '@/domains/core/Menu';
import { useState } from 'react';
import { styled } from '../../../styled-system/jsx';
import { Header } from './components/Header';
import { MenuList } from './components/MenuList';

interface Props {
  selectedMenu: Menu;
}

type MenuType = 'fixed' | 'floatingHide' | 'floatingShow';

const GNB = ({ selectedMenu }: Props) => {
  const [type, setType] = useState<MenuType>('fixed');

  return (
    <StyledContainer
      type={type}
      onMouseEnter={() => {
        if (type !== 'fixed') {
          setType('floatingShow');
        }
      }}
      onMouseLeave={() => {
        if (type !== 'fixed') {
          setType('floatingHide');
        }
      }}
    >
      <Header
        onClickHide={() => {
          if (type === 'fixed') {
            setType('floatingShow');
          } else {
            setType('fixed');
          }
        }}
      />
      <MenuList selectedMenu={selectedMenu} />
    </StyledContainer>
  );
};

const floatingStyle = {
  position: 'absolute',
  height: 'fit-content',
  backgroundColor: 'grayLightest',
  zIndex: 1,
  borderRadius: 8,
  boxShadow: 'rgba(0, 0, 0, 0.024) -1px 0px 0px 0px inset',
};

const StyledContainer = styled('nav', {
  base: {
    width: 'gnb',
    height: '100vh',
    backgroundColor: 'black004',

    transition: 'transform 0.2s ease 0s, opacity 0.2s ease 0s;',
  },
  variants: {
    type: {
      fixed: {},
      floatingHide: {
        opacity: 0,
        transform: 'translateX(calc(10px - 100%)) translateY(40px)',
        ...floatingStyle,
      },
      floatingShow: {
        opacity: 1,
        transform: 'translate(0, 40px)',
        ...floatingStyle,
      },
    },
  },
});

export default GNB;
