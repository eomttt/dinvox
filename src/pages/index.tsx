import GNB from '@/domains/GNB';
import { MailList } from '@/domains/Mail';
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
        <MailList />
      </Suspense>
    </Layout>
  );
}
