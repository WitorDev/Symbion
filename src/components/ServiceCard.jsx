import { useState } from "react";

export default function ServiceCard({ content, index }) {
  const [hovering, setHovering] = useState(false)

  function handleMouseOver() {
    setHovering(true)
  }
  function handleMouseLeave() {
    setHovering(false)
  }
  
  return (
    <div 
    onMouseOver={handleMouseOver}
    onMouseLeave={handleMouseLeave}
    className='group mt-10 flex flex-col sm:flex-row justify-center'>
      <div className='w-full max-w-96 sm:w-1/2 flex flex-col items-center p-2 text-white bg-violet-900 group-hover:bg-gradient-to-t from-violet-900 to-violet-600'>
        <h1 className='text-xl font-bold'>{content.service}</h1>
        <img className={`${!hovering ? 'p-10': 'p-0'} bg-white my-5 rounded-lg`} src={hovering ? content.image : content.animation} alt={content.service} />
        <p>{content.description}</p>
      </div>
        <div
          className='flex-grow flex flex-col justify-center items-center p-2 text-white bg-violet-900 sm:group-hover:bg-gradient-to-t from-violet-900 to-violet-600'>
          <p className='py-10 max-w-80 sm:text-xl'>{content.text}</p>
        </div>
    </div>
  );
}
