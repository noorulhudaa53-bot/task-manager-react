import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { label: 'Projects', value: '12', color: '#2563eb' },
    { label: 'Clients', value: '8', color: '#10b981' },
    { label: 'Revenue', value: '$4,500', color: '#f59e0b' },
    { label: 'Tasks', value: '24', color: '#ef4444' },
  ];

  return (
    <div style={{ padding: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>
          Dashboard
        </h1>
        <button
          onClick={() => navigate(-1)}
          style={{ padding: '8px 16px', background: '#6b7280', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          Go Back
        </button>
      </div>

      {/* Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
        {stats.map((stat) => (
          <div
            key={stat.label}
            style={{ background: stat.color, color: 'white', padding: '24px', borderRadius: '12px', textAlign: 'center' }}
          >
            <p style={{ fontSize: '32px', fontWeight: 'bold' }}>{stat.value}</p>
            <p style={{ fontSize: '14px', opacity: 0.9 }}>{stat.label}</p>
          </div>
        ))}
      </div>

      <p style={{ color: '#6b7280' }}>
        This is a protected page — only logged in users can see this!
      </p>
    </div>
  );
};

export default Dashboard;