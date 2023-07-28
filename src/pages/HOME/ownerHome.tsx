import React from 'react'
import MainPagenav from '../navbar/mainPagenav'

const OwnerHome = () => {
  return (
    <div>
    <div>
     <div>
     <MainPagenav />
     </div>
   <div className='h-screen flex  justify-center'>

     <div className='w-1/2  flex  items-center` justify-center'>

     <div className='mt-14 w-full '>
   <img className=' w-11/12' src="/public/mainImages/ownerHome.png" alt="" />
   </div>
     </div>
   <div className='w-1/2 h-screen flex ml-10  items-center'>
   <div className=''>
     <p className='font-serif text-5xl'>WELCOME TO STUD GO</p>
     <p className='ml-2 mt-3'>EXPLORE THE STADIUM’S </p>
   </div>
 
   <div className='absolute bottom-0 mb-9'>
   <button className="rounded-full bg-cyan-300 hover:bg-cyan-300 px-6 py-3 mb-44  font-serif  text-lg" >Lets Go</button>
   </div>
 </div>
   </div>
 </div>
 </div>
  )
}

export default OwnerHome
