




import './NavCss.css';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const NavBar = ({ setCategory }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setCategory(category);
    navigate(`/category/${category}/1`);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 30) { 
        navbar.classList.add('shrink');
      } else {
        navbar.classList.remove('shrink');
      }
    };

    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Link to={'/'}>
            <span className="badge bg-light text-dark fs-4">NewsApp</span>
          </Link>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="nav-link" onClick={() => handleCategoryClick('technology')}>Technology</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => handleCategoryClick('business')}>Business</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => handleCategoryClick('health')}>Health</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => handleCategoryClick('science')}>Science</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => handleCategoryClick('sports')}>Sports</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => handleCategoryClick('entertainment')}>Entertainment</div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


