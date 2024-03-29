import GNB from '@/domains/GNB';
import { HeaderMenu } from '@/domains/HeaderMenu';
import { Inbox } from '@/domains/Inbox';
import { Layout } from '@/packages/design-packages/components';
import { Suspense } from 'react';

export default function Home() {
  return (
    <Layout
      gnb={
        <Suspense>
          <GNB />
        </Suspense>
      }
      header={<HeaderMenu />}
    >
      <Suspense fallback={<div>LOADING</div>}>
        <Inbox />
      </Suspense>
    </Layout>
  );
}
