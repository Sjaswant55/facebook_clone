import React, { useState } from 'react';
import "./post.css";
import { Comment, Favorite, Share, ThumbDown, ThumbUp } from "@mui/icons-material"


const Post = ({post}) => {
     
    const [like,setlike] = useState(post.like);
    const [isLiked,isSetLiked] = useState(false);

    const likeHandler = () => {
        setlike(isLiked ? like-1 :like+1)
        isSetLiked(!isLiked)
    }

    console.log(like);
    return (
        <div className="posts">
            <div className='post'>
                <div className="postWrapper">
                    <div className="postTop">
                        <img src={post.logo} alt="postUserImg" className="postUserImg" />
                        <div className="postUserName">{post.userName}</div>
                        <div className="postTime">{post.date}</div>
                    </div>

                    <div className="postAbout">{post.desc}</div>

                    <img src={post.photo} alt="" className="postImg" />

                    <div className="postStatus">
                        <div className='postStatusLeft'>
                            <Favorite className='heart' />
                            <ThumbUp className='thumbUp' />
                            <div className="postLikes">{like} people like it</div>
                        </div>
                        <div className="postComment">{post.comment} comments</div>
                    </div>

                    <hr className="postHr" />

                    <div className="postButton">
                        <span className="bothButton">
                          <img src="./assets/buttons/like.png" alt="likesButton" className='likesButton' onClick={likeHandler}/>
                          <img src="./assets/buttons/heart.png" alt="heartsButton" className='heartsButton' onClick={likeHandler} />
                        </span>
                        <Comment className='commentButton' />
                        <Share className='shareButton' />
                    </div>

                </div>

            </div>


        </div>

    );
}

export default Post;
