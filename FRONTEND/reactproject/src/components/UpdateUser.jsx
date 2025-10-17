import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../config';

const UpdateUser = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const styles = {
    container: {
      minHeight: 'calc(100vh - 80px)',
      background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
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
    input: {
      width: '100%',
      padding: '12px',
      border: '2px solid #e0e0e0',
      borderRadius: '8px',
      fontSize: '1rem',
      transition: 'border-color 0.3s',
      boxSizing: 'border-box',
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
    button: {
      width: '100%',
      padding: '14px',
      backgroundColor: '#fa709a',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      marginTop: '1rem',
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

  const handleUserSelect = async (e) => {
    const userId = e.target.value;
    setSelectedUserId(userId);

    if (!userId) {
      setFormData({ name: '', email: '', age: '' });
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/get/${userId}`);
      if (!response.ok) throw new Error('Failed to fetch user');
      const user = await response.json();
      setFormData({
        name: user.name,
        email: user.email,
        age: user.age
      });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedUserId) {
      alert('Please select a user to update');
      return;
    }

    if (!formData.name || !formData.email || !formData.age) {
      alert('Please fill all fields');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/update/${selectedUserId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          age: parseInt(formData.age)
        }),
      });

      if (!response.ok) throw new Error('Failed to update user');
      
      alert('User updated successfully!');
      await fetchUsers();
      setSelectedUserId('');
      setFormData({ name: '', email: '', age: '' });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Update User</h2>
        {error && <div style={styles.errorMessage}>Error: {error}</div>}
        
        <div style={styles.formGroup}>
          <label style={styles.label}>Select User:</label>
          <select 
            style={styles.select} 
            value={selectedUserId} 
            onChange={handleUserSelect}
            onFocus={(e) => e.target.style.borderColor = '#fa709a'}
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

        {selectedUserId && (
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Name:</label>
              <input
                style={styles.input}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter user name"
                onFocus={(e) => e.target.style.borderColor = '#fa709a'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Email:</label>
              <input
                style={styles.input}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email address"
                onFocus={(e) => e.target.style.borderColor = '#fa709a'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Age:</label>
              <input
                style={styles.input}
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="Enter age"
                onFocus={(e) => e.target.style.borderColor = '#fa709a'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                required
              />
            </div>

            <button 
              type="submit" 
              style={styles.button}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#e85f89'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#fa709a'}
              disabled={loading}
            >
              {loading ? 'Updating...' : 'Update User'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default UpdateUser;