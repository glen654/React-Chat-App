import React, { useState } from 'react'
import './chatList.css'

const ChatList = () => {
  const [addMode,setAddMode] = useState(false);
  return (
    <div className='chatList'>
        <div className="search">
           <div className="searchBar">
                <img src="../../../../public/assets/search.svg" alt="" />
                <input type="text" placeholder='Search'/>
           </div>
           <img src={addMode ? "../../../../public/assets/minus.svg" : "../../../../public/assets/plus.svg"} alt="" className='add' 
           onClick={() => setAddMode((prev) => !prev)}/>
        </div>
        <div className="item">
            <img src="../../../../public/assets/avatar.svg" alt="" />
            <div className="texts">
              <span>Jane Doe</span>
              <p>Hello</p>
            </div>
        </div>
        <div className="item">
            <img src="../../../../public/assets/avatar.svg" alt="" />
            <div className="texts">
              <span>Jane Doe</span>
              <p>Hello</p>
            </div>
        </div>
        <div className="item">
            <img src="../../../../public/assets/avatar.svg" alt="" />
            <div className="texts">
              <span>Jane Doe</span>
              <p>Hello</p>
            </div>
        </div>
    </div>
  )
}

export default ChatList