import React from 'react'
import { FaTwitter ,FaDiscord} from "react-icons/fa";

function Header() {
  return (
    <div className='flex justify-between items-center h-[120px] border-b-2 border-red-800 mx-auto'>
      <div>
      <h1>Dream</h1>
      </div>

      <div>
      <nav className='flex gap-x-6'>
        <ul className='flex gap-x-6'>
            <li className='font-medium'>HOME</li>
            <li className='font-medium'>MINTING</li>
            <li className='font-medium'>CHAMBER</li>
        </ul>
      </nav>
      </div>

      <div className='flex gap-x-6'>
        <FaTwitter className='text-xl'/>
        <FaDiscord className='text-xl'/>
      </div>
    </div>
  )
}

export default Header
