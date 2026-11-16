import React from 'react'
import Animated from '../components/Animated'
import { Star } from 'lucide-react'

const avatars = [
    "/assets/user-1.jpeg",
    "/assets/user-2.jpeg",
    "/assets/user-3.jpeg",
    "/assets/user-4.jpeg"

]

const HeroSection = () => {
    return (
        <section className='flex flex-col items-center min-h-screen justify-center bg-[url("/assets/heroBanner.png")] bg-cover bg-center bg-no-repeat px-4 pt-12'
        >

            <Animated>
                <p className='text-orange-600'>WHERE FLAVOR MEETS ELEGANCE</p>
            </Animated>

            <Animated delay={0.2}>
                <h1 className='text-5xl md:text-6xl font-medium max-w-3xl text-center mt-5 font-urbanist text-balance'>
                    Crafted for unforgettable dining moments
                </h1>
            </Animated>

            <Animated delay={0.4}>
                <p className='text-zinc-600 max-w-md text-center mt-6'>Experience carefully curated menus, fresh local ingredients and impeccable service in a space made for every celebration.</p>
            </Animated>


            <Animated>
                <a href="#booking-process" className='md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 mt-8 rounded-full block transition'>
                    Book a table
                </a>
            </Animated>


            <Animated className="flex items-center justify-center md:justify-start mt-9">
                <div className="flex -space-x-3.5 pr-3">
                    {avatars.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt="guest"
                            className="size-10 border-2 border-slate-50 rounded-full hover:-translate-y-px transition"
                        />
                    ))}
                </div>
                <div>
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                        ))}
                    </div>
                    <p className="text-zinc-800">4.8/5 Rating - 10,000 reviews</p>
                </div>
            </Animated>

        </section>
    )
}

export default HeroSection