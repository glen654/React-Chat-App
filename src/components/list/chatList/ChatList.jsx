import React from 'react'
import './chatList.css'

const ChatList = () => {
  return (
    <div className='chatList'>
        <div className="search">
           <div className="searchBar">
                <img src="../../../../public/assets/search.svg" alt="" />
                <input type="text" placeholder='Search'/>
           </div>
           <img src="../../../../public/assets/plus.svg" alt="" />
        </div>
    </div>
  )
}

export default ChatList