"use client"
import React, { useState } from 'react'

const Faq = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  return (
   <>
  
    <div className='w-full h-[697px] flex justify-around items-center faq-container'>
   
    <div className='space-y-2 faq-questions'>
    <h1 className='text-[36px] font-bold leading-[48.46px] faq-head'>
            Got Any Questions ?
        </h1>
        <p className='text-[20px] font-semibold text-[#4DDFFD] leading-[35.9px]'>
        We have your answers.
        </p>
   <div className='pt-10'>
  <div className='w-[743px] h-[69px] faq-left-container'>
  <div className='w-[692px] faq-detail '>
     <details
        className="group"
        onToggle={() => setIsOpen1(!isOpen1)}
        open={isOpen1}
      >
        <summary className="flex items-center justify-between cursor-pointer list-none">
          <span>
            It is a long established fact that a reader will be distracted by
            the readable content.
          </span>
          {isOpen1 ? (
            <svg
              className="w-5 h-5 text-[#4DDFFD]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-[#4DDFFD]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          )}
        </summary>
        <p className="mt-2 text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </details>
     </div>
  </div>

  <div className='w-[743px] h-[69px] faq-left-container'>
  <div className='w-[692px] faq-detail'>
     <details
        className="group"
        onToggle={() => setIsOpen2(!isOpen2)}
        open={isOpen2}
      >
        <summary className="flex items-center justify-between cursor-pointer list-none">
          <span>
            It is a long established fact that a reader will be distracted by
            the readable content.
          </span>
          {isOpen1 ? (
            <svg
              className="w-5 h-5 text-[#4DDFFD]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-[#4DDFFD]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          )}
        </summary>
        <p className="mt-2 text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </details>
     </div>
  </div>

  <div className='w-[743px] h-[69px] faq-left-container'>
  <div className='w-[692px] faq-detail'>
     <details
        className="group"
        onToggle={() => setIsOpen3(!isOpen3)}
        open={isOpen3}
      >
        <summary className="flex items-center justify-between cursor-pointer list-none">
          <span>
            It is a long established fact that a reader will be distracted by
            the readable content.
          </span>
          {isOpen1 ? (
            <svg
              className="w-5 h-5 text-[#4DDFFD]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-[#4DDFFD]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          )}
        </summary>
        <p className="mt-2 text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        </p>
      </details>
     </div>
  </div>

  <div className='w-[743px] h-[69px] faq-left-container'>
  <div className='w-[692px] faq-detail '>
     <details
        className="group"
        onToggle={() => setIsOpen4(!isOpen4)}
        open={isOpen4}
      >
        <summary className="flex items-center justify-between cursor-pointer list-none">
          <span>
            It is a long established fact that a reader will be distracted by
            the readable content.
          </span>
          {isOpen1 ? (
            <svg
              className="w-5 h-5 text-[#4DDFFD]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-[#4DDFFD]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          )}
        </summary>
        <p className="mt-2 text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </details>
     </div>
  </div>

  <div className='w-[743px] h-[69px] faq-left-container'>
  <div className='w-[692px] faq-detail'>
     <details
        className="group"
        onToggle={() => setIsOpen5(!isOpen5)}
        open={isOpen5}
      >
        <summary className="flex items-center justify-between cursor-pointer list-none">
          <span>
            It is a long established fact that a reader will be distracted by
            the readable content.
          </span>
          {isOpen1 ? (
            <svg
              className="w-5 h-5 text-[#4DDFFD]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-[#4DDFFD]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          )}
        </summary>
        <p className="mt-2 text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </details>
     </div>
  </div>
    
   </div>
    </div>

    <div className='flex'>
        <img src="/faq1.png" alt="" className='w-[335px] faq-img1'/>
        <img src="/faq2.png" alt="" 
        className='translate-x-[-190px] pt-44 w-[372px] faq-img2'
        />
    </div>
    </div>
   </>
  )
}

export default Faq