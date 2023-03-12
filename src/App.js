
import './App.css';
import Home from './Component/Home';
import { Route, Routes } from 'react-router-dom';

import Navbar from './Component/Navbar';
import List from './Component/List';




function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Patient_list' element={<List />} />
      </Routes>
    </>

  );
}

export default App;
