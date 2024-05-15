import React from 'react'
import bottle from '../src/assets/waterbottle.jpeg'
function Hero() {
  return (
    <section>
    <div className='h-50 w-15 mt-20 mx-10'>
        <img className='rounded-xl' src={bottle} layout='fill' objectfit="cover" />
    </div>
    <div className='flex items-center justify-center mt-6 flex-col'>
        <p className=' font-bold text-lg'>ADVERTISE WITH US</p>
        <p className='mt-4 mx-10 px-5 py-5'>WITH OPENWATER, YOU CAN PLACE YOUR BRANDS INTO EVERYONE’S HAND.  IT’S A BETTER AND VERY EFFECTIVE WAY OF ADVERTISING WAY THAN TRADITIONAL ADVERTISING.
WITH OPEN WATER YOUR BRAND REACHES THE RIGHT AUDIENCE.</p>
    </div>
    </section>
  )
}

export default Hero