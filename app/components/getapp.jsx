import React from 'react'

const GetApp = () => {
  return (
   <>
   <div className='w-full h-[289px] flex justify-evenly items-center get-app'>
   <div className='w-[262px] h-[112px]'>
    <h4 className='font-bold text-[36px] get-app-text'>
        Get the app
    </h4>
    <p className='text-[20px] leading-[27px] font-semibold get-app-minitext'>
    Download App On Demand to see a doctor in minutes
    </p>
   </div>

   <div className='w-[525px] h-[165px] rounded-[40px] bg flex justify-around items-center app-icon-div'>
      <div>
      <img src="/app2.png" alt="" 
       className='w-[233px] h-[81px] app-store-icon'
       />
      
      </div>
      <div>
      <img src="/app1.png" alt="" 
       className='w-[230px] h-[84.79px] play-store-icon'
       />
      </div>

   </div>
   </div>
   
   </>
  )
}

export default GetApp