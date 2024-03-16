import { cva } from '../../../../../styled-system/css';

const layoutRecipe = cva({
  base: {
    display: 'flex',
    height: '100vh',
  },
});

const layoutMainRecipe = cva({ base: { overflow: 'auto', flexGrow: 1 } });

type Props = {
  gnb: React.ReactNode;
  children: React.ReactNode;
};

const Layout = ({ gnb, children }: Props) => {
  return (
    <div className={layoutRecipe()}>
      {gnb}
      <main className={layoutMainRecipe()}>{children}</main>
    </div>
  );
};

export { Layout };
