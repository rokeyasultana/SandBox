import React from 'react'
import computer from '../../assets/computer.png'
import networking from '../../assets/networking.png'
import cloud from '../../assets/cloud.png'
import wireless from '../../assets/wireless.png'
import it from '../../assets/it.png'
import server from '../../assets/server.png'
const Features = () => {
  return (
    <div>
      <h4 className='text-center mb-5 mt-24 text-[#F857A6]'>OUR FEATURES</h4>
      <h2 className='text-center mb-11 text-[38px] font-bold'>
        The service we offer is specifically<br></br>designed to meet your
        needs.
      </h2>
      {/* 6 needs */}
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center items-center place-items-center gap-8 ml-11 mr-11 mb-11'>
        {/* 1 */}
        <div>
          <div className='flex gap-3'>
            <img src={computer} />
            <h3 className='text-[#343F52] font-semibold lg:text-[22px] mb-3'>
              Software & Integration
            </h3>
          </div>

          <p>
            Duis mollis gravida commodo id luctus erat <br></br> porttitor
            ligula, eget lacinia odio sem aget elit<br></br> nullam quis risus
            eget.
          </p>
        </div>
        {/* 2 */}
        <div>
          <div className='flex gap-3'>
            <img src={networking} />
            <h3 className='text-[#343F52] font-semibold lg:text-[22px] mb-3'>
              Network Security
            </h3>
          </div>

          <p>
            Duis mollis gravida commodo id luctus erat <br></br> porttitor
            ligula, eget lacinia odio sem aget elit<br></br> nullam quis risus
            eget.
          </p>
        </div>
        {/* 3 */}
        <div>
          <div className='flex gap-3'>
            <img src={networking} />
            <h3 className='text-[#343F52] font-semibold mb-3 lg:text-[22px]'>
              Cloud Services
            </h3>
          </div>

          <p>
            Duis mollis gravida commodo id luctus erat <br></br> porttitor
            ligula, eget lacinia odio sem aget elit <br></br> nullam quis risus
            eget.
          </p>
        </div>
        {/* 4 */}
        <div>
          <div className='flex gap-3'>
            <img src={wireless} />
            <h3 className='text-[#343F52] font-semibold lg:text-[22px] mb-3'>
              Wireless Networking
            </h3>
          </div>

          <p>
            Duis mollis gravida commodo id luctus erat <br></br> porttitor
            ligula, eget lacinia odio sem aget elit<br></br> nullam quis risus
            eget.
          </p>
        </div>
        {/* 5 */}
        <div>
          <div className='flex gap-3'>
            <img src={it} />
            <h3 className='text-[#343F52] font-semibold lg:text-[22px] mb-3'>
              IT Solutions
            </h3>
          </div>

          <p>
            Duis mollis gravida commodo id luctus erat <br></br> porttitor
            ligula, eget lacinia odio sem aget elit<br></br> nullam quis risus
            eget.
          </p>
        </div>
        {/* 6 */}
        <div>
          <div className='flex gap-3'>
            <img src={server} />
            <h3 className='text-[#343F52] font-semibold lg:text-[22px] mb-3'>
              Server Configuration
            </h3>
          </div>

          <p>
            Duis mollis gravida commodo id luctus erat <br></br> porttitor
            ligula, eget lacinia odio sem aget elit<br></br> nullam quis risus
            eget.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Features
