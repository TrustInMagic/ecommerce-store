import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Shop from './components/Store';
import styles from './styles/App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/store' element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
