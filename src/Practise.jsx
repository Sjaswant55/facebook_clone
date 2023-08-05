import React, { useState } from 'react';

const Practise = () => {
    const [nums,setnums] = useState(0);
    
    const setdata = () => {
        setnums(nums+1);
    }

    return (
        <div>
            <h1>{nums}</h1>
           <button onClick={setdata}>hello word  </button> 
        </div>
    );
}

export default Practise;
