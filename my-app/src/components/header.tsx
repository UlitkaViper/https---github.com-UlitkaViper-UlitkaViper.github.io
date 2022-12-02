import React, { useEffect, useRef, useState } from 'react';
import '../static/css/style.css';
import {LeftPosts, createPost} from './leftPosts'
import headerImage from '../static/images/image.jpg';


const Modal = ({ setIsOpen }) => {
    let random_n = Math.floor(Math.random() * 20 + 1)
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', `https://jsonplaceholder.typicode.com/posts/${random_n}`);
    // Подписываемся на изменение состояния запроса
    let post
    xhr.onreadystatechange = function() { 
        // Проверка, завершилось ли выполнение запроса?
        if (xhr.readyState !== 4) return; 

        if (xhr.status === 200) {
            post = createPost(xhr.response.title, xhr.response.title, xhr.response.title, xhr.response.title, xhr.response.title)
            post=
                <>
                    <div>
                    <div className="modal-back show-modal" id="modalBack"></div>
                    <div className="modal-container show-modal">
                        <div className="modal-block show-modal" id="modal">
                            {post}
                        </div>
                    </div>
                    
                </div>
                </>
        } else {
            // Обработка ошибки
            console.log('HTTP error', xhr.status, xhr.statusText);
        }
    };
    xhr.send();
    return (
        <>
            <div>
            {/* <button onClick={() => setIsOpen(false)}>Modalka</button> */}
            <div className="modal-back show-modal" id="modalBack"></div>
            <div className="modal-container show-modal">
                <div className="modal-block show-modal" id="modal">
                    {post}
                </div>
            </div>
            
        </div>
        </>
    )
}


export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <div className="App">
        <div className="header">
            <div className="header-title">STABLE</div>
            <div className="header-right">
                {/* <div>
                    <button className="get-posts-button" id="modalBtn" onClick={() => setIsOpen(true)}>Modalka</button>
                    {isOpen && <Modal setIsOpen={setIsOpen} />}
                </div> */}
                <div>
                    <button className="get-posts-button" id="modalBtn">Modalka</button>
                </div>
                <div>
                    <button className="get-posts-button" id="modalBtn">Get posts</button>
                </div>
                {/* <div >
                <button className="get-posts-button" onClick={() => setIsOpen(true)}></button>
                </div> */}
                <div className="header-selected">Home</div>
                <div className="header-selected">Recipes</div>
                <div className="header-selected">Article</div>
                <div className="header-selected">Contact</div>
                <div className="header-selected">Purchase</div>
            </div>
        </div>

        <div className="img-container">
            <img src={headerImage} alt="" />
            <div className="img-text-top">
                VEHICLE
            </div>
            <div className="img-text">
                <p>One of Saturn’s largest rings may be newer than anyone</p>
            </div>
            <div className="img-text-bottom">
                <pre>June 6, 2019   By Rickie Baroch   4 Comments</pre> 
            </div>
        </div>
    </div>
  );
}

// export default App;
