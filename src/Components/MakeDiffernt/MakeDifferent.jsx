import React from 'react'
import { TbPointFilled } from 'react-icons/tb'
import makeUs from '../../assets/makeUs.png'
const MakeDifferent = () => {
  return (
    <div>
      <section className='container ml-20 p-8'>
        <div className='mt-20 grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 justify-center items-center place-items-center gap-6'>
          {/* Left Side - text content */}

          <div className='flex flex-col justify-center'>
            <h4 className='text-[#F857A6] font-bold mb-4 uppercase'>
              What Makes Us Different?
            </h4>
            <h2 className='mb-4 text-[#343F52] text-[40px] font-bold'>
              We make spending stress free so you have the perfect control.
            </h2>
            <p className='text-[#60697B] mb-5'>
              Etiam porta sem malesuada magna mollis euismod. Donec<br></br>
              ullamcorper nulla non metus auctor fringilla. Morbi leo risus,
              porta<br></br>
              ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac
              <br></br>
              cursus. Integer posuere erat a ante venenatis dapibus posuere
              velit.
            </p>

            <div className='text-[#60697B]'>
              <div className='flex gap-1'>
                <TbPointFilled color='#605DBA' size='30px' />
                <p>Aenean quam ornare. Curabitur blandit.</p>
              </div>

              <div className='flex gap-1'>
                <TbPointFilled color='#605DBA' size='30px' />
                <p>Etiam porta euismod malesuada mollis.</p>
              </div>

              <div className='flex gap-1'>
                <TbPointFilled color='#605DBA' size='30px' />
                <p>Nullam quis risus eget urna mollis ornare.</p>
              </div>
              <div className='flex gap-1'>
                <TbPointFilled color='#605DBA' size='30px' />
                <p>Vivamus sagittis lacus vel augue rutrum.</p>
              </div>

              <div></div>
            </div>
          </div>

          {/* Right Side - image */}
          <div className='flex items-center justify-center '>
            <img
              src={makeUs}
              alt='image'
              className='w-[380px] h-[450px] rounded-lg'
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default MakeDifferent
