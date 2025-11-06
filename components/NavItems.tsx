'use client';

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
    {label: 'Home', href: '/'},
    {label: 'Companions', href: '/companions'},
    {label: 'My Journey', href: '/my-journey'},
]

const NavItems = () => {
    const pathname = usePathname()

    return (
        <nav className="flex items-center gap-4">
            {
                navItems.map((navItem, index) => (
                    <Link 
                        className={`${pathname === navItem.href && 'text-primary font-semibold'}`} 
                        key={index} 
                        href={navItem.href}
                    >
                        {navItem.label}
                    </Link>
                ))
            }
        </nav>
    ) 
}

export default NavItems