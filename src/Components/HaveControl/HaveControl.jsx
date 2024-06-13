import React from 'react'
import hero2 from '../../assets/hero2.png'
import { TbPointFilled } from "react-icons/tb";
const HaveControl = () => {
  return (
  
      <div>
        <section className='container mt-24  mx-auto mr-20 '>
          <div className='grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Left Side - Image */}

            <div className='flex items-center justify-center '>
              <img
                src={hero2}
                alt='image'
                className='w-[380px] h-[450px] rounded-lg'
              />
            </div>

            {/* Right Side - Text Content */}
            <div className='flex flex-col justify-center'>
              <h4 className='text-[#F857A6] mb-4 uppercase'>
                Have perfect control
              </h4>
              <h2 className='mb-4 text-[#343F52] text-[40px] font-bold'>
                We bring solutions to make life easier for our customers.
              </h2>
              <p className='text-[#60697B]'>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                <br></br>
                nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis
                in, egestas<br></br>
                eget quam. Praesent commodo cursus magna, vel scelerisque nisl
                <br></br>
                consectetur et. Vivamus sagittis lacus vel augue rutrum.
              </p>

              <div className='text-[#60697B] grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-5'>
                <div className='flex gap-1'>
                <TbPointFilled  color='#605DBA' size='30px'/>
                  <p>Aenean quam ornare. Curabitur blandit.</p>
                </div>

                <div className='flex gap-1'>
                <TbPointFilled  color='#605DBA' size='30px'/>
                  <p>Etiam porta euismod malesuada mollis.</p>
                </div>

                <div className='flex gap-1'>
                <TbPointFilled  color='#605DBA' size='30px'/>
                  <p>Nullam quis risus eget urna mollis ornare.</p>
                </div>
                <div className='flex gap-1'>
                <TbPointFilled  color='#605DBA' size='30px'/>
                  <p>Vivamus sagittis lacus vel augue rutrum.</p>
                </div>

                <div></div>
              </div>
            </div>
          </div>
        </section>
      </div>

  )
}

export default HaveControl
