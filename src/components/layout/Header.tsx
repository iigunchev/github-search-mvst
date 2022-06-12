import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-dark p-4">
      <Link href="/">
        <span className="text-slate-50 cursor-pointer text-lg">GitSearch</span>
      </Link>
    </header>
  );
};

export default Header;
