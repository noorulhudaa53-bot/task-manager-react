/**
 * Reusable Modal component
 * @param {boolean} isOpen - Controls modal visibility
 * @param {function} onClose - Called when cancel/close clicked
 * @param {function} onConfirm - Called when confirm clicked
 * @param {string} title - Modal heading
 * @param {ReactNode} children - Modal body content
 */
const Modal = ({ isOpen, onClose, onConfirm, title, children }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'white',
          padding: '24px',
          borderRadius: '12px',
          maxWidth: '400px',
          width: '90%',
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
        }}
      >
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>
          {title}
        </h3>

        <div style={{ marginBottom: '20px', color: '#6b7280', fontSize: '14px' }}>
          {children}
        </div>

        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          <button
            onClick={onClose}
            style={{
                padding: '8px 16px',
                borderRadius: '6px',
                border: '1px solid #6b7280',
                background: '#6b7280',
                color: 'white',
                cursor: 'pointer'
            }}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              border: 'none',
              background: '#ef4444',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;