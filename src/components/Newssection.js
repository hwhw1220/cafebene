import React, {useEffect, useState, useCallback} from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import { AiOutlineLoading3Quarters } from "react-icons/ai";


const NewssectionBlock = styled.div`
    border-top:107px solid blue;
    padding:100px 0;
    .row {
       .articles { display:flex; flex-wrap:wrap }
       .category { display:flex; justify-content:center }
    }
    .load {
        display:flex; justify-content:center; align-items:center;
        min-height:70vh; 
        .loadIcon {
            font-size:100px; color:#000;
            animation:loadspin 5s linear infinite;
        }
        @keyframes loadspin {
            0% { transform:rotate(0deg) }
            100% { transform:rotate(3turn) }
        }
    }
`;

const Cate = styled.div`
    background:#ddd; border-radius:10px;
    cursor:pointer; margin:0px 20px 50px; padding:10px 20px; 
`;

const categories = [
    { name:'all', text:'전체보기' },
    { name:'business', text:'비즈니스' },
    { name:'entertainment', text:'엔터테인먼트' },
    { name:'health', text:'건강' },
    { name:'science', text:'과학' },
    { name:'sports', text:'스포츠' },
    { name:'technology', text:'기술' }
]

const Newssection = () => {

    const [articles, setArticles] = useState([])
    const [category, setCategory] = useState('all')

    const onChange = useCallback(
        (name) => {
            setCategory(name)
        }
        , [])

    const [loading, setLoading] = useState(false);

    const getNews = async () => {
        const query = category==='all' ? '' : `&category=${category}`;
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=11ba08dfbd7e4f3c83ac93b27aa1dcb7`)
        // console.log(response)
        setArticles(response.data.articles)
        setLoading(true)
    }

    useEffect( ()=>{
        getNews()
    }, [category] )

    if (!loading) {
        return (
            <NewssectionBlock>
                <div className="load">
                    <AiOutlineLoading3Quarters className="loadIcon" />
                </div>
            </NewssectionBlock>
        );
    } else {
        return (
            <NewssectionBlock>
                <div className="row">
                   <div className="category">
                       {
                           categories.map( (data, index)=> <Cate key={index} onClick={()=>onChange(data.name)} style={{ background : category===data.name && '#333', color : category===data.name && '#fff' }}>{data.text}</Cate> )
                       }
                   </div>
                   <div className="articles">
                      { articles && articles.map( (data, index) => <NewsItem key={index} article={data} /> ) }
                   </div> 
                </div>
            </NewssectionBlock>
        );
    }

};

export default Newssection;