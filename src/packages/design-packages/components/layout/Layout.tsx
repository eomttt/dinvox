import { cva } from '../../../../../styled-system/css';

const layoutRecipe = cva({
  base: {
    display: 'flex',
    height: '100vh',
  },
});

const HEADER_HEIGHT = 40;

const layoutHeaderRecipe = cva({
  base: {
    width: '100%',
    position: 'fixed',
    top: 0,
    height: HEADER_HEIGHT,
  },
});

const layoutNavRecipe = cva({
  base: {
    isolation: 'isolate',
  },
});

const layoutMainRecipe = cva({
  base: { overflow: 'auto', flexGrow: 1, paddingTop: HEADER_HEIGHT },
});

type Props = {
  snb: React.ReactNode;
  gnb: React.ReactNode;
  children: React.ReactNode;
};

const Layout = ({ snb, gnb, children }: Props) => {
  return (
    <div className={layoutRecipe()}>
      <header className={layoutHeaderRecipe()}>{gnb}</header>
      <nav className={layoutNavRecipe()}>{snb}</nav>
      <main className={layoutMainRecipe()}>{children}</main>
    </div>
  );
};

export { Layout };
