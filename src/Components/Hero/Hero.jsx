import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url('https://i.ibb.co/yY2YK9P/heroBg.jpg')"
        }}
        className='mt-24  flex items-center justify-center bg-cover bg-center bg-no-repeat heroBg rounded-lg'
      >
        <section className='container mx-auto p-8 '>
          <div className='grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Left Side - content */}
            <div className='flex flex-col justify-center'>
              <h2 className='lg:text-[40px] font-bold mb-4'>
                Networking <span className='text-[#F857A6]'>solution</span> for
                <br></br>
                worldwide communication
              </h2>
              <p className='mb-4'>
                We're a company that focuses on establishing <br></br>long-term
                relationships with customers.
              </p>
              <button className='bg-[#F857A6] w-[140px] text-white py-2 px-4 rounded hover:bg-[#EF3F6E] transition duration-300'>
                Explore Now
              </button>
            </div>

            {/* Right Side - image */}
            <div className='flex items-center justify-center '>
              <img
                src='https://i.ibb.co/8Mj09f8/3d6-png.png'
                alt='Example'
                className='w-full h-auto rounded-lg mb-[-180px]'
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Hero
