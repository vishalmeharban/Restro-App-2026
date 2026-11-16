import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/data'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <nav className={`fixed top-0 z-20 px-auto w-full transition-all duration-700 ease-in-out
                ${scrolled
                    ? 'bg-white/80 backdrop-blur-md shadow-sm'
                    : 'bg-transparent'
                }`}>

                <div className="container">
                    <div className='flex items-center justify-between font-medium py-4 mx-auto '>

                        <a href="#">
                            <img src="/assets/logo.svg" alt="logo" />
                        </a>

                        {/* desktop navigation Links */}
                        <div className='hidden md:flex items-center gap-10'>
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className='relative py-1 text-zinc-800 hover:text-zinc-950 transition-colors duration-200 group'
                                >
                                    <span>{link.name}</span>
                                    <span className='absolute bottom-0 left-0 w-full h-[2px] bg-[#F54900] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center' />
                                </a>
                            ))}
                        </div>

                        <a href="#booking-process" className='hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition'>
                            Book a table
                        </a>

                        {/* mobile toggle button (hidden on md and above) */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='md:hidden p-2 rounded-full hover:bg-zinc-100 transition'
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>

                    </div>
                </div>

                {/* mobile menu (hidden on md and above) */}
                <div
                    className={`md:hidden absolute left-0 top-full w-full bg-white shadow-lg overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className='flex flex-col items-center gap-6 py-8'>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className='relative py-1 text-lg text-zinc-800 hover:text-[#F54900] transition-colors group'
                            >
                                <span>{link.name}</span>
                                <span className='absolute bottom-0 left-0 w-full h-[2px] bg-[#F54900] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center' />
                            </a>
                        ))}

                        <a
                            href="#booking-process"
                            onClick={() => setIsOpen(false)}
                            className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition'
                        >
                            Book a table
                        </a>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar
