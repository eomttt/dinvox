import GNB from '@/domains/GNB';
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
    >
      <Suspense fallback={<div>LOADING</div>}>
        <Inbox />
      </Suspense>
    </Layout>
  );
}
