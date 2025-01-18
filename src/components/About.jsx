import React from 'react'

export default function About() {
  return (
  <main className='text-white mx-4 flex flex-col items-center gap-5'>
    <div className='py-20 bg-violet-900 flex flex-col gap-10 items-center'>
          <div className='w-2/3'>
            <h1 className='text-2xl font-bold pb-2'>Who we are</h1>
            <p className='text-xl'> 
            We are a passionate team of professionals dedicated to providing top-notch services that exceed expectations. With a focus on quality, innovation, and customer satisfaction, we strive to make a meaningful impact in the industries we serve.
            </p>
          </div>
      </div>

      <div className='flex justify-between flex-col lg:flex-row'>
        <img className='' src="https://michiganross.umich.edu/sites/default/files/styles/max_900x900/public/images/media/real.jpg?itok=p94fKmBk" alt="Business Photo" />

        <div className='p-5 flex flex-col gap-2 bg-gradient-to-r from-violet-950 to-violet-800'>
          <h1 className='text-2xl font-bold pb-2'>Our Story</h1>
          <p className='text-xl'>
          Founded in 2013, Symbion was born out of a desire to provide businesses with the tools and expertise they need to succeed in a rapidly changing world. 
          </p>
          <p className='text-xl'>
          What started as a small team has grown into a trusted partner for many organizations across various industries.
          </p>
        </div>
      </div>

      <div className='py-20 bg-violet-900 flex flex-col gap-10 items-center'>
        <div className='w-2/3'>
          <h1 className='text-2xl font-bold pb-2'>Our Mission</h1>
          <p className='text-xl'>
          Our mission is simple: to deliver exceptional services that solve real problems for our clients. Whether you're a small business or a large enterprise, we’re here to help you achieve your goals and grow with confidence.
          </p>
        </div>

        <div className='w-2/3'>
          <h1 className='text-2xl font-bold pb-2'>Our Values</h1>
          <ul className='text-xl flex flex-col gap-2'>
            <li>Integrity: We believe in doing the right thing, even when no one is watching.</li>
            <li>Innovation: We constantly seek new and creative ways to provide value to our clients.</li>
            <li>Customer-Centric: We put our clients at the center of everything we do.</li>
          </ul>
        </div>
      </div>

    </main>
  )
}
