

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { NewsBoard } from './Components/NewsBoard';
import { NewsPage } from './Components/NewsPage';

function App() {
  const [loading, setLoading] = useState(false); // Loading state
 
  const handleCategoryChange = (newCategory) => {
    setLoading(true); // Start loading
    setTimeout(() => setLoading(false), 1500); // Stop loading after 1.5 seconds
  };

  return (
    <Router>
      <div className='app'>
        <NavBar setCategory={handleCategoryChange} />
        {loading ? (
          <div className="text-center my-5">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only"></span>
            </div>
            <p>Loading news...</p>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<NewsBoard category="general" page="1" />} /> {/* Default route */}
            <Route path="/category/:category/:page" element={<NewsBoard />} /> {/* Category and page route */}
            <Route path="/news/:id" element={<NewsPage />} /> {/* News article route */}
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;


