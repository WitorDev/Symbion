import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='text-white mt-5 mx-4 border-t-8 border-t-white py-20 bg-violet-900 flex flex-col'>
        <div className='flex flex-col gap-5 sm:gap-0 sm:flex-row items-center justify-around'>
            <div className='flex items-center gap-2'>
                <img 
                className='w-14'
                src="./src/assets/logo.webp" 
                alt="Logo" />
                <div className='flex flex-col items-start'>
                    <h1 className='font-bold text-xl'>Symbion</h1>
                    <h1>&copy; Symbion {new Date().getFullYear()}</h1>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-center sm:text-justify'>Contact us at:</h1>
                <ul>
                    <li>Email: symbion@contracts.com</li>
                    <li>tel: (999) 999-999</li>
                    <li>Instagram: Symbion@contracts</li>
                </ul>
            </div>
            <div className='text-center sm:text-justify'>
                <h1 className='font-bold'>Navigation</h1>
                <ul>
                    <Link to={'/'}>
                        <li className='text-white hover:text-violet-200'>Home</li>
                    </Link>
                    <Link to={'/about'}>
                        <li className='text-white hover:text-violet-200'>About</li>
                    </Link>
                    <Link to={'/contact'}>
                        <li className='text-white hover:text-violet-200'>Contact</li>
                    </Link>
                </ul>
            </div>
        </div>
    </footer>
  )
}
