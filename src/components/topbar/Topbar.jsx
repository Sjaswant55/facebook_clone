import React from 'react';
import "./topbar.css"
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
const Topbar = () => {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className="logo">AdrianMedia</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <SearchTwoToneIcon className='searchIcon'/>
                    <input placeholder='Search for friend,post or videos' className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <PersonIcon />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <ChatIcon />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <CircleNotificationsIcon />
                        <span className="topbarIconBadge">3</span>
                    </div>
                    <img src="/assets/profilePic.jpeg" alt="profilePic" className="topbarImg" />
                </div>
            </div>

        </div>
    );
}

export default Topbar;
