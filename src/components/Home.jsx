import React from 'react'

export default function Home() {
  return (
    <main className='mx-4'>
      <div className='py-60 sm:py-60 bg-gradient-to-t from-slate-950 to-violet-950 flex flex-col items-center'>
        <div className='text-5xl sm:text-7xl text-center text-white'>
          Making actions <span className='animate-pulse duration-500 ease-in-out font-bold text-violet-500 bg-gradient-to-r from-purple-400 via-pink-500 to-violet-500 bg-clip-text text-transparent'>reactive</span>
        </div>
        <button className='hover:bg-violet-800 hover:text-violet-300 sm:mt-20 mt-10 max-w-60 text-white font-bold text-2xl bg-violet-700 rounded-lg p-4'>Start Acting!</button>
      </div>
    </main>
  )
}
