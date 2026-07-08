import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '80px', fontWeight: 'bold', color: '#2563eb' }}>
        404
      </h1>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
        Page Not Found
      </h2>
      <p style={{ color: '#6b7280', marginBottom: '32px' }}>
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        style={{ padding: '12px 24px', background: '#2563eb', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;