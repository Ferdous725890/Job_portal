import React, { useContext } from 'react';
import Authcontex from '../Contex/AuthContext';

const SocialLogin = () => {
    const {signinWithGoogle} = useContext(Authcontex)
    const handelGoogleLogin = () =>{
        signinWithGoogle()
    }
    return (
        <div>
            <div>
                <div className='divider'>
                    or
                </div>
            </div>
           <div className='w-full'>
           <button  onClick={handelGoogleLogin} className='btn w-full mt-3 mb-2'>
                Google Log In
            </button>
           </div>
        </div>
    );
};

export default SocialLogin;