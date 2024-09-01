import React from 'react'

const Overview = () => {
  return (
  <>
  <div className='w-full h-[575px] flex justify-around items-center overview-container'>
   <div className='flex gap-x-4 overview-image'>
    <div>
    <img src="/Manage.png" alt="" 
    className='w-[269px] h-[314px] mt-10 manage-img'
    />

    </div>
    <div>
        <img src="/dailyexpense.png" alt=""
        className='w-[234px] h-[271px] daily-img'
        />
        <img src="/book.png" alt="" 
        className='w-[232px] h-[130px] book-img'
        />
    </div>
   </div>
   <div className='space-y-6 overview-maincontent'>
    <h1 className='text-[36px] font-bold leading-10'>
        Overview
    </h1>
    <p className='w-[632px]  font-normal text-lg overview-minicontent'>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
    </p>
    <button className='w-[315px] h-[60px] rounded-[10px] gap-2 bg-[#39D5FF] text-white overview-btn'>
    Learn more about us
    </button>
   </div>
  </div>
  
  </>
  )
}

export default Overview