const ThemeToggle = ({ isDark, setIsDark }) => {
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      style={{
        padding: '8px 16px',
        borderRadius: '20px',
        border: 'none',
        cursor: 'pointer',
        background: isDark ? '#f9fafb' : '#1f2937',
        color: isDark ? '#1f2937' : '#f9fafb',
        fontWeight: 'bold',
        fontSize: '14px'
      }}
    >
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeToggle;