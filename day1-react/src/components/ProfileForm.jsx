import { useState } from 'react';

const ProfileForm = () => {
  // 4 states — 4 fields ke liye
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');

  // Validation state
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!email.includes('@')) newErrors.email = 'Email is invalid';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!role) newErrors.role = 'Role is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = () => {
    if (validate()) {
      alert(`Welcome ${name}! Profile saved successfully.`);
    }
  };

  return (
    <div style={{ display: 'flex', gap: '40px', padding: '20px' }}>

      {/* Left side - Form */}
      <div style={{ flex: 1 }}>
        <h2 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: 'bold' }}>
          Fill Your Profile
        </h2>

        {/* Name field */}
        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '6px',
              border: errors.name ? '1px solid red' : '1px solid #ccc'
            }}
          />
          {errors.name && (
            <p style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
              {errors.name}
            </p>
          )}
        </div>

        {/* Email field */}
        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '6px',
              border: errors.email ? '1px solid red' : '1px solid #ccc'
            }}
          />
          {errors.email && (
            <p style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
              {errors.email}
            </p>
          )}
        </div>

        {/* Password field */}
        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '6px',
              border: errors.password ? '1px solid red' : '1px solid #ccc'
            }}
          />
          {errors.password && (
            <p style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
              {errors.password}
            </p>
          )}
        </div>

        {/* Role field */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
            Role
          </label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="e.g. React Developer"
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '6px',
              border: errors.role ? '1px solid red' : '1px solid #ccc'
            }}
          />
          {errors.role && (
            <p style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
              {errors.role}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          style={{
            background: '#2563eb',
            color: 'white',
            padding: '10px 24px',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px'
          }}
        >
          Save Profile
        </button>
      </div>

      {/* Right side - Live Preview */}
      <div style={{ flex: 1 }}>
        <h2 style={{ marginBottom: '18px', fontSize: '20px', fontWeight: 'bold' }}>
          Live Preview
        </h2>
        <div style={{
          border: '2px solid #e5e7eb',
          borderRadius: '12px',
          padding: '24px',
          textAlign: 'center'
        }}>
          {/* Avatar */}
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: '#2563eb',
            margin: '0 auto 12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold'
          }}>
            {name ? name[0].toUpperCase() : '?'}
          </div>

          <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>
            {name || 'Your Name'}
          </h3>
          <p style={{ color: '#6b7280', fontSize: '14px', margin: '4px 0' }}>
            {email || 'your@email.com'}
          </p>
          <p style={{ color: '#2563eb', fontSize: '14px' }}>
            {role || 'Your Role'}
          </p>
        </div>
      </div>

    </div>
  );
};

export default ProfileForm;