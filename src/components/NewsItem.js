import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
    display:flex; margin-bottom:20px; 
    width:50%; 
    .thumbnail { width:30%;
        padding-right:20px;
        img { width:100% }
    }
    .contents { width:70%; }
`;

const NewsItem = ({article}) => {
    const {title, description, urlToImage } = article;
    return (
        <NewsItemBlock>
            <div className="thumbnail">
                <img src={urlToImage} alt={title} />
            </div>
            <div className="contents">
                <h2>{title}</h2>
                <p>{ description && description.slice(0, 80) }...</p>
            </div>
        </NewsItemBlock>
    );
};

export default NewsItem;