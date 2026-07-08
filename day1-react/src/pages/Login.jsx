import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    if (email === 'admin@test.com' && password === '123456') {
      login(email);
      navigate('/dashboard');
    } else {
      setError('Wrong email or password! Use admin@test.com / 123456');
    }
  };

  return (
    <div style={{ padding: '40px', maxWidth: '400px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '24px', textAlign: 'center' }}>
        Login
      </h1>

      <div style={{ border: '1px solid #e5e7eb', borderRadius: '12px', padding: '24px' }}>
        {error && (
          <p style={{ color: 'red', fontSize: '13px', marginBottom: '12px', background: '#fef2f2', padding: '8px', borderRadius: '6px' }}>
            {error}
          </p>
        )}

        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px', fontWeight: 'bold' }}>
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@test.com"
            style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #e5e7eb', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px', fontWeight: 'bold' }}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="123456"
            style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #e5e7eb', boxSizing: 'border-box' }}
          />
        </div>

        <button
          onClick={handleLogin}
          style={{ width: '100%', padding: '10px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }}
        >
          Login
        </button>

        <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '12px', textAlign: 'center' }}>
          Use: admin@test.com / 123456
        </p>
      </div>
    </div>
  );
};

export default Login;