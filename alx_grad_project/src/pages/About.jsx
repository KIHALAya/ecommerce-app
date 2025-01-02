import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'


const About = () => {
  return (
    <div >
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />      
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] ' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 '>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas molestias, explicabo quia veritatis amet, similique officia, odit ut corporis nesciunt at ipsam accusamus error illo quisquam commodi perspiciatis cupiditate consequuntur!</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore nobis dicta culpa quasi quis possimus pariatur odio tempora officia corrupti ut soluta eveniet accusantium, cumque similique, dolores esse ullam blanditiis!</p>
          <b className='text-gray-800'>Our Mission </b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem assumenda quidem, qui tenetur reiciendis corrupti dolores quisquam, cum perspiciatis tempore eius nulla ullam commodi, repudiandae perferendis dolorum eos? Ratione, praesentium.</p>
        </div>
      </div>

      <div className='text-xl py-4 '>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facere necessitatibus, quia beatae esse eius itaque doloribus similique cumque ut perspiciatis velit nobis repellat quasi eos molestias nam aut aliquid!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic facere necessitatibus, quia beatae esse eius itaque doloribus similique cumque ut perspiciatis velit nobis repellat quasi eos molestias nam aut aliquid!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service :</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic facere necessitatibus, quia beatae esse eius itaque doloribus similique cumque ut perspiciatis velit nobis repellat quasi eos molestias nam aut aliquid!</p>
        </div>
      </div>

      <NewsletterBox/>


    </div>
  )
}

export default About
