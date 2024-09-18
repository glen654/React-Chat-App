import React from 'react'
import './UserInfo.css'

const UserInfo = () => {
  return (
    <div className='userInfo'>
        <div className="user">
            <img src="./avatar.png" alt="" />
            <h2>John Doe</h2>
        </div>
        <div className="icons">
            <img src="./more" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
    </div>
  )
}

export default UserInfo