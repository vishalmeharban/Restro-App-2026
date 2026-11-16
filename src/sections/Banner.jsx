import React from 'react'
import Animated from '../components/Animated'
import { dishes } from '../data/data'
import { ArrowRight } from 'lucide-react'

const bannerDishes = dishes.slice(0, 4)

const Banner = () => {
    return (
        <section className='bg-[#FF6900] text-white py-12 md:py-16 mt-24 md:mt-32 overflow-hidden relative'>
            <div className="container">
                <div className='flex flex-col items-center text-center'>

                    {/* ── Main Heading ── */}
                    <Animated y={25} duration={0.8} delay={0.1}>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold font-urbanist text-white leading-tight max-w-2xl text-balance'>
                            Every Meal Is Made To Be Remembered
                        </h2>
                    </Animated>

                    {/* ── Subtitle ── */}
                    <Animated y={20} duration={0.8} delay={0.2}>
                        <p className='text-white/90 text-sm md:text-base font-normal max-w-lg mx-auto mt-3 leading-relaxed'>
                            Join us for fresh ingredients, signature recipes and an unforgettable dining experience.
                        </p>
                    </Animated>

                    {/* ── CTA Button with Arrow Icon ── */}
                    <Animated y={18} duration={0.8} delay={0.3}>
                        <a
                            href='#booking-process'
                            className='inline-flex items-center gap-2 bg-white text-[#FF6900] font-semibold text-sm px-7 py-2.5 rounded-full mt-5 shadow-md hover:shadow-xl hover:bg-orange-50 transition-all duration-300 hover:scale-105 active:scale-95 group'
                        >
                            <span>Book your table</span>
                            <ArrowRight size={16} className='transition-transform duration-300 group-hover:translate-x-1' />
                        </a>
                    </Animated>

                    {/* ── 4 Dishes Aligned Horizontally ── */}
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-9 w-full max-w-3xl mx-auto'>
                        {bannerDishes.map((dish, index) => (
                            <Animated
                                key={dish.id}
                                y={30}
                                scale={0.94}
                                duration={0.85}
                                delay={0.38 + index * 0.12}
                            >
                                <div className='group flex flex-col items-center text-center cursor-pointer'>
                                    {/* Dish Circle */}
                                    <div className='w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden p-1 bg-white/20 backdrop-blur-sm shadow-md group-hover:bg-white/40 group-hover:scale-105 transition-all duration-400 ease-out'>
                                        <img
                                            src={dish.img}
                                            alt={dish.title}
                                            className='w-full h-full object-cover rounded-full group-hover:rotate-6 transition-transform duration-600 ease-out'
                                        />
                                    </div>
                                </div>
                            </Animated>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Banner
