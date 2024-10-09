'use client';

import { useGetCurrentMenu } from 'domains/menu/hooks/useGetCurrentMenu';
import { Header } from './components/Header';

const GnB = () => {
  const currentMenu = useGetCurrentMenu();

  return <Header title={currentMenu} />;
};

export { GnB };
