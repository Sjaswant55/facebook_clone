import React from 'react';
import "./rightbarTop.css";
const RightbarTop = () => {
    return (
        <div>
            <div className='rightbar'>
                <div className="rightbarWrapper">
                    <div className="rightbarTop">
                        <img src="./assets/birthdayGift.jpeg" alt="" className="rightbarTopImg" />
                        <div className="currentStatus">
                            <span className='rightbarBold'>Spam Bytes</span> and <span className='rightbarBold'>3 others</span> have a birthday today
                        </div>
                    </div>
                    <img src="./assets/rightbarMiddle.jpeg" alt="rightbarMiddleImg" className="rightbarMiddleImg" />
                </div>
            </div>
            <div className="onlineFriends rightbarBold">Online Friends</div>
        </div>
    );
}

export default RightbarTop;
