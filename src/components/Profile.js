import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

function Profile(props){

    const {userName} = useContext(LoginContext);
    return(
        <div>
            {/* <h1>UserName : {props.userName}</h1> */}
            <h1>UserName : {userName}</h1>
        </div>
    );
}

export default Profile;