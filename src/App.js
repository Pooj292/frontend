import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import GetList from './GetList';
import SingleGet from './SingleGet';
import Update from './Update';
import Post from './Post';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Post />} />
            <Route path="/get" element={<GetList />} />
            <Route path="/single-get/:id" element={<SingleGet />} />
            <Route path="/update/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;