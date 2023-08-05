import React from 'react';
import "./share.css";
import { PermMedia, Label, LocationOn, AddReaction } from "@mui/icons-material"

const Share = () => {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="./assets/profilePic.jpeg" alt="ProfilePic" className="shareProfileImg" />
                    <input placeholder="What's in your mind Adrian" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <button className="shareButton">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia className='shareIconPhotos' />
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
                    </div>
                    <div className="shareOptions">
                        <div className="shareOption">
                            <Label className='shareIconTag' />
                            <span className="shareOptionText">Tag</span>
                        </div>
                    </div>
                    <div className="shareOptions">
                        <div className="shareOption">
                            <LocationOn className='shareIconLocation' />
                            <span className="shareOptionText">Locations</span>
                        </div>
                    </div>
                    <div className="shareOptions">
                        <div className="shareOption">
                            <AddReaction className='shareIconFeelings' />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareFinalButton">share</button>
                </button>
            </div>
        </div>
    );
}

export default Share;
