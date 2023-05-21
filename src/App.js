import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Shop from './components/Store';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/store' element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
