import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Input from './Input';
import Fetch from './Fetch';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Input />} />
          <Route path="/fetch" element={<Fetch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
