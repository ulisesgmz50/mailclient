import React from "react";
import {BiTrash,BiMicrochip, BiBox} from "react-icons/bi";


const mailNavBar = ()  => {
    return (
    <div className="navbar">
            <div className="inlineflex">
        <a id="0"> <BiBox/>  Inbox &nbsp; &nbsp; </a>
        <a id="1"> <BiTrash/>  Trash &nbsp; &nbsp;  </a>
        <a id="2"> <BiMicrochip/>   Spam   </a>
            </div>
    </div>
    );
    };

export default mailNavBar;
