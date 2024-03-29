import { Button, List } from '@/packages/design-packages/components';
import { Typography } from '@/packages/design-packages/components/typography/Typography';
import { CheckIcon } from '@/packages/design-packages/icons/CheckIcon';
import { EnvelopeIcon } from '@/packages/design-packages/icons/EnvelopeIcon';
import { SettingIcon } from '@/packages/design-packages/icons/SettingIcon';
import { ReactNode } from 'react';
import { css } from '../../../styled-system/css';
import { styled } from '../../../styled-system/jsx';

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
                <Typography>{GnBMenuRecord[menu].title}</Typography>
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
