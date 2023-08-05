import React from 'react';
import Topbar from "../../components/topbar/Topbar";
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';
import './home.css'
import Login from "../../pages/login/Login";
import NewAccount from '../../pages/newAccount/NewAccount';

const Home = () => {
    return (
        <>
            {/* <NewAccount /> */}
            <Topbar />
            <div className="homeContainer">
               <Sidebar />
               <Feed />
               <Rightbar />
            </div> 
        </>
    );
}

export default Home;
