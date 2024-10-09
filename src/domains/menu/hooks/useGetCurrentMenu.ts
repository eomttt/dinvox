import { usePathname } from 'next/navigation';
import { Menu } from '../constants/menu';
import { isSupportedMenu } from '../isSupportedMenu';

const useGetCurrentMenu = (): Menu | undefined => {
  const pathname = usePathname();

  const currentMenu = pathname.split('/')[1];

  if (isSupportedMenu(currentMenu)) {
    return currentMenu;
  }

  return undefined;
};

export { useGetCurrentMenu };
