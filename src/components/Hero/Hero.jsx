import React from 'react'

import Boy from '../../assets/boy shopping.jpg'
import Girl from '../../assets/girl shopping.jpg'
import Sale from '../../assets/big sale.jpg'


const ImageList=[

  {
    id: 1,
    img: Boy,
    title:"Upto 50% off on all Men's Wear",
    description:"This offer is only for This month. Only for men and boys"
  },

  {
    id: 2,
    img: Girl,
    title:"Upto 30% off on all ladies Wear",
    description:"This offer is only for This month. Only for men and boys"
  },

  {
    id: 3,
    img: Sale,
    title:"Upto 50% off on all Men's Wear",
    description:"This offer is only for This month. Only for men and boys"
  },

]


const Hero = () => {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center'>
      {/* Background pattern */}
      <div className='h-[700px] bg-orange-300 w-[700px] absolute -top-1/2 right-0 rounded-3xl rotate-45 -scale-z-90'>
      </div>
      {/* hero section */}
      <div className='container pb-8 sm:pb-0 relative'>
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2'>
            <div className='flex flex-col justify-center gap-4 pt-12 text-center'>
              <h1 className='text-5xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p className='text-2xl text-emerald-500'>
              Lorem,ipsum
            </p>
            <div>
              <button className='bg-gradient-to-r from-orange-300 to bg-orange-700 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full cursor-pointer'>
                Order Now
              </button>
            </div>
            </div>
            {/* image section */}
            <div>
              <div>
                <img src={Girl} alt="girl image"className='2-[300px] h-[300px] object-conatin mx-auto' />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero