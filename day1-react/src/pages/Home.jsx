import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '16px' }}>
        Welcome to My Portfolio
      </h1>
      <p style={{ color: '#6b7280', fontSize: '16px', marginBottom: '32px' }}>
        MERN Stack + AI Developer
      </p>

      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
        <Link
          to="/dashboard"
          style={{ padding: '12px 24px', background: '#2563eb', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}
        >
          Go to Dashboard
        </Link>
        <Link
          to="/profile"
          style={{ padding: '12px 24px', background: '#10b981', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}
        >
          View Profile
        </Link>
        <Link
          to="/settings"
          style={{ padding: '12px 24px', background: '#6b7280', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}
        >
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Home;