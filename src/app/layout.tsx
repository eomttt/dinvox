import { Layout } from 'packages/design-packages/components';

import { GnB } from 'domains/layout/GnB';
import { SnB } from 'domains/layout/SnB';
import { ReactNode } from 'react';
import '../../styled-system/styles.css';

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ko">
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
      />
      <meta name="theme-color" content="#ffffff" />
      <body>
        <Layout snb={<SnB />} gnb={<GnB />}>
          {children}
        </Layout>
      </body>
    </html>
  );
}
