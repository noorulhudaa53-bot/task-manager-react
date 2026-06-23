const Footer = ({ text }) => {
  return (
    <footer style={{ background: '#1f2937', color: 'white', textAlign: 'center', padding: '12px', fontSize: '14px' }}>
      <p>{text || '© 2026 My App'}</p>
    </footer>
  );
};

export default Footer;