import React from 'react'

export default function Contact() {
  return (
    <main className='text-white mx-4 py-20 bg-violet-900 flex flex-col items-center'>
      
      <h1 className='text-3xl sm:text-5xl mb-10 font-bold'>Send us a message</h1>

      <form action="" className='w-1/2 min-w-60'>
        <div className='flex flex-col gap-4'>
          <label htmlFor="Name">Name:</label>
          <input className='text-black p-2' placeholder='Name...' type="text" name="Name" id="Name" required />
          <label htmlFor="Name">Message:</label>
          <textarea placeholder='Message...' className='text-black max-h-80 h-40 p-2'></textarea>
        </div>
      </form>
    </main>
  )
}
