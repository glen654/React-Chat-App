import React from 'react'
import List from './components/list/List'
import Chat from './components/chat/Chat'
import Detail from './components/detail/Detail'
import Login from './components/login/Login'
import {Route,Routes} from 'react-router-dom'

// const App = () => {

//   const user = false
//   return (
//     <div className='container'>
//       {
//         user ? (
//           <>
//             <List/>
//             <Chat/>
//             <Detail/>
//           </>
          
//         ) : (<Login />)
//       }
        

//     </div>
//   )
// }

const App = () => {
  return (
    <>
      <Routes>
         <Route path='/' element={<Login />}/>
         <Route path='/chat' element={<Chat />}/>
         <Route path='/detail' element={<Detail />}/>
         <Route path='/list' element={<List />}/>
      </Routes>
    </>
  )
}

export default App