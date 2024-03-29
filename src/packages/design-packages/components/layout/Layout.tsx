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

const layoutMainRecipe = cva({
  base: { overflow: 'auto', flexGrow: 1, paddingTop: HEADER_HEIGHT },
});

type Props = {
  gnb: React.ReactNode;
  header: React.ReactNode;
  children: React.ReactNode;
};

const Layout = ({ gnb, header, children }: Props) => {
  return (
    <div className={layoutRecipe()}>
      {gnb}
      <main className={layoutMainRecipe()}>
        <header className={layoutHeaderRecipe()}>{header}</header>
        {children}
      </main>
    </div>
  );
};

export { Layout };
