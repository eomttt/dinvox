import { Menu } from '@/domains/core/Menu';
import { MenuIconRecord } from '@/domains/core/menu-icon-record';
import { List } from '@/packages/design-packages/components';
import { Typography } from '@/packages/design-packages/components/typography/Typography';
import Link from 'next/link';
import { styled } from '../../../../styled-system/jsx';
import { Flex } from '@/packages/design-packages/components/layout/Flex';
import { css } from '../../../../styled-system/css';

interface Props {
  selectedMenu: Menu;
}

const MenuList = ({ selectedMenu }: Props) => {
  return (
    <StyledList>
      {Menu.map(menu => {
        return (
          <StyledLink key={menu} href={menu} active={selectedMenu === menu}>
            <List.Item key={menu}>
              <Flex
                align="center"
                className={css({
                  gap: 8,
                })}
              >
                {MenuIconRecord[menu].icon}
                <Typography>{MenuIconRecord[menu].title}</Typography>
              </Flex>
            </List.Item>
          </StyledLink>
        );
      })}
    </StyledList>
  );
};

const StyledList = styled(List, {
  base: {
    gap: '4px',
  },
});

const StyledLink = styled(Link, {
  base: {
    px: 10,
    cursor: 'pointer',
    textDecoration: 'none',

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

export { MenuList };
