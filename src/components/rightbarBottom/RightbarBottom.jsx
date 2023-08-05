import React from 'react';

const RightbarBottom = ({online}) => {
    return (
        <div>
             <div className="rightbarOnline">
                    <div className="friends">
                        <div className="friend">
                            <img src={online.profilePic} alt="" className="onlineFriendImg" />
                            <span className="onlineDot"></span>
                            <div className="onlineFriendName">{online.userName}</div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default RightbarBottom;
