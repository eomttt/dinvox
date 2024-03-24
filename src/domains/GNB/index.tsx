import { Button, List } from '@/packages/design-packages/components';
import { styled } from '../../../styled-system/jsx';
import { EnvelopeIcon } from '@/packages/design-packages/icons/EnvelopeIcon';
import { css } from '../../../styled-system/css';
import { ReactNode } from 'react';
import { CheckIcon } from '@/packages/design-packages/icons/CheckIcon';
import { SettingIcon } from '@/packages/design-packages/icons/SettingIcon';

const GnBMenu = ['inbox', 'done', 'sent', 'setting'] as const;

type GnBMenu = (typeof GnBMenu)[number];
type GnBValue = {
  title: string;
  icon: ReactNode;
};

const GnBMenuRecord: Record<GnBMenu, GnBValue> = {
  inbox: {
    title: 'Inbox',
    icon: <EnvelopeIcon />,
  },
  done: {
    title: 'Done',
    icon: <CheckIcon />,
  },
  sent: {
    title: 'Sent',
    icon: <EnvelopeIcon />,
  },
  setting: {
    title: 'Setting',
    icon: <SettingIcon />,
  },
};

const GNB = () => {
  return (
    <StyledContainer>
      <div>Profile</div>
      <StyledList>
        {GnBMenu.map(menu => {
          return (
            <List.Item key={menu}>
              <Button
                className={css({
                  py: 10,
                })}
                leftSlot={GnBMenuRecord[menu].icon}
              >
                {GnBMenuRecord[menu].title}
              </Button>
            </List.Item>
          );
        })}
      </StyledList>
    </StyledContainer>
  );
};

const StyledList = styled(List, {
  base: {
    gap: '10px',
  },
});

const StyledContainer = styled('nav', {
  base: {
    width: 'gnb',
    height: '100vh',
    backgroundColor: 'black004',
  },
});

export default GNB;
