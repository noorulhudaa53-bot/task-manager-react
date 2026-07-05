import useToggle from '../useToggle';
import useLocalStorage from '../useLocalStorage';
import Modal from './Modal';
import Table from './Table';

const ComponentDemo = () => {
  const [isModalOpen, toggleModal] = useToggle(false);
  const [favoriteColor, setFavoriteColor] = useLocalStorage('favoriteColor', '');

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'role', label: 'Role' },
    { key: 'status', label: 'Status' },
    { key: 'city', label: 'City' }
  ];

  const data = [
    { name: 'Ali', role: 'Frontend Dev', status: 'Active', city: 'Karachi' },
    { name: 'Sara', role: 'Backend Dev', status: 'Active', city: 'Islamabad' },
    { name: 'Noor', role: 'Designer', status: 'Away', city: 'Faisalabad' },
    { name: 'Umar', role: 'Backend Dev', status: 'Active', city: 'Faisalabad' }
  ];

  const handleConfirm = () => {
    alert('Confirmed! Item deleted.');
    toggleModal();
  };

  return (
    <div style={{ padding: '20px 0' }}>

      {/* Change 1 — heading updated */}
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>
        Reusable Components
      </h2>

      {/* useLocalStorage Demo */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>
          useLocalStorage Demo
        </h3>
        <input
          type="text"
          value={favoriteColor}
          onChange={(e) => setFavoriteColor(e.target.value)}
          placeholder="Type your favorite color..."
          style={{ padding: '8px', borderRadius: '6px', border: '1px solid #ccc', width: '250px' }}
        />
        <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>
          Saved: {favoriteColor || 'nothing yet'} — Refresh page, it stays saved!
        </p>
      </div>

      {/* Modal + useToggle Demo */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>
          Modal + useToggle Demo
        </h3>

        {/* Change 2 — explanation added */}
        <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '8px' }}>
          Click below to delete a demo item -- a confirmation popup will appear.
        </p>

        <button
          onClick={toggleModal}
          style={{ padding: '8px 16px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          Delete Item
        </button>

        <Modal
          isOpen={isModalOpen}
          onClose={toggleModal}
          onConfirm={handleConfirm}
          title="Are you sure?"
        >
          This action cannot be undone. The item will be permanently deleted.
        </Modal>
      </div>

      {/* Table Demo */}
      <div>
        <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>
          Table Component Demo
        </h3>
        <Table columns={columns} data={data} />
      </div>

    </div>
  );
};

export default ComponentDemo;