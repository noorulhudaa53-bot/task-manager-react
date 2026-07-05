/**
 * Reusable Table component
 * @param {Array} columns - Array of { key, label } objects
 * @param {Array} data - Array of row objects
 */
const Table = ({ columns, data }) => {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#2563eb', borderBottom: '2px solid #1d4ed8' }}>
            {columns.map((col) => (
              <th
                key={col.key}
                style={{ padding: '12px 24px', textAlign: 'center', fontSize: '14px', fontWeight: 'bold', color: 'white' }}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #e5e7eb' }}>
              {columns.map((col) => (
                <td key={col.key} style={{ padding: '12px', fontSize: '14px' }}>
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;