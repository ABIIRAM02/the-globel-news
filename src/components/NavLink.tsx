import Link from "next/link"

interface Props {
    category:string,
    isActive:boolean
}

const NavLink = ({category , isActive} : Props) => {
    
  return (
    <Link href={`/news/${category}`} className={`navLinks ${isActive && 'underline decoration-orange-400 underline-offset-4 font-bold text-lg'}`} >{category}</Link>
  )
}

export default NavLink