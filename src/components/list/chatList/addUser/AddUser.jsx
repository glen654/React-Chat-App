import React, { useState } from 'react'
import './addUser.css'
import {db} from '../../../../lib/firebase'
import { collection,getDoc,query,where } from 'firebase/firestore'

const AddUser = () => {

  const [user, setUser] = useState(null)

  const handleSearch = async (event) => {
    event.preventDefault()
    const formData = new FormData()
    const username = formData.get("username")

    try {
      const userRef = collection(db, "users");

      const q = query(userRef, where("username", "==", username));

      const querySnapShot = await getDoc(q)

      if(!querySnapShot.empty){
        setUser(querySnapShot.doc)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='addUser'>
        <form onSubmit={handleSearch}>
            <input type="text" placeholder='Username' name='username'/>
            <button>Search</button>
        </form>
        <div className="user">
            <div className="detail">
                <img src="../../../public/assets/avatar.svg" alt="" />
                <span>Jane Doe</span>
            </div>
            <button>Add User</button>
        </div>
    </div>
  )
}

export default AddUser