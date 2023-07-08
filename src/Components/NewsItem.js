import React from 'react'
import '../Components/newsitem.css'
const NewsItem = ({title,description,url,urlToImage}) => {
  return (
    <div className='newsapp'>
        <div className='news-item'>
            <img className='news-img' src={urlToImage} alt={urlToImage}/>
            <h3><a href={url}>{title}</a></h3>
            <p>{description}</p>
        </div>
      
    </div>
  )
}

export default NewsItem
