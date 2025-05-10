import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <nav className='flex w-full px-10 py-4 items-center justify-between'>
            <div>
                LOGO
            </div>
            <ul className='flex items-center justify-center gap-6 list-none'>
                <li>
                    <Link href={'/'}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href={'/about'}>
                        About
                    </Link>
                </li>
                <li>
                    <Link href={'/course'}>
                        Course
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header