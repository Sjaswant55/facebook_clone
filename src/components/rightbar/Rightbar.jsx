import React from 'react';
import './rightbar.css';
import RightbarTop from '../rightbarTop/RightbarTop';
import RightbarBottom from '../rightbarBottom/RightbarBottom';
import { Onlineusers } from "../../onlineusers";
const Rightbar = () => {
    return (
        <div>
            <RightbarTop />
            {
                Onlineusers.map( (o) => (

                    <RightbarBottom id={o.id} online={o}/>
                ))
            }
        </div>


    );
}

export default Rightbar;
