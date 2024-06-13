import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import one from '../../assets/one.png'
import two from '../../assets/two.png'
import three from '../../assets/three.png'

const LatestProjects = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear'
  }

  return (
    <div>
      <h4 className='text-center uppercase mb-5 mt-20 text-[#F857A6]'>
        Latest Projects
      </h4>
      <h2 className='text-center text-[#343F52] mb-11 text-[38px] font-bold'>
        Check out some of our awesome projects<br></br> with{' '}
        <span className='underline decoration-[#F857A6]'>creative</span> ideas
        and great design
      </h2>
      <div className='px-12 mt-11 mb-20 ml-20 mr-20'>
     
        <Slider {...settings}>
          <div>
            <img style={{ width: '300px' }} src={one} alt='' />
          </div>
          <div>
            <img style={{ width: '300px' }} src={two} alt='' />
          </div>
          <div>
            <img style={{ width: '300px' }} src={three} alt='' />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default LatestProjects
