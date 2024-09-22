import React from 'react'
import './Detail.css'
import { auth } from '../../lib/firebase'

const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="../../../public/assets/avatar.svg" alt="user image" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit, amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="../../../public/assets/arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="../../../public/assets/arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="../../../public/assets/arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?w=1380&t=st=1726809724~exp=1726810324~hmac=6acb917b719e43caeb8badb4f2cec2b5d7623334833a49b335de2e6a7d46b6fb" alt="" />
                <span>photo_2024_2.png</span>
              </div>
             <img src="../../../public/assets/download.png" alt="" className='icons'/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?w=1380&t=st=1726809724~exp=1726810324~hmac=6acb917b719e43caeb8badb4f2cec2b5d7623334833a49b335de2e6a7d46b6fb" alt="" />
                <span>photo_2024_2.png</span>
              </div>
             <img src="../../../public/assets/download.png" alt="" className='icons'/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?w=1380&t=st=1726809724~exp=1726810324~hmac=6acb917b719e43caeb8badb4f2cec2b5d7623334833a49b335de2e6a7d46b6fb" alt="" />
                <span>photo_2024_2.png</span>
              </div>
             <img src="../../../public/assets/download.png" alt="" className='icons'/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?w=1380&t=st=1726809724~exp=1726810324~hmac=6acb917b719e43caeb8badb4f2cec2b5d7623334833a49b335de2e6a7d46b6fb" alt="" />
                <span>photo_2024_2.png</span>
              </div>
             <img src="../../../public/assets/download.png" alt="" className='icons'/>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="../../../public/assets/arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className='logout' onClick={()=> auth.signOut()}>Logout</button>
      </div>
    </div>
  )
}

export default Detail