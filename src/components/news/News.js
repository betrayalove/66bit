import React, {useState} from "react";
import './style.css'

function News(props) {
    return (
        <body>

        <div className='block-news backer'>
            <h2 className='news'>{props.title.toUpperCase()}</h2>
            <p>{props.content}</p>
        </div>
        </body>
    )
}


export default News;