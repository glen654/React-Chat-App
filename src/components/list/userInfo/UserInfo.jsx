import React from 'react'
import './UserInfo.css'


const UserInfo = () => {
  return (
    <div className='userInfo'>
        <div className="user">
            <img src="../../../../public/assets/avatar.svg" alt="avatar image" />
            <h2>John Doe</h2>
        </div>
        <div className="icons">
            <img src="../../../../public/assets/more.svg" alt="more image" />
            <img src="../../../../public/assets/video.svg" alt="video image" />
            <img src="../../../../public/assets/edit.svg" alt="edit image" />
        </div>
    </div>
  )
}

export default UserInfo