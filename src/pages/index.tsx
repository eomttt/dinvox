import { Menu } from '@/domains/Core/Menu';
import GNB from '@/domains/GNB';
import { HeaderMenu } from '@/domains/HeaderMenu';
import { Inbox } from '@/domains/Inbox';
import { Layout } from '@/packages/design-packages/components';
import { Suspense, useState } from 'react';

export default function Home() {
  const [selectedMenu, setSelectedMenu] = useState<Menu>('inbox');

  return (
    <Layout
      gnb={
        <Suspense>
          <GNB
            selectedMenu={selectedMenu}
            onChangeSelectedMenu={setSelectedMenu}
          />
        </Suspense>
      }
      header={<HeaderMenu selectedMenu={selectedMenu} />}
    >
      <Suspense fallback={<div>LOADING</div>}>
        <Inbox />
      </Suspense>
    </Layout>
  );
}
