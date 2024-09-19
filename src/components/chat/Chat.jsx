import React from 'react'
import './Chat.css'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="../../../public/assets/avatar.svg" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor, sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="../../../public/assets/phone.png" alt="" />
          <img src="../../../public/assets/video.png" alt="" />
          <img src="../../../public/assets/info.png" alt="" />
        </div>
      </div>
      <div className="center"></div>
      <div className="bottom">
        <div className="icons">
          <img src="../../../public/assets/img.png" alt="" />
          <img src="../../../public/assets/camera.png" alt="" />
          <img src="../../../public/assets/mic.png" alt="" />
        </div>
        <input type="text" placeholder='Type a message...'/>
        <div className="emoji">
          <img src="../../../public/assets/emoji.png" alt="" />
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  )
}

export default Chat