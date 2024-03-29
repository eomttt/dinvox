import { Button, List } from '@/packages/design-packages/components';
import { Typography } from '@/packages/design-packages/components/typography/Typography';
import { CheckIcon } from '@/packages/design-packages/icons/CheckIcon';
import { EnvelopeIcon } from '@/packages/design-packages/icons/EnvelopeIcon';
import { SettingIcon } from '@/packages/design-packages/icons/SettingIcon';
import { ReactNode, useState } from 'react';
import { css } from '../../../../styled-system/css';
import { styled } from '../../../../styled-system/jsx';

const GnBMenu = ['inbox', 'done', 'sent', 'setting'] as const;

type GnBMenu = (typeof GnBMenu)[number];
type GnBValue = {
  title: string;
  icon: ReactNode;
};

const GnBMenuRecord: Record<GnBMenu, GnBValue> = {
  inbox: {
    title: 'Inbox',
    icon: <EnvelopeIcon size={20} />,
  },
  done: {
    title: 'Done',
    icon: <CheckIcon size={20} />,
  },
  sent: {
    title: 'Sent',
    icon: <EnvelopeIcon size={20} />,
  },
  setting: {
    title: 'Setting',
    icon: <SettingIcon size={20} />,
  },
};

const MenuList = () => {
  const [selected, setSelected] = useState<GnBMenu>('inbox');

  return (
    <StyledList>
      {GnBMenu.map(menu => {
        return (
          <List.Item key={menu}>
            <Button
              className={css({
                width: '100%',
                height: '100%',
                px: 10,
              })}
              active={selected === menu}
              leftSlot={GnBMenuRecord[menu].icon}
              onClick={() => {
                setSelected(menu);
              }}
            >
              <Typography>{GnBMenuRecord[menu].title}</Typography>
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
