import GNB from '@/domains/GNB';
import { HeaderMenu } from '@/domains/HeaderMenu';
import { Inbox } from '@/domains/Inbox';
import { Layout } from '@/packages/design-packages/components';
import { GetServerSideProps } from 'next';
import { Suspense } from 'react';

import { machine } from '@zag-js/popover';

interface Props {
  id: string;
}

export default function InboxDetailPage({ id }: Props) {
  const {} = machine();

  return (
    <Layout
      gnb={
        <Suspense>
          <GNB selectedMenu="inbox" />
        </Suspense>
      }
      header={<HeaderMenu selectedMenu="inbox" />}
    >
      <Suspense fallback={<div>LOADING</div>}>
        <Inbox />
      </Suspense>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<{
  id: string;
}> = async context => {
  const { id } = context.query;

  if (typeof id === 'string' && id !== undefined) {
    return { props: { id } };
  }

  return {
    redirect: {
      destination: '/inbox',
      permanent: false,
    },
  };
};
