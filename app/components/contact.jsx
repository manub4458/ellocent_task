import React from 'react'
import CustomPhoneInput from './phoneInput'


const Contact = () => {
  return (
   <>
   <div className='w-[480px] h-[496px] border-2 border-[#4DDFFD] rounded-[10px] contact-container '>
     <div className='w-[446px] h-[456px] m-4 space-y-4 contact-main'>
        <h1 className='text-[28px] font-normal leading-[34.44px]'>
            Contact Us
        </h1>
        <form action=""
        className='flex flex-col space-y-6'
        >
            <input 
            type="text"
            id='name'
            name='name'
            placeholder='Name'
            className='bg-[#DADADA38] w-full outline-none text-[#39393D] h-[43px]'
            />
            <select name="" id=""
            className='bg-[#DADADA38] w-full outline-none text-[#39393D] h-[43px]'
            
            >
                
                <option value="">
                Select Service
                </option>
                <option value="">
                    Service 1
                </option>
                <option value="">
                    Service 2
                </option>
            </select>
           <div className='custom-phone'>
           <CustomPhoneInput />
           </div>
            <input 
            type="email"
            id='email'
            name='email'
            placeholder='Email Address'
            className='bg-[#DADADA38] w-full outline-none text-[#39393D] h-[43px]'
            />
            <textarea name="message" id="message"
            rows={3}
            placeholder='Message'
            className='bg-[#DADADA38] w-full outline-none text-[#39393D] '  
            >
                
            </textarea>

            <button className='h-[42px] rounded-[8px] w-full bg-[#4DDFFD] text-white font-semibold text-[16px] leading-[20px]'>
                   Submit Deatils
            </button> 
        </form>
     </div>
   </div>
   
   </>
  )
}

export default Contact