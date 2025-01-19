import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Cube from './Cube'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from 'three'
import { lerp } from 'three/src/math/MathUtils.js'
import Services from './Services'

export default function Home() {
  const [hovering, setHovering] = useState(false)

  function handleMouseOver() {
    setHovering(true)
  }
  function handleMouseLeave() {
    setHovering(false)
  }

  return (
    <main className='mx-4'>
      <div className='py-60 sm:py-60 bg-gradient-to-t from-slate-950 to-violet-950 flex flex-col items-center'>        
        <div className='z-10 text-5xl sm:text-7xl text-center text-white'>
          Making actions <span className='animate-pulse duration-500 ease-in-out font-bold text-violet-400 bg-gradient-to-r from-purple-400 via-pink-500 to-violet-500 bg-clip-text text-transparent'>reactive</span>
        </div>
        <Link to={'/contact'} className='z-50'>
          <button onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver} className='hover:bg-violet-800 hover:text-violet-300 sm:mt-20 mt-10 max-w-60 text-white font-bold text-2xl bg-violet-700 rounded-lg p-4'>Start Acting!</button>
        </Link>

        <div className='opacity-55 absolute -translate-y-1/3 w-full h-3/4'>
          <Canvas>
            <ambientLight intensity={1} />
            <directionalLight intensity={30} position={[0, 10, 5]} color={"pink"} />
            <directionalLight intensity={30} position={[0, -10, -5]} color={"purple"} />
            <Cube scaling={hovering ? true : false} color={hovering ? 'purple' : 'blue'} />
          </Canvas>
        </div>
      </div>

      <Services />
    </main>
  )
}
