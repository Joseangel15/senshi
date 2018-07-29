import React from 'react';
import './Login.css';
// import {Link} from 'react-router-dom';


function Login() {

    function login() {
        let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;

        let redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`);
    
        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`;
    }

    return(
        <div className='pictureDiv'>

                   <h1 className='mainTitle'>SENSHI</h1>


                    <div className='loginBar'>

                        <h2 className='journey'>Begin The Journey</h2>

                        <div>
                            
                            <button onClick={login} className='loginBtn'>Sign In</button>
                            
                        </div>

                    </div>

                
            
        </div>
    )
}



export default Login;
