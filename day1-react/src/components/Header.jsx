const Header = ({ title, subtitle }) => {
  return (
    <header style={{ background: '#1e40af', color: 'white', padding: '16px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>{title}</h1>
      {subtitle && <p style={{ fontSize: '14px', opacity: '0.8' }}>{subtitle}</p>}
    </header>
  );
};

export default Header;