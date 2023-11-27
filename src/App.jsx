import React from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from './components/Layout';
import ArticlePage from './pages/ArticlePage';
import HomePage from './pages/HomePage';

function App() {
  
  return (
    <main id="main">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/:newsId' element={<ArticlePage />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
