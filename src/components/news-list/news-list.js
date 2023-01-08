import React, {useEffect, useState} from 'react';

import News from "../news/News";


const NewsList = () => {

    const [news, setNews] = useState()

    useEffect(() => {
        fetch(
            'https://frontappapi.dock7.66bit.ru/api/news/get?page=1&count=10'
        )
            .then((res) => res.json())
            .then((data) => setNews(data));
    }, [])


    return (
        <div className='product'>
            {news?.map((obj) => (
                <News
                    title={obj.title}
                    content={obj.content}
                />
            ))}
        </div>
    );
}


export default NewsList;