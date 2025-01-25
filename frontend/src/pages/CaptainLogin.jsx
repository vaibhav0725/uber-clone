import { useState } from "react";
import { Link } from "react-router-dom";
const CaptainLogin = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [captainData,setCaptainData]=useState({});
  function submitHandler(e){
    e.preventDefault();
    setCaptainData({email:email,password:password});
    setEmail('');
    setPassword('');
  }
  return (
    <div className='p-7 text-2xl font-semibold h-screen flex flex-col justify-between'>
      <div>
      <img className='w-[180px] mb-10 ml-[20%]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png' alt='uber-logo'/>
      <form onSubmit={(e)=>{submitHandler(e)}}>
        <label className="mb-2">Enter Your Email</label>
        <input
        required
        type='email'
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        placeholder='captain-mail@example.com'
        className='border rounded w-full text-lg px-4 py-2 bg-slate-100 mb-7'/>
        <label>Enter Your Password</label>
        <input
        required
        type='password'
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
        placeholder='password'
        className='border rounded w-full text-lg px-4 py-2 bg-slate-100 mb-7'/>
        <button className='border rounded w-full text-white bg-black text-center h-14'>Login</button>
      </form>
      <p className="font-normal text-xl text-center mt-2">Wanna Join, <Link to='/captain-signup' className="text-blue-800">Register First!</Link></p>
      </div>
      <div>
      <Link to='/login' className='flex items-center justify-center text-white rounded bg-emerald-500 w-full mt-5 h-14'>Sign In As User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin
