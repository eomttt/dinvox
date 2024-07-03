import GNB from '@/domains/GNB';
import { HeaderMenu } from '@/domains/HeaderMenu';
import { Inbox } from '@/domains/Inbox';
import { Layout } from '@/packages/design-packages/components';
import { Suspense } from 'react';
import { css } from '../../../styled-system/css';
import { colors } from '@/packages/design-packages/colors';
import { listRecipe } from '@/packages/design-packages/components/list/List';

export default function InboxPage() {
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
        <div className={css(listRecipe.raw())}>Test</div>
        <Inbox />
      </Suspense>
    </Layout>
  );
}
