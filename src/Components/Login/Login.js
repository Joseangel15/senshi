import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';


function Login() {

    function login() {
        let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;

        let redirectUri = encodeURIComponent(`${window.origin}/auth/callback`);
    
        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`;
    }

    return(
        <div>
            <div>
                <div className='upperPart'>

                </div>
                <Link to='./Home'><h1>SENSHI</h1></Link>
                <div className='loginBar'>
                    <h3>Begin The Journey</h3>
                    <div>
                        <h5>Username</h5>
                        <h5>Password</h5>
                        <button onClick={login}>Sign In</button>
                        <div>
                            <h5>Register</h5>
                        </div>
                    </div>
                </div>
                <div className='lowerPart'>

                </div>
            </div>
        </div>
    )
}



export default Login;
