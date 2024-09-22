import React, { useState } from 'react'
import './Login.css'
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from 'firebase/auth'
import { auth, db } from '../../lib/firebase'
import { collection, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore'
import upload from '../../lib/upload'

const Login = () => {
  const [avatar,setAvatar] = useState({
    file:null,
    url:""
  })

  const [loading,setLoading] = useState(false)

  const handleAvatar = (event) => {
    if(event.target.files[0]){
      setAvatar({
        file:event.target.files[0],
        url:URL.createObjectURL(event.target.files[0])
      })
    }
    
  }

  const handleLogin = async(event) => {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.target)

    const {email,password} = Object.fromEntries(formData);

    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }finally{
      setLoading(false)
    }
  }

  const handleRegister = async(event) => {
    event.preventDefault()
    setLoading(true)
    const formData = new FormData(event.target)

    const {username,email,password} = Object.fromEntries(formData);

    if(!username || !email || !password)
      return toast.warn("Please enter inputs!");
    if(!avatar.file) return toast.warn("Please upload an avatar!");

    const userRef = collection(db, "users");
    const q = query(userRef, where("username", "==", username))
    const querySnapShot = await getDocs(q);
    if(!querySnapShot.empty){
      return toast.warn("Select another username");
    }

    try {
      const res = await createUserWithEmailAndPassword(auth,email,password)

      const imgUrl = await upload(avatar.file)

      await setDoc(doc(db,"users", res.user.uid),{
        username,
        email,
        avatar: imgUrl,
        id: res.user.uid,
        blocked:[],
      });

      await setDoc(doc(db,"userchats", res.user.uid),{
        chats: []
      });

      toast.success("Account created! You can login now")
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }finally{
      setLoading(false)
    }
  }
  
  
  return (
    <div className='login'>
      <div className="item">
        <h2>Welcome back,</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder='Email' name='email'/>
          <input type="password" placeholder='Password' name='password'/>
          <button disabled={loading}>{loading ? "Loading" : "Sign In"}</button>
        </form>
      </div>
      <div className="seperator"></div>
      <div className="item">
      <h2>Create an Account</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="file">
            <img src={avatar.url || '../../../public/assets/avatar.svg'} alt="" />
            Upload an image</label>
          <input type="file" id='file' style={{display:"none"}} onChange={handleAvatar}/>
          <input type="text" placeholder='Username' name='username'/>
          <input type="text" placeholder='Email' name='email'/>
          <input type="password" placeholder='Password' name='password'/>
          <button disabled={loading}>{loading ? "Loading" : "Sign Up"}</button>
        </form>
      </div>
    </div>
  )
}

export default Login