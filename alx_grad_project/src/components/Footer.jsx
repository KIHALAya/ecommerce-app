import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellat voluptates consectetur fugiat vitae maxime, sapiente consequatur recusandae optio quod expedita laborum, nostrum soluta. Illo consequatur aliquid in fugit natus.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Phone number</li>
                    <li>contact@covera.com</li>

                </ul>
            </div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024@ covera.com - All Right Reserved.</p>
            <div>

            </div>

        </div>
    </div>
  )
}

export default Footer
