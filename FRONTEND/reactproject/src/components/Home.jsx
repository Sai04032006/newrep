const Home = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      width: '100vw',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0',
      margin: '0',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
    },
    content: {
      maxWidth: '1200px',
      width: '100%',
      textAlign: 'center',
      color: 'white',
      padding: '2rem',
      paddingTop: '140px', // Increased from 120px to give more space
    },
    hero: {
      marginBottom: '4rem',
    },
    title: {
      fontSize: '4rem',
      marginBottom: '1.5rem',
      fontWeight: '700',
      textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
      lineHeight: '1.2',
    },
    subtitle: {
      fontSize: '1.8rem',
      marginBottom: '1rem',
      opacity: 0.95,
      fontWeight: '300',
    },
    description: {
      fontSize: '1.2rem',
      opacity: 0.85,
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: '1.8',
    },
    features: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem',
      marginTop: '4rem',
    },
    featureCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(20px)',
      padding: '3rem 2rem',
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    },
    featureTitle: {
      fontSize: '1.8rem',
      marginBottom: '1rem',
      fontWeight: '600',
      color: '#fff',
    },
    featureDescription: {
      fontSize: '1.1rem',
      opacity: 0.9,
      lineHeight: '1.6',
      color: '#fff',
    },
    statsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '4rem',
      marginTop: '5rem',
      flexWrap: 'wrap',
      paddingBottom: '3rem', // Added padding at bottom
    },
    statBox: {
      textAlign: 'center',
    },
    statNumber: {
      fontSize: '3rem',
      fontWeight: '700',
      marginBottom: '0.5rem',
      background: 'linear-gradient(45deg, #fff, #e0e0e0)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    statLabel: {
      fontSize: '1.2rem',
      opacity: 0.9,
      fontWeight: '300',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.hero}>
          <h1 style={styles.title}>User Management System</h1>
          <p style={styles.subtitle}>Streamline Your User Operations</p>
          <p style={styles.description}>
            A powerful and intuitive platform designed to help you manage users efficiently. 
            Create, view, update, and delete user accounts with ease and confidence.
          </p>
        </div>

        <div style={styles.features}>
          <div 
            style={styles.featureCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
            }}
          >
            <h3 style={styles.featureTitle}>Add Users</h3>
            <p style={styles.featureDescription}>
              Quickly create new user accounts with essential information in just a few clicks
            </p>
          </div>

          <div 
            style={styles.featureCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
            }}
          >
            <h3 style={styles.featureTitle}>View All</h3>
            <p style={styles.featureDescription}>
              Browse through all registered users in a clean, organized table format
            </p>
          </div>

          <div 
            style={styles.featureCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
            }}
          >
            <h3 style={styles.featureTitle}>Update Users</h3>
            <p style={styles.featureDescription}>
              Edit and modify user information seamlessly with our intuitive interface
            </p>
          </div>

          <div 
            style={styles.featureCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
            }}
          >
            <h3 style={styles.featureTitle}>Delete Users</h3>
            <p style={styles.featureDescription}>
              Remove user accounts safely with confirmation prompts and secure operations
            </p>
          </div>
        </div>

        <div style={styles.statsContainer}>
          <div style={styles.statBox}>
            <div style={styles.statNumber}>Fast</div>
            <div style={styles.statLabel}>Lightning Speed</div>
          </div>
          <div style={styles.statBox}>
            <div style={styles.statNumber}>Secure</div>
            <div style={styles.statLabel}>Protected Data</div>
          </div>
          <div style={styles.statBox}>
            <div style={styles.statNumber}>Simple</div>
            <div style={styles.statLabel}>Easy to Use</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;