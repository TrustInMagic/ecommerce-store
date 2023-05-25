import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing'
import Store from './components/Store/Store';
import './index.css'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/store' element={<Store />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
