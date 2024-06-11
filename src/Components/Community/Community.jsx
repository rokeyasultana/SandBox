import React from 'react'

const Community = () => {
  return (
    <div
      style={{
        backgroundImage: "url('https://i.ibb.co/yY2YK9P/heroBg.jpg')"
      }}
      className='ml-24 mr-24 mt-24 mb-24 flex items-center justify-center bg-cover bg-center bg-no-repeat rounded-lg'
    >
      <div className='text-center'>
        <p className='mb-5 text-[#F857A6] mt-11 uppercase'>
          Join Our Community
        </p>
        <p className='mb-11 font-semibold text-[text-#343F52] text-[30px]'>
          We are trusted by over 5000+ clients.<br></br> Join them now and grow
          your business.
        </p>

        <button className='bg-[#F857A6] w-[140px] text-white py-2 px-4 mb-11 rounded hover:bg-[#EF3F6E] transition duration-300'>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Community
