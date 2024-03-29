'use client'
import { usePathname } from 'next/navigation'
import { categories } from '../../constants'
import NavLink from './NavLink'

const NavLinks = () => {

  const pathName = usePathname()

  const isActive  = (path : string) => {
    return pathName?.split('/').pop() === path
  }

  return (
    <nav className='grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 pb-10 max-w-6xl mx-auto border-b' >
      {
        categories.map( data => <NavLink key={data} category={data} isActive={isActive(data)}/> )
      }
    </nav>    
  )
}

export default NavLinks