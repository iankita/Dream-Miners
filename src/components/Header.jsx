import React from 'react'
import { FaTwitter ,FaDiscord} from "react-icons/fa";

function Header() {
  return (
    <div className='flex justify-between items-center h-[120px] border-b-2 border-red-800'>
      <div>
      <h1>Dream</h1>
      </div>

      <div>
      <nav className='flex gap-x-6'>
        <ul className='flex gap-x-6'>
            <li>HOME</li>
            <li>MINTING</li>
            <li>CHAMBER</li>
        </ul>
      </nav>
      </div>

      <div className='flex gap-x-6'>
        <FaTwitter/>
        <FaDiscord/>
      </div>
    </div>
  )
}

export default Header
