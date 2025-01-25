import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://files.oaiusercontent.com/file-1ux2m1v98obBhb48tHNDdX?se=2025-01-23T00%3A37%3A41Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D7ae5d0ce-8833-40ae-a758-f849f98dea5a.webp&sig=7fgf%2BouNrMEFVVx1VMjLNF2BMaKvr/WS5l8lF0Mcy0s%3D)] pt-8 h-screen w-screen flex flex-col justify-between'>
        <img className='w-[200px] ml-[25%]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png' alt='uber-logo'/>
        <div className='bg-white py-4 px-4'>
          <h2 className='text-3xl font-semibold'>Get Started With Uber</h2>
          <Link to='/login' className='flex items-center justify-center text-white rounded bg-black text-xl w-full mt-5 h-14'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home