import React from 'react'
import "./scss/header.scss"

function Header(props) {

  
  return (
    <header>
        <div className="notification">
            <h1>Notifications <span>3</span></h1>
        
        </div>
        
        <div className="markAsRead" onClick={() => props.markAsRead()}>Mark all as read</div>
    </header>
  )
}

export default Header