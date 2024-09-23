import React, { useEffect, useRef, useState } from 'react'
import './Chat.css'
import EmojiPicker from 'emoji-picker-react'
import { arrayUnion, doc,getDoc,onSnapshot, updateDoc } from 'firebase/firestore'
import {db} from '../../lib/firebase'
import { useChatStore } from '../../lib/chatStore'
import { useUserStore } from '../../lib/userStore'

const Chat = () => {
  const [chat,setChat] = useState()
  const [open,setOpen] = useState(false)
  const [text,setText] = useState("")

  const { chatId , user } = useChatStore()
  const { currentUser } = useUserStore()

  const endRef = useRef(null)

  useEffect(() => {
      endRef.current?.scrollIntoView({behavior:"smooth"})
  },[])

  useEffect(() => {
    const unSub = onSnapshot(doc(db,"chats",chatId), (res) => {
      setChat(res.data())
    })

    return () => {
      unSub();
    };
  },[chatId])


  const handleEmoji = (event) => {
    setText((prev) => prev + event.emoji)
    setOpen(false)
  }

  const handleSend = async () => {
    if(text === "") return;

    try {

      await updateDoc(doc(db,"chats", chatId),{
        messages:arrayUnion({
          senderId: currentUser.id,
          text,
          createdAt: new Date(),

        })
      })

      const userIds = [currentUser.id, user.id];

      userIds.forEach(async (id) => {
        const userChatsRef = doc(db,"userchats",id)
        const userChatsSnapshot = await getDoc(userChatsRef)

        if(userChatsSnapshot.exists()){
          const userChatsData = userChatsSnapshot.data()

          const chatIndex = userChatsData.chats.findIndex(c => c.chatId === chatId)

          userChatsData.chats[chatIndex].lastMessage = text;
          userChatsData.chats[chatIndex].isSeen = id === currentUser.id ? true : false;
          userChatsData.chats[chatIndex].updatedAt = Date.now();

          await updateDoc(userChatsRef, {
            chats:userChatsData.chats,

          });
        }
      })
    } catch (error) {
      console.log(error)
    }
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
        {chat?.messages?.map(message=>(
          <div className="message own" key={message?.createAt}>
          <div className="texts">
            {message.img && <img src={message.img} alt="" />}
            <p>
              {message.text}
            </p>
            <span>1 min ago</span>
          </div>
          </div>
        ))}
        
        <div ref={endRef}></div>
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
        <button className="sendButton" onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Chat