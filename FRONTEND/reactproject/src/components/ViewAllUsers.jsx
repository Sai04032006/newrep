import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../config';

const ViewAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const styles = {
    container: {
      minHeight: 'calc(100vh - 80px)',
      background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      padding: '3rem 2rem',
    },
    card: {
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '20px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    title: {
      fontSize: '2.5rem',
      marginBottom: '2rem',
      color: '#333',
      textAlign: 'center',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '1rem',
    },
    thead: {
      backgroundColor: '#4facfe',
      color: 'white',
    },
    th: {
      padding: '15px',
      textAlign: 'left',
      fontWeight: '600',
      fontSize: '1.1rem',
    },
    td: {
      padding: '15px',
      borderBottom: '1px solid #e0e0e0',
    },
    tr: {
      transition: 'background-color 0.3s',
    },
    loading: {
      textAlign: 'center',
      padding: '3rem',
      fontSize: '1.5rem',
      color: '#666',
    },
    noData: {
      textAlign: 'center',
      padding: '3rem',
      color: '#999',
      fontStyle: 'italic',
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
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/getAll`);
      if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>All Users</h2>
        {error && <div style={styles.errorMessage}>Error: {error}</div>}
        
        {loading ? (
          <div style={styles.loading}>Loading...</div>
        ) : (
          <table style={styles.table}>
            <thead style={styles.thead}>
              <tr>
                <th style={styles.th}>ID</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Age</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan="4" style={styles.noData}>No users found</td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr 
                    key={user.id} 
                    style={styles.tr}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <td style={styles.td}>{user.id}</td>
                    <td style={styles.td}>{user.name}</td>
                    <td style={styles.td}>{user.email}</td>
                    <td style={styles.td}>{user.age}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ViewAllUsers;