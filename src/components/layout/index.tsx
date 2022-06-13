import type { ReactNode } from 'react';
import Header from './Header';

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header title="GitSearch"/>
      {children}
    </>
  );
};

export default Layout;
