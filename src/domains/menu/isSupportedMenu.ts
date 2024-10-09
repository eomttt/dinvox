import { Menu } from './constants/menu';

const isSupportedMenu = (menu: unknown): menu is Menu => {
  if (typeof menu === 'string' && Menu.includes(menu as any)) {
    return true;
  }
  return false;
};

export { isSupportedMenu };
