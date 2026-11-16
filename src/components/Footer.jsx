import React from 'react'
import Animated from './Animated'
import { quickLinks, socialLinks } from '../data/data'
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    ArrowUpRight
} from 'lucide-react'

// Add Facebook to social icons with authentic clean SVG
const allSocials = [
    ...socialLinks,
    {
        name: 'Facebook',
        href: '#',
        icon: (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
        )
    }
]

const contactInfo = [
    {
        icon: Mail,
        label: 'Email',
        value: 'hello@bistroroyale.com',
        href: 'mailto:hello@bistroroyale.com'
    },
    {
        icon: Phone,
        label: 'Phone',
        value: '+1 (555) 234-5678',
        href: 'tel:+15552345678'
    },
    {
        icon: MapPin,
        label: 'Address',
        value: '124 Culinary Ave, Manhattan, NY',
        href: '#'
    },
    {
        icon: Clock,
        label: 'Hours',
        value: 'Mon - Sun: 10:00 AM - 10:00 PM',
        href: '#timing'
    }
]

const Footer = () => {
    return (
        <footer className='bg-zinc-50 border-t border-zinc-200/80 pt-16 md:pt-20 pb-10 mt-32 md:mt-44'>
            <div className="container">

                {/* ── Main Footer Grid ── */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8'>

                    {/* Left Column: Brand & Info (5 cols) */}
                    <Animated className='lg:col-span-5 flex flex-col' y={30} duration={0.8} delay={0.1}>
                        <a href="#" className='inline-block w-fit'>
                            <img src="/assets/logo.svg" alt="Bistro Royale Logo" className='h-9 w-auto' />
                        </a>

                        <p className='text-zinc-600 text-sm mt-5 leading-relaxed max-w-sm'>
                            Serving freshly prepared dishes with authentic flavors, premium ingredients and exceptional hospitality every day.
                        </p>

                        {/* Social Icons with Theme Hover Effect */}
                        <div className='flex items-center gap-3 mt-7'>
                            {allSocials.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target='_blank'
                                    rel='noreferrer'
                                    aria-label={item.name}
                                    className='group size-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-[#F54900] hover:text-white hover:border-[#F54900] hover:-translate-y-1 hover:shadow-md hover:shadow-orange-200 transition-all duration-300 [&_svg]:size-4 [&_path]:transition-colors [&_path]:group-hover:stroke-white [&_path]:group-hover:fill-white'
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </Animated>

                    {/* Middle Column: Quick Links (3 cols) */}
                    <Animated className='lg:col-span-3 flex flex-col' y={30} duration={0.8} delay={0.2}>
                        <h3 className='font-urbanist font-semibold text-zinc-900 text-base mb-5 tracking-wide'>
                            Quick Links
                        </h3>

                        <ul className='flex flex-col gap-3'>
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className='group inline-flex items-center gap-1.5 text-zinc-600 hover:text-[#F54900] text-sm transition-all duration-200 hover:translate-x-1'
                                    >
                                        <span>{link.name}</span>
                                        <ArrowUpRight
                                            size={13}
                                            className='opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#F54900]'
                                        />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Animated>

                    {/* Right Column: Get In Touch (4 cols) */}
                    <Animated className='lg:col-span-4 flex flex-col' y={30} duration={0.8} delay={0.3}>
                        <h3 className='font-urbanist font-semibold text-zinc-900 text-base mb-5 tracking-wide'>
                            Get In Touch
                        </h3>

                        <div className='flex flex-col gap-3.5'>
                            {contactInfo.map((item) => {
                                const Icon = item.icon
                                return (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className='group flex items-start gap-3 text-zinc-600 hover:text-zinc-900 transition-colors'
                                    >
                                        <span className='shrink-0 size-9 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 group-hover:bg-[#F54900] group-hover:text-white group-hover:border-[#F54900] transition-all duration-300 mt-0.5 shadow-2xs'>
                                            <Icon size={16} />
                                        </span>

                                        <div className='flex flex-col'>
                                            <span className='text-[11px] uppercase tracking-wider text-zinc-400 font-medium'>
                                                {item.label}
                                            </span>
                                            <span className='text-sm text-zinc-700 group-hover:text-[#F54900] transition-colors'>
                                                {item.value}
                                            </span>
                                        </div>
                                    </a>
                                )
                            })}
                        </div>
                    </Animated>

                </div>

                {/* ── Bottom Bar / Copyright ── */}
                <div className='border-t border-zinc-200/80 pt-8 mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs md:text-sm text-zinc-500'>
                    <Animated y={15} duration={0.7} delay={0.35}>
                        <p>© 2026. All Right Reserved.</p>
                    </Animated>

                    <Animated y={15} duration={0.7} delay={0.4}>
                        <p className='font-medium text-zinc-700'>
                            Designed by{' '}
                            <span className='text-[#F54900] font-semibold hover:underline cursor-pointer'>
                                Vishal Meharban
                            </span>
                        </p>
                    </Animated>
                </div>

            </div>
        </footer>
    )
}

export default Footer
