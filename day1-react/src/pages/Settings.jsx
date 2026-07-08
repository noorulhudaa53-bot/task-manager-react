import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>Settings</h1>
        <button
          onClick={() => navigate(-1)}
          style={{ padding: '8px 16px', background: '#6b7280', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          Go Back
        </button>
      </div>

      <div style={{ border: '1px solid #e5e7eb', borderRadius: '12px', padding: '24px' }}>

        {/* Notifications */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #e5e7eb' }}>
          <div>
            <p style={{ fontWeight: 'bold' }}>Notifications</p>
            <p style={{ fontSize: '12px', color: '#6b7280' }}>Receive email notifications</p>
          </div>
          <button
            onClick={() => setNotifications(!notifications)}
            style={{ padding: '6px 16px', background: notifications ? '#2563eb' : '#e5e7eb', color: notifications ? 'white' : '#6b7280', border: 'none', borderRadius: '20px', cursor: 'pointer' }}
          >
            {notifications ? 'ON' : 'OFF'}
          </button>
        </div>

        {/* Dark Mode */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #e5e7eb' }}>
          <div>
            <p style={{ fontWeight: 'bold' }}>Dark Mode</p>
            <p style={{ fontSize: '12px', color: '#6b7280' }}>Switch to dark theme</p>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{ padding: '6px 16px', background: darkMode ? '#2563eb' : '#e5e7eb', color: darkMode ? 'white' : '#6b7280', border: 'none', borderRadius: '20px', cursor: 'pointer' }}
          >
            {darkMode ? 'ON' : 'OFF'}
          </button>
        </div>

        {/* Logout */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0' }}>
          <div>
            <p style={{ fontWeight: 'bold' }}>Logout</p>
            <p style={{ fontSize: '12px', color: '#6b7280' }}>Sign out of your account</p>
          </div>
          <button
            onClick={() => {
              localStorage.removeItem('isLoggedIn');
              navigate('/login');
            }}
            style={{ padding: '6px 16px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '20px', cursor: 'pointer' }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;