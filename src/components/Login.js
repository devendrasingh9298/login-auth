import { useState, useContext } from "react";
import '../App.css';
// import Profile from "./Profile";
import {LoginContext} from "../context/LoginContext";


function Login(){

    // const [userName, setUserName] = useState('');
    // const [showProfile, setShowProfile] = useState(false);
    const {setUserName, setShowProfile} = useContext(LoginContext);

    return(
        <div className="login-wrapper">
            <input 
                type="text"
                placeholder="Username..."
                onChange={(e) => setUserName(e.target.value)}
                // value={userName}
            />
            <input 
                type="password"
                placeholder="Password..."
            />
            <button
                onClick={() => setShowProfile(true)}
            >
                Login
            </button>

            {/* {showProfile && <Profile userName={userName} />} */}
        </div>
    );
}

export default Login;