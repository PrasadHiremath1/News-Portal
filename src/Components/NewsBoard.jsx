
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { NewsItem } from './NewsItem';

export const NewsBoard = () => {
    const { category = 'general', page = '1' } = useParams(); 
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); 
    const [totalResults, setTotalResults] = useState(0);
    const pageSize = 21; 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            try {
                let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=a514a720e0bf4a48ba83be322e71d59a`;

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                if (data.status === "ok") {
                    setArticles(data.articles);
                    setTotalResults(data.totalResults);
                } else {
                    throw new Error('Failed to fetch news data');
                }
            } catch (err) {
                setError('Failed to load news.');
            } finally {
                setLoading(false); 
                
            }
        };

        fetchNews();
    }, [category, page]); 


    const handlePrevious = () => {
        const prevPage = Math.max(parseInt(page) - 1, 1);
        navigate(`/category/${category}/${prevPage}`); 
    };


    const handleNext = () => {
        const maxPage = Math.ceil(totalResults / pageSize); 
        const nextPage = Math.min(parseInt(page) + 1, maxPage);
        navigate(`/category/${category}/${nextPage}`);
    };

    return (
        <div className="container">
            <h2 className="text-center my-4">Latest News in {category}</h2>
            {loading ? (
                <div className="text-center">Loading...</div>
            ) : error ? (
                <div className="alert alert-danger text-center">{error}</div>
            ) : (
                <div>
                    <div className="row">
                        {articles.map((news, index) => (
                            <div key={index} className="col-md-4">
                                <NewsItem
                                    id={index} 
                                    title={news.title}
                                    description={news.description}
                                    content={news.content}
                                    src={news.urlToImage}
                                    url={news.url}
                                    article={news} 
                                />
                            </div>
                        ))}
                    </div>

                    {/* Pagination Controls */}
                    <div className="d-flex justify-content-between my-4">
                        <button
                            className="btn btn-primary"
                            disabled={parseInt(page) <= 1}
                            onClick={handlePrevious}
                        >
                            Previous
                        </button>
                        <span>Page {page} of {Math.ceil(totalResults / pageSize)}</span>
                        <button
                            className="btn btn-primary"
                            disabled={parseInt(page) >= Math.ceil(totalResults / pageSize)}
                            onClick={handleNext}
                        >
                            Next
                        </button>
                    </div>
                    
                    {/* Additional padding after pagination buttons */}
                    <div style={{ padding: '20px 0' }}></div>
                </div>
            )}
        </div>
    );
};


