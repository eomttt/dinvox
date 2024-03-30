import GNB from '@/domains/GNB';
import { HeaderMenu } from '@/domains/HeaderMenu';
import { Inbox } from '@/domains/Inbox';
import { Menu } from '@/domains/core/Menu';
import { isSupportedMenu } from '@/domains/core/isSupportedMenu';
import { Layout } from '@/packages/design-packages/components';
import { GetServerSideProps } from 'next';
import { Suspense } from 'react';

interface Props {
  menu: Menu;
}

export default function MenuPage({ menu }: Props) {
  return (
    <Layout
      gnb={
        <Suspense>
          <GNB selectedMenu={menu} />
        </Suspense>
      }
      header={<HeaderMenu selectedMenu={menu} />}
    >
      <Suspense fallback={<div>LOADING</div>}>
        <Inbox />
      </Suspense>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<{
  menu: Menu;
}> = async context => {
  const { menu } = context.query;

  if (!isSupportedMenu(menu)) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return { props: { menu } };
};
