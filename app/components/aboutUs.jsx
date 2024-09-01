import React from 'react'
import Contact from './contact'

const AboutUs = () => {
  return (
  <>
  <div className='w-full h-[656px] flex justify-around items-center about-us'>
   <div className='space-y-5 about-top'>
    <h1 className='text-[36px] font-bold leading-[49px]'>
      About Us
    </h1>
    <p className='font-semibold text-[20px] leading-[27px] about-head'>
    Lorem Ipsum is simply dummy text of the printing
    </p>
    <p className='w-[655px] font-normal text-[18px] leading-[24.51px] about-para'>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    <button className='w-[164px] h-[60px] bg-[#39D5FF] text-white rounded-[10px] about-btn'>
     Get Started
     </button>
   </div>
   <div>
    <Contact />
   </div>
  </div>
  </>
  )
}

export default AboutUs