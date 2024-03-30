import { MenuIconRecord } from '@/domains//Core/menu-icon-record';
import { Menu } from '@/domains/Core/Menu';
import { Flex } from '@/packages/design-packages/components/layout/Flex';
import { css } from '../../../styled-system/css';

interface Props {
  selectedMenu: Menu;
}

const HeaderMenu = ({ selectedMenu }: Props) => {
  return (
    <Flex
      align="center"
      className={css({
        height: '100%',
        px: 40,
        gap: 10,
      })}
    >
      {MenuIconRecord[selectedMenu].icon}
      {MenuIconRecord[selectedMenu].title}
    </Flex>
  );
};

export { HeaderMenu };
