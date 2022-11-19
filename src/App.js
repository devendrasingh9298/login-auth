import AuthContext from "./components/AuthContext";

function App(){

  return(
    <div>
      <AuthContext />
    </div>
  );
}

export default App;
// import { useState } from 'react';
// import './App.css';
// import Login from './components/Login';
// import Profile from './components/Profile';
// import {LoginContext} from './context/LoginContext';

// function App() {
//   const [showProfile, setShowProfile] = useState(false);
//   const [userName, setUserName] = useState('');
//   return (
//     <div className="App">
//       <LoginContext.Provider value={{setUserName, setShowProfile, userName}}>
//             {showProfile ? <Profile userName={userName} /> : <Login />}
//       </LoginContext.Provider>
//       {/* {showProfile ? <Profile userName="" /> : <Login />} */}
//       {/* <Login /> */}
//     </div>
//   );
// }

// export default App;
