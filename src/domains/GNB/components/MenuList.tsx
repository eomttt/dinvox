import { Menu } from '@/domains/Core/Menu';
import { Button, List } from '@/packages/design-packages/components';
import { Typography } from '@/packages/design-packages/components/typography/Typography';
import { css } from '../../../../styled-system/css';
import { styled } from '../../../../styled-system/jsx';
import { MenuIconRecord } from '@/domains/Core/menu-icon-record';

interface Props {
  selectedMenu: Menu;
  onChangeSelectedMenu: (value: Menu) => void;
}

const MenuList = ({ selectedMenu, onChangeSelectedMenu }: Props) => {
  return (
    <StyledList>
      {Menu.map(menu => {
        return (
          <List.Item key={menu}>
            <Button
              className={css({
                width: '100%',
                height: '100%',
                px: 10,
              })}
              active={selectedMenu === menu}
              leftSlot={MenuIconRecord[menu].icon}
              onClick={() => {
                onChangeSelectedMenu(menu);
              }}
            >
              <Typography>{MenuIconRecord[menu].title}</Typography>
            </Button>
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

export { MenuList };
