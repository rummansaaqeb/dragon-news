import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-semibold mb-3'>Login With</h2>
            <div className="*:w-full space-y-2">
                <button className="btn bg-white border border-blue-600 text-blue-600 hover:border-blue-600"><FaGoogle /> Login With Google</button>
                <button className="btn bg-white border border-black hover:border-black"><FaGithub /> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;