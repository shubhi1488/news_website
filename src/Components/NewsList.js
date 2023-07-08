import React, {useState,useEffect} from "react";
import axios from 'axios'
import NewsItem from "./NewsItem";
const NewsList=()=>{
    const [articles,setArticles]=useState([])
    useEffect(()=>{
            const getArticles= async()=>{
                // const response= await axios.get('https://newsapi.org/v2/everything?q=apple&from=2023-05-30&sortBy=publishedAt&apiKey=e3036d8687da424980cbe208b8da2b3a')
                const response=await axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=21eee6d3dffa4bffb3007547318290d7')
                console.log(response)
                setArticles(response.data.articles)
            }
            getArticles()
            
    },[])
    return(
        <div>
            {articles.map(articles=>{
                return(
                    <NewsItem
                    title={articles.title}
                    description={articles.description}
                    url={articles.url}
                    urlToImage={articles.urlToImage}
                    
                    />

                )
            })}


        </div>
    )
}
export default NewsList;