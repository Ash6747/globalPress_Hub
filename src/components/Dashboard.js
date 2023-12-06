import React, { useEffect, useState } from 'react'
import { NewsBlock } from './NewsBlock';

export const Dashboard = ({category, country}) => {
    const [article, setArticle] = useState([]);

    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=64ca58d2977c4b1ea84bd203d8185d06`;
        fetch(url).then(res=>res.json()).then(data=>setArticle(data.articles));
    },[category, country])
  return (
    <div>
        <h2 className='text-center'>Latest <span className='badge bg-danger'>News {country==="in"?"India":country==="us"?"Us":"Canda"}</span></h2>
        {article?.map((news, i)=>{
            return <NewsBlock 
            key={i} 
            title={news.title} 
            description={news.description}
            src={news.urlToImage}
            url={news.url}
            />
        })}
    </div>
  )
}