import React from 'react'

const Footer = () => {
  return (
    <footer className='w-screen min-h-12 bg-violet-10 px-7 flex items-center'>
        <div className="size-full py-2 flex items-center justify-between text-white text-xs font-general">
            <p>
               &copy; <a href="#">Zentry</a> 2024 ,All rights reserved
            </p>

            <p className="transition duration-300 hover:text-black cursor-pointer hover:underline">
                Privacy Policy
            </p>
        </div>
    </footer>
  )
}

export default Footer