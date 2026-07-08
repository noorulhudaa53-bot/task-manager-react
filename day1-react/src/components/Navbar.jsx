import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();

  const handleLogout = () => {
    logout();
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
        <Link to="/cart" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>Cart</Link>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          style={{ padding: '6px 12px', background: isDark ? '#f9fafb' : '#1f2937', color: isDark ? '#1f2937' : '#f9fafb', border: 'none', borderRadius: '20px', cursor: 'pointer', fontSize: '12px' }}
        >
          {isDark ? 'Light' : 'Dark'}
        </button>

        {user ? (
          <>
            <span style={{ color: '#93c5fd', fontSize: '14px' }}>
              Hi, {user.name}!
            </span>
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