import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const styles = {
    navbar: {
      backgroundColor: '#2c3e50',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    },
    brand: {
      color: 'white',
      margin: 0,
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    links: {
      display: 'flex',
      gap: '2rem',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '1rem',
      padding: '0.5rem 1rem',
      borderRadius: '5px',
      transition: 'all 0.3s ease',
    },
    activeLink: {
      backgroundColor: '#3498db',
      color: 'white',
    },
  };

  const getLinkStyle = (path) => ({
    ...styles.link,
    ...(location.pathname === path ? styles.activeLink : {}),
  });

  return (
    <nav style={styles.navbar}>
      <div>
        <h2 style={styles.brand}>User Management System</h2>
      </div>
      <div style={styles.links}>
        <Link to="/" style={getLinkStyle('/')}>
          Home
        </Link>
        <Link to="/add" style={getLinkStyle('/add')}>
          Add User
        </Link>
        <Link to="/view" style={getLinkStyle('/view')}>
          View All
        </Link>
        <Link to="/update" style={getLinkStyle('/update')}>
          Update User
        </Link>
        <Link to="/delete" style={getLinkStyle('/delete')}>
          Delete User
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;