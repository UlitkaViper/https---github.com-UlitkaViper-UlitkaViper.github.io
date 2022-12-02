import React from 'react';
import authorImg from '../static/images/author.png';
import rightImg1 from '../static/images/right1.png';
import rightImg2 from '../static/images/right2.jpeg';
import rightImg3 from '../static/images/right3.png';
import fbLogo from '../static/images/fb-logo.png';
import pinLogo from '../static/images/pinterest-logo.png';
import googleLogo from '../static/images/google-logo.png';
import instLogo from '../static/images/instagram-logo.png';
import twitterLogo from '../static/images/twitter-logo.png';
import viemoLogo from '../static/images/vimeo-logo.png';
import ytLogo from '../static/images/youtube-logo.png';
import shapeLogo from '../static/images/shape-logo.png';
import beLogo from '../static/images/be-logo.png';


export function RightPosts() {
  return (
      <div className="right-posts-containter">
            <div className="about-author-header">
                About the author
            </div>
            <div className="about-author-container">
                <div className="about-author-img">
                    <img src={authorImg} alt="" />
                </div>
                <div className="about-author-name">
                    Billy Herrington
                </div>
                <div className="about-author-category">
                    Boss of the gym
                </div>
                <div className="about-author-text">
                    Opisanie ne pridumal, izvinite :( vtoraya strochka
                </div>
                <hr className='by-author'/>
                <div className="about-author-continue">
                    CONTINUE READING
                </div>
            </div>

            <div className="featured-posts">
                Featured posts
            </div>

            <div className="post right-post">
                <div className="post-image">
                    <img src={rightImg1} alt="" />
                </div>
                <div className="post-category">
                    <p>AI</p>
                </div>
                <div className="post-text">
                    <p>Generated image 1</p>
                </div>

                <div className="post-details">
                    <div className="post-date">
                        November 15, 2022
                    </div>
                    <div className="post-author">
                        <span className='by-author'>By</span>
                        Diffusion
                    </div>
                </div>
            </div>

            <div className="post right-post">
                <div className="post-image">
                    <img src={rightImg2} alt="" />
                </div>
                <div className="post-category">
                    <p>AI</p>
                </div>
                <div className="post-text">
                    <p>Generated image 2</p>
                </div>

                <div className="post-details">
                    <div className="post-date">
                        November 15, 2022
                    </div>
                    <div className="post-author">
                        <span className='by-author'>By</span>
                        Diffusion
                    </div>
                </div>
            </div>

            <div className="post right-post">
                <div className="post-image">
                    <img src={rightImg3} alt="" />
                </div>
                <div className="post-category">
                    <p>AI</p>
                </div>
                <div className="post-text">
                    <p>Generated image 3</p>
                </div>

                <div className="post-details">
                    <div className="post-date">
                        November 15, 2022
                    </div>
                    <div className="post-author">
                        <span className='by-author'>By</span>
                        Diffusion
                    </div>
                </div>
            </div>

            <div className="featured-posts">
                Categories
            </div>
            <div className="catogory-list">
                <div className="category">
                    Ai
                </div>
                <div className="category-count">
                    (420)
                </div>
            </div>
            <div className="catogory-list">
                <div className="category">
                    NSFW
                </div>
                <div className="category-count">
                    (69)
                </div>
            </div>
            <div className="catogory-list last-category">
                <div className="category">
                    Nature
                </div>
                <div className="category-count">
                    (322)
                </div>
            </div>

            <div className="featured-posts">
                Social media
            </div>
            <div className="social-media-grid">
                <div className="social-media-element el-1">
                    <img src={fbLogo} alt="" />
                    <div className="social-media-followers">
                        32k likes
                    </div>
                </div>
                <div className="social-media-element el-2">
                    <img src={pinLogo} alt="" />
                    <div className="social-media-followers">
                        814 follower
                    </div>
                </div>
                <div className="social-media-element el-3">
                    <img src={viemoLogo} alt="" />
                    <div className="social-media-followers">
                        165 followers
                    </div>
                </div>
                <div className="social-media-element el-4">
                    <img src={shapeLogo} alt="" />
                    <div className="social-media-followers">
                        6k followers
                    </div>
                </div>
                <div className="social-media-element el-5">
                    <img src={twitterLogo} alt=""/>
                    <div className="social-media-followers">
                        130k followers
                    </div>
                </div>
                <div className="social-media-element el-6">
                    <img src={beLogo} alt="" />
                    <div className="social-media-followers">
                        37k followers
                    </div>
                </div>
                <div className="social-media-element el-7">
                    <img src={instLogo} alt="" />
                    <div className="social-media-followers">
                        854k followers
                    </div>
                </div>
                <div className="social-media-element el-8">
                    <img src={ytLogo} alt="" />
                    <div className="social-media-followers">
                        52k subscribers
                    </div>
                </div>
                <div className="social-media-element el-9">
                    <img src={googleLogo} alt=""/>
                    <div className="social-media-followers">
                        642 followers
                    </div>
                </div>
            </div>

            <div className="featured-posts">
                Tags
            </div>

            <div className="social-media-grid tags-grid">
                <div className="social-media-element el-1 tags-element">
                    <div className="social-media-followers">
                        Business
                    </div>
                </div>
                <div className="social-media-element el-2 tags-element">
                    <div className="social-media-followers">
                        Freelance
                    </div>
                </div>
                <div className="social-media-element el-3 tags-element" >
                    <div className="social-media-followers">
                        Money
                    </div>
                </div>
                <div className="social-media-element el-4 tags-element">
                    <div className="social-media-followers">
                        Experience
                    </div>
                </div>
                <div className="social-media-element el-5 tags-element">
                    <div className="social-media-followers">
                        Lifestyle
                    </div>
                </div>
                <div className="social-media-element el-6 tags-element">
                    <div className="social-media-followers">
                        SEO
                    </div>
                </div>
                <div className="social-media-element el-7 tags-element">
                    <div className="social-media-followers">
                        Wordpress
                    </div>
                </div>
                <div className="social-media-element el-8 tags-element">
                    <div className="social-media-followers">
                        Marketing
                    </div>
                </div>
                <div className="social-media-element el-9 tags-element">
                    <div className="social-media-followers">
                        UX
                    </div>
                </div>

            </div>

        </div>
  );
}

// export default App;
