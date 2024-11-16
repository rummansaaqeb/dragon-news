import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram  } from "react-icons/fa";


const FindUs = () => {
    return (
        <div className=''>
            <h2 className='font-semibold mb-3'>Find Us On</h2>
            <div className="join flex rounded-sm join-vertical *:bg-base-100">
                <button className="btn join-item justify-start"><FaFacebookF /> Facebook</button>
                <button className="btn join-item justify-start"><FaXTwitter /> X</button>
                <button className="btn join-item justify-start"><FaInstagram /> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;