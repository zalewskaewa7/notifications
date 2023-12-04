import React from 'react'
import "./scss/notification.scss"
import "../App.scss";




function Notification(props) {

    

  return (
    <div className="componentNotifications">

        {
        props.notifications.map((item, index) =>{
            return(
                <div className="notificationElement"  style={{backgroundColor: item.ifRead ? "" :  "hsl(210, 60%, 98%)"}} key={index}>
                    <img src={item.avatarSrc} alt={item.title}/>
                    <div className="content">
                        <h2>{item.autor}</h2>
                        <div className="reaction">{item.reaction}</div>
                        <span className="postTitle">{item.postTitle}</span>
                        <span className="group">{item.group}</span>
                        <span className={item.ifRead ? "" : "notRead"}>{item.ifRead}</span>
                        <img className="commentedPicture" src={item.commentedPicture ? item.commentedPicture : ""} alt={item.title}/>
                        <div className="data">{item.data}</div>

                        <div className={item.message ? "message" : ""}>{item.message}</div>
                    </div>
                </div>
            )
        }
        )
        }
        </div>
  )
}

export default Notification