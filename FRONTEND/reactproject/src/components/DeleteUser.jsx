import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../config';

const DeleteUser = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const styles = {
    container: {
      minHeight: 'calc(100vh - 80px)',
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
    },
    card: {
      backgroundColor: 'white',
      padding: '3rem',
      borderRadius: '20px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
      maxWidth: '600px',
      width: '100%',
    },
    title: {
      fontSize: '2rem',
      marginBottom: '2rem',
      color: '#333',
      textAlign: 'center',
    },
    formGroup: {
      marginBottom: '1.5rem',
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      fontWeight: '600',
      color: '#555',
      fontSize: '1rem',
    },
    select: {
      width: '100%',
      padding: '12px',
      border: '2px solid #e0e0e0',
      borderRadius: '8px',
      fontSize: '1rem',
      transition: 'border-color 0.3s',
      boxSizing: 'border-box',
      backgroundColor: 'white',
    },
    userDetails: {
      backgroundColor: '#f9f9f9',
      padding: '2rem',
      borderRadius: '12px',
      marginTop: '2rem',
    },
    detailsTitle: {
      fontSize: '1.5rem',
      marginBottom: '1rem',
      color: '#333',
    },
    detailText: {
      fontSize: '1.1rem',
      marginBottom: '0.8rem',
      color: '#555',
    },
    button: {
      width: '100%',
      padding: '14px',
      backgroundColor: '#f5576c',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      marginTop: '1.5rem',
    },
    errorMessage: {
      backgroundColor: '#fee',
      color: '#c33',
      padding: '12px',
      borderRadius: '8px',
      marginBottom: '1rem',
      border: '1px solid #fcc',
    },
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/getAll`);
      if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleUserSelect = (e) => {
    const userId = e.target.value;
    setSelectedUserId(userId);

    if (!userId) {
      setSelectedUser(null);
      return;
    }

    const user = users.find(u => u.id === parseInt(userId));
    setSelectedUser(user);
  };

  const handleDelete = async () => {
    if (!selectedUserId) {
      alert('Please select a user to delete');
      return;
    }

    if (!window.confirm(`Are you sure you want to delete user: ${selectedUser.name}?`)) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/delete/${selectedUserId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete user');
      
      alert('User deleted successfully!');
      await fetchUsers();
      setSelectedUserId('');
      setSelectedUser(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Delete User</h2>
        {error && <div style={styles.errorMessage}>Error: {error}</div>}
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Select User to Delete:</label>
          <select 
            style={styles.select} 
            value={selectedUserId} 
            onChange={handleUserSelect}
            onFocus={(e) => e.target.style.borderColor = '#f5576c'}
            onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
          >
            <option value="">-- Select a user --</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name} ({user.email})
              </option>
            ))}
          </select>
        </div>

        {selectedUser && (
          <div style={styles.userDetails}>
            <h3 style={styles.detailsTitle}>User Details:</h3>
            <p style={styles.detailText}><strong>ID:</strong> {selectedUser.id}</p>
            <p style={styles.detailText}><strong>Name:</strong> {selectedUser.name}</p>
            <p style={styles.detailText}><strong>Email:</strong> {selectedUser.email}</p>
            <p style={styles.detailText}><strong>Age:</strong> {selectedUser.age}</p>

            <button 
              style={styles.button}
              onClick={handleDelete}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#d94555'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#f5576c'}
              disabled={loading}
            >
              {loading ? 'Deleting...' : 'Delete User'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteUser;