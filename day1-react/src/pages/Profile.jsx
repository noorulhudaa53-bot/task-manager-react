import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>My Profile</h1>
        <button
          onClick={() => navigate(-1)}
          style={{ padding: '8px 16px', background: '#6b7280', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          Go Back
        </button>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#2563eb', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '32px', fontWeight: 'bold' }}>
          N
        </div>
        <h2 style={{ fontSize: '22px', fontWeight: 'bold' }}>Noor ul Huda</h2>
        <p style={{ color: '#6b7280' }}>MERN Stack + AI Developer</p>
      </div>

      <div style={{ border: '1px solid #e5e7eb', borderRadius: '12px', padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #e5e7eb' }}>
          <span style={{ fontWeight: 'bold' }}>Email</span>
          <span style={{ color: '#6b7280' }}>noorulhudaa@portfolio.com</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #e5e7eb' }}>
          <span style={{ fontWeight: 'bold' }}>Location</span>
          <span style={{ color: '#6b7280' }}>Pakistan</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0' }}>
          <span style={{ fontWeight: 'bold' }}>Skills</span>
          <span style={{ color: '#6b7280' }}>React, Node.js, MongoDB</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;