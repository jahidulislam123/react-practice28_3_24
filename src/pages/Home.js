import React, { useEffect, useState } from 'react';

const Home = () => {
    const[data , setData] =useState(null);
    useEffect(()=>{
        fetch("http://localhost:5000/helloData")
        .then(res=>res.json())
        .then(data=>setData(data))

    },[])

    return (
        <div>
            <h3>This is a home page here </h3>
            <h4>I will get data from backend </h4>
            console.log({data.length})

            {
                data.map()
            }


            
        </div>
    );
};

export default Home;