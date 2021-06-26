import React from 'react';
import Hero from "./hero2.png";
import Navbar from '../Components/Navbar';

function index() {
    return (
        <div>
            <div class="body-intro w-full h-screen absolute top-0 right-0">
                <img src={Hero} alt="" />
            </div>
            <div className="w-full h-auto absolute z-10">
                <Navbar/>
            </div>
        </div>
    )
}

export default index
