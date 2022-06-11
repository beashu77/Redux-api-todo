import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { logoutAPI } from '../store/auth/auth.action';


const Navbar = () => {
    const {isAuth} = useSelector(state=>state.auth)

    const dispatch = useDispatch();

    const handleLoginClick = ()=>{
        dispatch(logoutAPI());
    }
    
  return (
    <div style={{padding:"10px",display:"flex",gap:"20px",justifyContent:"space-between"}}>
      <div style={{display:"flex",gap:"20px"}}>
        <Link to="/">Home</Link>
      </div>
      <div style={{display:"flex",gap:"20px"}}>
        <button onClick={handleLoginClick}>{isAuth? "Logout":"Login"}</button>
      </div>
    </div>
  )
}

export default Navbar