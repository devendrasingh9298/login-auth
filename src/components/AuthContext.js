import { useState } from 'react';
import Login from './Login';
import Profile from './Profile';
import {LoginContext} from '../context/LoginContext';

function AuthContext() {
  const [showProfile, setShowProfile] = useState(false);
  const [userName, setUserName] = useState('');
  return (
    <div>
      <LoginContext.Provider value={{setUserName, setShowProfile, userName}}>
            {showProfile ? <Profile userName={userName} /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}

export default AuthContext;


