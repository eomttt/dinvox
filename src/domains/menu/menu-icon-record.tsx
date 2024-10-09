import { EnvelopeIcon } from 'packages/design-packages/icons/EnvelopeIcon';
import { SettingIcon } from 'packages/design-packages/icons/SettingIcon';
import { ReactNode } from 'react';
import { Menu } from './constants/menu';

type Value = {
  title: string;
  icon: ReactNode;
};

const MenuIconRecord: Record<Menu, Value> = {
  inbox: {
    title: 'Inbox',
    icon: <EnvelopeIcon size={20} />,
  },
  setting: {
    title: 'Setting',
    icon: <SettingIcon size={20} />,
  },
};

export { MenuIconRecord };
