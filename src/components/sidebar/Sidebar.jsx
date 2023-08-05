import React from 'react';
import './sidebar.css';
import { Bookmark, Chat, Groups, PlayCircle, QuestionMark, RssFeed, Work, Event, School } from '@mui/icons-material';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon" />
                        <span className="sidebarListIconText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon" />
                        <span className="sidebarListIconText">chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircle className="sidebarIcon" />
                        <span className="sidebarListIconText">videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Groups className="sidebarIcon" />
                        <span className="sidebarListIconText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon" />
                        <span className="sidebarListIconText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <QuestionMark className="sidebarIcon" />
                        <span className="sidebarListIconText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <Work className="sidebarIcon" />
                        <span className="sidebarListIconText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon" />
                        <span className="sidebarListIconText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon" />
                        <span className="sidebarListIconText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show more</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="./assets/dhoni.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Dhoni</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./assets/virat.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Virat</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./assets/ronaldo.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Ronaldo</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./assets/messi.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Messi</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./assets/ronaldo.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Ronaldo</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="./assets/messi.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Messi</span>
                    </li>
                    
                    
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
