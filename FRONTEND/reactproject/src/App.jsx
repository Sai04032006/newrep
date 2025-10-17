import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddUser from './components/AddUser';
import ViewAllUsers from './components/ViewAllUsers';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/view" element={<ViewAllUsers />} />
          <Route path="/update" element={<UpdateUser />} />
          <Route path="/delete" element={<DeleteUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;