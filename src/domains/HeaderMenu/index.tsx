import { Flex } from '@/packages/design-packages/components/layout/Flex';
import { css } from '../../../styled-system/css';

const HeaderMenu = () => {
  return (
    <Flex
      align="center"
      className={css({
        height: '100%',
        px: 10,
      })}
    >
      Inbox
    </Flex>
  );
};

export { HeaderMenu };
