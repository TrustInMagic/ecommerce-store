import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/landing-page/Landing';
import Store from './components/store-page/Store';
import styles from './styles/App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
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
