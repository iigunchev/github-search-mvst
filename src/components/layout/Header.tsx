import Link from 'next/link';

const Header = ({ title }: { title: string }) => {
  return (
    <header className="bg-dark p-4 w-full">
      <Link href="/">
        <span className="text-slate-50 cursor-pointer text-lg">{title}</span>
      </Link>
    </header>
  );
};

export default Header;
