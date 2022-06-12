import './Header.module.css';

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: 'black',
        color: 'white',
        padding: '10px',
        height: '56px',
        fontSize: '28px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      GitSearch
    </header>
  );
};

export default Header;
