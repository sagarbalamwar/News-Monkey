import React, { useEffect, useState } from "react"
import NewsItem from "./NewsItem"

const News = ({ category }) => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=50&apiKey=ffd357b9f894489ba142c4d5e100985e`
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles))
    
  }, [category])

  return (
    <div className="d-flex flex-wrap justify-content-around">
      {articles.map((data, index) => {
        return (
          <NewsItem
            key={index}
            title={data.title}
            description={data.description}
            url={data.url}
            urltoimg={data.urlToImage}
          />
        )
      })}
    </div>
  )
}

export default News
