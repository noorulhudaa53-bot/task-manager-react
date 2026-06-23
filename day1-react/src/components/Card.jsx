const Card = ({ title, description }) => {
  return (
    <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '16px', margin: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h3 style={{ fontWeight: 'bold', fontSize: '18px' }}>{title}</h3>
      <p style={{ color: '#6b7280', fontSize: '14px', marginTop: '4px' }}>{description}</p>
    </div>
  );
};

export default Card;