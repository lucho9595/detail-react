import React from 'react';
import { Route, Routes } from 'react-router';
import { Home } from './components/Home';
import { Details } from './components/Details';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
