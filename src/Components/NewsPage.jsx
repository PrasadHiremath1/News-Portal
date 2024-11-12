
import React from 'react';
import { useLocation } from 'react-router-dom';
import './NewsPage.css'; 
import image from '../assets/defaultImg.jpg'; 

export const NewsPage = () => {
  const location = useLocation();
  const article = location.state;

  const { title, description, content, url, src } = article || {};

  return (
    <div className="news-container">
      <h1 className="news-title">{title || "No Title"}</h1>
      <div className="news-image-wrapper">
        <img
          src={src || image}
          className="news-image"
          alt={title || "News Image"}
        />
      </div>

      <div className="news-content">
        {/* Display content if available, otherwise fallback to description */}
        <p className="news-text">{content || description || "No description available."}</p>
      </div>

      <div className="news-footer">
        <a href={url} className="news-link" target="_blank" rel="noopener noreferrer">
          Read Original Article
        </a>
      </div>
    </div>
  );
};

