const Layout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <main style={{ flex: 1, maxWidth: '900px', margin: '0 auto', width: '100%', padding: '16px' }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;