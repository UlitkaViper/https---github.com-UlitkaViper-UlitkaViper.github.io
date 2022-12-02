import React, { useEffect, useRef }  from 'react';
import '../static/css/style.css';
import img1 from '../static/images/post1.png';
import img2 from '../static/images/post2.png';
import img3 from '../static/images/post3.png';
import img5 from '../static/images/post5.png';
import imgLarge from '../static/images/large1.png';

export function createPost(img, category, text, date, author) {
    return <div className="post">
        <div className="post-image">
            <img src={img} alt="" />
        </div>
        <div className="post-category">
            <p>{category}</p>
        </div>
        <div className="post-text">
            <p>{text}</p>
        </div>

        <div className="post-details">
            <div className="post-date">
                {date}
            </div>
            <div className="post-author">
                <span className='by-author'>By</span>
                {author}
            </div>
        </div>
    </div>
}


function createLargePost(img, category, text, date, author, mainText) {
    return <div className="post-row">
        <div className="post post-large">
            <div className="post-image">
                <img src={img} alt="" />
            </div>
            <div className="post-category post-large-info">
                <p>{category}</p>
            </div>
            <div className="post-text post-large-info">
                <p>{text}</p>
            </div>
            <div className="post-details post-details-large">
                <div className="post-date post-large-info">
                    {date}
                </div>
                <div className="post-author post-large-info">
                    <span className='by-author'>By</span>
                    {author}
                </div>
                <div className="post-author post-large-info">
                    6 comments
                </div>
            </div>
            <div className="post-text-large">
                {mainText}
            </div>

        </div>

    </div>
}


export const LeftPosts = () => {
    const ref = useRef(null);
    useEffect(() => {
        console.log(ref.current);
      });
    let postImges = [img1, img2, img3, img5]
    let postCategory = [
        "AI", 
        "AI", 
        "AI", 
        "AI",
        "AI"
    ]
    let postText = [
        "Ski-Ba-Bop-Ba-Dop-Bop", 
        "Lorem ipsum dolor sit amet.", 
        "Heh just bought Twitter lol", 
        "Click it, its defenetly safe, trust me",
        "Sheeeeeeeesh its a gusenica + cat. Cool"
    ]
    let postDate = [
        "June 6, 2019", 
        "March 15, 2021", 
        "October 27, 2022", 
        "October 25, 2009",
        "October 25, 2009"
    ]
    let postAuthor = [
        "Scatman John", 
        "Giorno Javana", 
        "Elon Musk", 
        "Rick Astley",
        "Rick Astley"
    ]
    let largePostText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deleniti aperiam quibusdam tempore sit dolores repellendus doloremque corrupti quis labore at natus repellat odit sunt nesciunt in, numquam inventore. Quis?"

    let postList = postImges.map(
        (img, index) => {
            if (index % 2 == 0) {
                let post1 = createPost(img, postCategory[index], postText[index], postDate[index], postAuthor[index])
                let post2 = createPost(postImges[index+1], postCategory[index+1], postText[index+1], postDate[index+1], postAuthor[index+1])
                return <div key={index} className="post-row">
                            {post1}
                            {post2}
                        </div>
            }
        }
    )
    let largePost = createLargePost(imgLarge, postCategory[4], postText[4], postDate[4], postAuthor[4], largePostText)
    let pages = 
    <div className="pages-container">
                 <div className="page inactive-page"> &lt; OLDER POST </div>
                 <div className="page"> 1 </div>
                 <div className="page"> 2 </div>
                 <div className="page"> 3 </div>
                 <div className="page"> ... </div>
                 <div className="page"> 8 </div>
                 <div className="page"> NEXT POST &gt;</div>
             </div>
    
    return ( 
        <div className="left-posts-containter" id="postContainer" ref={ref}> 
            {postList}
            {largePost}
            {pages}
        </div>
        // <div className="left-posts-containter" id="postContainer">
        //     <div className="post-row">
        //         <div className="post">
        //             <div className="post-image">
        //                 <img src={img1} alt="" />
        //             </div>
        //             <div className="post-category">
        //                 <p>AI</p>
        //             </div>
        //             <div className="post-text">
        //                 <p>Ski-Ba-Bop-Ba-Dop-Bop</p>
        //             </div>

        //             <div className="post-details">
        //                 <div className="post-date">
        //                     June 6, 2019
        //                 </div>
        //                 <div className="post-author">
        //                     <span className='by-author'>By</span>
        //                     Scatman John
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="post">
        //             <div className="post-image">
        //                 <img src={img2} alt="" />
        //             </div>
        //             <div className="post-category">
        //                 <p>AI</p>
        //             </div>
        //             <div className="post-text">
        //                 <p>Lorem ipsum dolor sit amet.</p>
        //             </div>

        //             <div className="post-details">
        //                 <div className="post-date">
        //                     March 15, 2021
        //                 </div>
        //                 <div className="post-author">
        //                     <span className='by-author'>By</span>
        //                     Giorno Javana
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
    
        //     <div className="post-row">
        //         <div className="post">
        //             <div className="post-image">
        //                 <img src={img3} alt="" />
        //             </div>
        //             <div className="post-category">
        //                 <p>AI</p>
        //             </div>
        //             <div className="post-text">
        //                 <p>Heh just bought Twitter lol</p>
        //             </div>

        //             <div className="post-details">
        //                 <div className="post-date">
        //                     October 27, 2022
        //                 </div>
        //                 <div className="post-author">
        //                     <span className='by-author'>By</span>
        //                     Elon Musk
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="post">
        //             <div className="post-image">
        //                 <img src={img5} alt="" />
        //             </div>
        //             <div className="post-category">
        //                 <p>AI</p>
        //             </div>
        //             <div className="post-text">
        //                 <p>Click it, its defenetly safe, trust me</p>
        //             </div>

        //             <div className="post-details">
        //                 <div className="post-date">
        //                     October 25, 2009
        //                 </div>
        //                 <div className="post-author">
        //                     <span className='by-author'>By</span>
        //                     Rick Astley
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

            // <div className="post-row">
            //     <div className="post post-large">
            //         <div className="post-image">
            //             <img src={imgLarge} alt="" />
            //         </div>
            //         <div className="post-category post-large-info">
            //             <p>AI</p>
            //         </div>
            //         <div className="post-text post-large-info">
            //             <p>Sheeeeeeeesh its a gusenica + cat. Nice</p>
            //         </div>
            //         <div className="post-details post-details-large">
            //             <div className="post-date post-large-info">
            //                 October 25, 2009
            //             </div>
            //             <div className="post-author post-large-info">
            //                 <span className='by-author'>By</span>
            //                 Rick Astley
            //             </div>
            //             <div className="post-author post-large-info">
            //                 6 comments
            //             </div>
            //         </div>
            //         <div className="post-text-large">
            //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deleniti aperiam quibusdam tempore sit dolores repellendus doloremque corrupti quis labore at natus repellat odit sunt nesciunt in, numquam inventore. Quis?
            //         </div>

            //     </div>

            // </div>
        //     <div className="pages-container">
        //         <div className="page inactive-page"> &lt; OLDER POST </div>
        //         <div className="page"> 1 </div>
        //         <div className="page"> 2 </div>
        //         <div className="page"> 3 </div>
        //         <div className="page"> ... </div>
        //         <div className="page"> 8 </div>
        //         <div className="page"> NEXT POST &gt;</div>
        //     </div>

        // </div>
    );
}

// export default App;
