import { MenuIconRecord } from '@/domains/core/menu-icon-record';
import { Menu } from '@/domains/core/Menu';
import { Flex } from '@/packages/design-packages/components/layout/Flex';
import { css } from '../../../styled-system/css';
import { Typography } from '@/packages/design-packages/components/typography/Typography';

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
      <Typography>{MenuIconRecord[selectedMenu].title}</Typography>
    </Flex>
  );
};

export { HeaderMenu };
