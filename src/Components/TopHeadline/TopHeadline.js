import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const TopHeadline = () => {
    const [articles, setArticles] = useState([]);
    useEffect( () => {
        fetch("https://newsapi.org/v2/top-articles?country=us&apiKey=4b089ddcac0b445b84a3d33a967978d2")
        .then(res => res.json())
        .then(data => setArticles(data.articles))
        console.log(articles);
    }, [] )
    return (
        <div>
            <h1>Top articles Here.. {articles.length}</h1>
        </div>
    );
};

export default TopHeadline;