import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <nav style={{ background: '#1e40af', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold' }}>
        My Portfolio
      </Link>

      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>Home</Link>
        <Link to="/profile" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>Profile</Link>
        <Link to="/settings" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>Settings</Link>
        <Link to="/oldwork" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>Previous Work</Link>

        {isLoggedIn ? (
          <>
            <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>Dashboard</Link>
            <button
              onClick={handleLogout}
              style={{ padding: '6px 14px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '14px' }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            style={{ padding: '6px 14px', background: '#10b981', color: 'white', borderRadius: '6px', textDecoration: 'none', fontSize: '14px' }}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;