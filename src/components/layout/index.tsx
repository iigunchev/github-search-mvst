import type { ReactNode } from 'react';
import Header from './Header';

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="h-full w-full bg-white sm:bg-orange-50">
      <Header title="GitSearch"/>
      {children}
    </div>
  );
};

export default Layout;
