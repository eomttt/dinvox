import { ReactNode } from 'react';
import { Menu } from './Menu';
import { EnvelopeIcon } from '@/packages/design-packages/icons/EnvelopeIcon';
import { CheckIcon } from '@/packages/design-packages/icons/CheckIcon';
import { SettingIcon } from '@/packages/design-packages/icons/SettingIcon';

type Value = {
  title: string;
  icon: ReactNode;
};

const MenuIconRecord: Record<Menu, Value> = {
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

export { MenuIconRecord };
