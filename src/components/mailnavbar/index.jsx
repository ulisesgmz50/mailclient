import React from "react";
import {BiTrash,BiMicrochip, BiBox} from "react-icons/bi";


const mailNavBar = ()  => {

    return (
    <div className="navbar">
        <a id="0">
            <div className="flexcontainer">
            <BiBox/> &nbsp; Inbox &nbsp; &nbsp;
            </div>
        </a>
        <a id="1">
        <div className="flexcontainer">
            <BiTrash/> &nbsp; Trash &nbsp; &nbsp;
            </div>
        </a>
        <a id="2">
        <div className="flexcontainer">
            <BiMicrochip/>  &nbsp; Spam  
            </div>
        </a>

        
    </div>
    );
    };

export default mailNavBar;
