import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <footer className=' py-8'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
            {/* Get in Touch Section */}
            <div>
              <h3 className='text-lg text-[#F857A6] mb-4'>Get in Touch</h3>
              <ul className='text-[#60697B]'>
                <li className='mb-9'>
                  <a href='#' className='hover:underline '>
                    Moonshine St. 14/05 Light City, London,<br></br>
                    United Kingdom
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    info@email.com 00 (123) 456 78 90
                  </a>
                </li>
              </ul>
            </div>
            {/* Learn More Section */}
            <div>
              <h3 className='text-lg text-[#F857A6]   mb-4'>Learn More</h3>
              <ul className='text-[#60697B]'>
                <li>
                  <a href='#' className='hover:underline'>
                    About Us
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    Our Story
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    Projects
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            {/* Subscribe Section */}
            <div>
              <h3 className='text-lg smb-4 text-[#F857A6]'>Subscribe</h3>
              <form>
                <label htmlFor='email' className='sr-only'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  className='w-full px-4 py-2 text-black border rounded-md mb-4 border-gray-500'
                  placeholder='Enter your email'
                />
                <button className='bg-purple-400 w-[140px] text-white py-2 px-4 rounded hover:bg-[#F857A6] transition duration-300'>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className='border-t border-purple-400 pt-4 flex flex-col md:flex-row justify-between items-center'>
            <p className='text-sm'>
              &copy; 2024 Your Company. All rights reserved.
            </p>
            <div className='flex space-x-4 mt-4 md:mt-0'>
              <a href='#'>
                <FaFacebook size={20} color='#F857A6' />
              </a>
              <a href='#'>
                <FaTwitter size={20} color='#F857A6' />
              </a>
              <a href='#'>
                <FaInstagram size={20} color='#F857A6' />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
