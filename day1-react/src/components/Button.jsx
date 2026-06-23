const Button = ({ label, onClick, variant = 'primary' }) => {
  const styles = {
    primary: { background: '#2563eb', color: 'white' },
    secondary: { background: '#e5e7eb', color: '#1f2937' },
    danger: { background: '#ef4444', color: 'white' },
  };

  return (
    <button
      onClick={onClick}
      style={{
        ...styles[variant],
        padding: '8px 16px',
        borderRadius: '6px',
        border: 'none',
        fontWeight: '500',
        cursor: 'pointer',
        margin: '4px'
      }}
    >
      {label}
    </button>
  );
};

export default Button;