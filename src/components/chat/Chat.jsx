import React, { useState } from 'react'
import './Chat.css'
import EmojiPicker from 'emoji-picker-react'

const Chat = () => {
  const [open,setOpen] = useState(false)
  const [text,setText] = useState("")

  const handleEmoji = (event) => {
    setText((prev) => prev + event.emoji)
    setOpen(false)
  }

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

      <div className="center">
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Suscipit dicta blanditiis ab, fugiat ut consectetur quod laudantium optio? 
              Enim vitae recusandae esse tempore delectus maiores molestiae ullam cupiditate maxime earum?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Suscipit dicta blanditiis ab, fugiat ut consectetur quod laudantium optio? 
              Enim vitae recusandae esse tempore delectus maiores molestiae ullam cupiditate maxime earum?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Suscipit dicta blanditiis ab, fugiat ut consectetur quod laudantium optio? 
              Enim vitae recusandae esse tempore delectus maiores molestiae ullam cupiditate maxime earum?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="icons">
          <img src="../../../public/assets/img.png" alt="" />
          <img src="../../../public/assets/camera.png" alt="" />
          <img src="../../../public/assets/mic.png" alt="" />
        </div>
        <input type="text" placeholder='Type a message...' value={text} onChange={event=>setText(event.target.value)}/>
        <div className="emoji">
          <img src="../../../public/assets/emoji.png" alt="" onClick={() => setOpen((prev) => !prev)}/>
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  )
}

export default Chat