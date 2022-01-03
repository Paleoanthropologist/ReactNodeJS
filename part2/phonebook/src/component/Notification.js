import React from "react";

const Notification = ({message})=>{
    if(message===null){
        return null;
    }

    return(
        <div className='message'>
            <h4>{message}</h4>
        </div>
    )

}

export default Notification;