
import './NewsItem.css';
import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/defaultImg.jpg'; 

export const NewsItem = ({ id, title, description, content, src, url }) => {
    const truncatedTitle = title ? title.slice(0, 50) : "Untitled";
    const truncatedDescription = description ? description.slice(0, 90) : "No description available";

    return (
        <div className="card news-card mb-3">
            <img src={src ? src : image} className="card-img-top news-img" alt={truncatedTitle || 'News Image'} />
            <div className="card-body">
                <h5 className="card-title">{truncatedTitle}</h5>
                <p className="card-text">{truncatedDescription}</p>
                <Link 
                    to={`/news/${id}`} 
                    className="btn btn-primary"
                    state={{ title, description, content, src, url }} 
                >
                    Read More
                </Link>
            </div>
        </div>
    );
};
