import { Menu } from 'domains/menu/constants/menu';
import { MenuIconRecord } from 'domains/menu/menu-icon-record';
import Link from 'next/link';
import { List } from 'packages/design-packages/components';
import { Flex } from 'packages/design-packages/components/layout/Flex';
import { Typography } from 'packages/design-packages/components/typography/Typography';
import { css } from '../../../../styled-system/css';
import { styled } from '../../../../styled-system/jsx';

interface Props {
  selectedMenu?: Menu;
}

const MenuList = ({ selectedMenu }: Props) => {
  return (
    <StyledList>
      {Menu.map(menu => {
        return (
          <List.Item key={menu}>
            <StyledLink href={menu} active={selectedMenu === menu}>
              <Flex
                align="center"
                className={css({
                  gap: 8,
                  height: '100%',
                })}
              >
                {MenuIconRecord[menu].icon}
                <Typography>{MenuIconRecord[menu].title}</Typography>
              </Flex>
            </StyledLink>
          </List.Item>
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

    width: '100%',
    height: '100%',

    textDecoration: 'none',
    clickable: 'weak',
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
