import React from 'react'

const Header = () => {
  return (
   <>
   
   <div className='h-[664px] w-full   hero-container'>
    <div className=' mt-6 flex justify-around hero-top'>
     <div className='mt-6'>
        <h1 className='logo-text'>
            ELLOCENT LABS
        </h1>
     </div>
     <div className='flex gap-x-16 text-lg mt-6 headlist'>
        <li>Home</li>
        <li>About Us</li>
        <li>Pricing</li>
        <li>Contact Us</li>
     </div>
     <div className='flex gap-x-5'>
        <button className='w-[112px] h-[60px] border border-[#39D5FF] text-lg rounded-[10px] login-btn'>
          Login
        </button>
        <button className='w-[130px] h-[60px] border border-[#39D5FF] text-lg rounded-[10px] signup-btn'>
          Sign Up
        </button>
     </div>
    </div>

    <div className='flex justify-around h-[640px] items-center hero-main'>
     <div className='space-y-5 hero-main-one'>
     <h1 className='w-[673px] h-[116px] text-[48px] leading-[57.6px] font-semibold hero-content'>
     Empowering Clinics to Scale New Heights in <span className='text-[#39D5FF]'>Healthcare.</span>
     </h1>
     <p className='w-[614px] h-[124px] text-lg leading-[30.6px] hero-minicontent'>
     Discover a seamless, efficient, and user-friendly platform designed to enhance clinic operations, empower doctors, and provide patients with the best care possible. Join us in transforming the future of healthcare today.
     </p>

     <button className='w-[164px] h-[60px] bg-[#39D5FF] text-white rounded-[10px] '>
     Get Started
     </button>
     </div>

     <div className='hero-image-div'>
     <img src="/hero.png" alt=""
     className='w-[535px] h-[311px]
     hero-image
     '
     />
       
     </div>
    </div>
   </div>
   </>
  )
}

export default Header