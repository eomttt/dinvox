'use client';
import { Button } from 'packages/design-packages/components';
import { AngleDoubleSmallLeftIcon } from 'packages/design-packages/icons/AngleDoubleSmallLeftIcon';
import { useState } from 'react';
import { css } from '../../../styled-system/css';
import { styled } from '../../../styled-system/jsx';
import { Header } from './components/Header';
import { MenuList } from './components/MenuList';

import { useGetCurrentMenu } from 'domains/menu/hooks/useGetCurrentMenu';

type MenuType = 'fixed' | 'floatingHide' | 'floatingShow';

const SnB = () => {
  const [type, setType] = useState<MenuType>('fixed');

  const currentMenu = useGetCurrentMenu();

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
        title="Profile"
        rightSlot={
          <Button
            className={css({
              width: 30,
              height: 30,
              borderRadius: '4px',
            })}
            onClick={() => {
              if (type === 'fixed') {
                setType('floatingShow');
              } else {
                setType('fixed');
              }
            }}
          >
            <AngleDoubleSmallLeftIcon />
          </Button>
        }
      />
      <MenuList selectedMenu={currentMenu} />
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

const StyledContainer = styled('div', {
  base: {
    width: 'snb',
    height: '100vh',
    backgroundColor: 'grayLightest',

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

export { SnB };
