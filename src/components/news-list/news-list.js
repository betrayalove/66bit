import React, {useEffect, useState} from 'react';

import News from "../news/News";
import axios from "axios";


const NewsList = () => {
    const [news, setNews] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)
    // const [totalCount, setTotalCount] = useState(0)
    useEffect(() => {
        if (fetching) {
            console.log("Fetching")
            axios.get(`https://frontappapi.dock7.66bit.ru/api/news/get?page=${currentPage}&count=10`)
                .then(response => {
                    // setNews(response.data)
                    setNews([...news, ...response.data])
                    setCurrentPage(prevState => prevState + 1)
                    // setTotalCount(response.headers['x-total-count'])
                })
                .finally(() => setFetching(false));

        }

    }, [fetching])
    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])
    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true)
        }
    }

    return (
        <div className='product' key={news.id}>
            {news?.map((obj) => (
                <News key={news.id}
                      title={obj.title}
                      content={obj.content}
                />
            ))}
        </div>
    );
}


export default NewsList;