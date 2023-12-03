import React from 'react'
import "./scss/notification.scss"
import "../App.scss";
import Mark from "./assets/images/avatar-mark-webber.webp"
import Angela from "./assets/images/avatar-angela-gray.webp"
import Jacob from "./assets/images/avatar-jacob-thompson.webp"
import Rizky from "./assets/images/avatar-rizky-hasanuddin.webp"
import Kimberly from "./assets/images/avatar-kimberly-smith.webp"
import Nathan from "./assets/images/avatar-nathan-peterson.webp"
import Anna from "./assets/images/avatar-anna-kim.webp"
import commentedPicture from "./assets/images/image-chess.webp"



function Notification() {

    const notifications= [
        {
            avatarSrc: Mark,
            autor: "Mark Webber",
            reaction: "reacted to your recent post",
            postTitle: "My first tournament today!",
            group: "",
            message: "",
            commentedPicture: "",
            data: "1m ago",
            ifRead: false,
        },
        {
            avatarSrc: Angela,
            autor: "Angela Gray",
            reaction: "followed you",
            postTitle: "",
            group: "",
            message: "",
            commentedPicture: "",
            data: "5m ago",
            ifRead: false,

        },
        {
            avatarSrc: Jacob,
            autor: "Jacob Thompson",
            reaction: "has joined your group",
            postTitle: "",
            group: "Chess Club",
            message: "",
            commentedPicture: "",
            data: "1 day ago",
            ifRead: false,

        },
        {  
            avatarSrc: Rizky,
            autor: "Rizky Hasanuddin",
            reaction: "sent you a private message",
            postTitle: "",
            group: "",
            message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
            commentedPicture: "",
            data: "5 days ago",
            ifRead: true,

        },
        {    
            avatarSrc: Kimberly,
            autor: "Kimberly Smith",
            reaction: "commented on your picture",
            postTitle: "",
            group: "",
            message: "",
            commentedPicture: commentedPicture,
            data: "1 week ago",
            ifRead: true,

        },
        {
            avatarSrc: Nathan,
            autor: "Nathan Peterson",
            reaction: "reacted to your recent post",
            postTitle: "5 end-game strategies to increase your win rate",
            group: "",
            message: "",
            commentedPicture: "",
            data: "2 weeks ago",
            ifRead: true,

        },
        {   
            avatarSrc: Anna,
            autor: "Anna Kim",
            reaction: "left the group",
            postTitle: "",
            group: "Chess Club",
            message: "",
            commentedPicture: "",
            data: "2 weeks ago",
            ifRead: true,

        }
    ]

  return (
    <div className="componentNotifications">
        {
        notifications.map((item, index) =>{
            return(
                <div className="notification"  style={{backgroundColor: item.ifRead ? "" :  "hsl(210, 60%, 98%)"}} key={index}>
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