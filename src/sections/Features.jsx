import React from 'react'
import Animated from '../components/Animated'
import { featuresData } from '../data/data'
import { ChefHat, Leaf, Heart } from 'lucide-react'

const iconMap = {
    ChefHat: ChefHat,
    Leaf: Leaf,
    Heart: Heart,
}

const Features = () => {
    return (
        <section className='px-auto mt-32 md:mt-44'>
            <div className="container">

                {/* ── Section Header ── */}
                <div className='flex flex-col items-center text-center mb-16'>
                    <Animated y={30} duration={0.9}>
                        <p className='text-orange-500 text-xs font-semibold tracking-widest uppercase mb-4'>
                            What Sets Us Apart
                        </p>
                    </Animated>

                    <Animated y={40} duration={1.0} delay={0.15}>
                        <h2 className='text-4xl md:text-5xl font-medium font-urbanist leading-tight'>
                            Crafting memorable <br /> dining experiences
                        </h2>
                    </Animated>
                </div>

                {/* ── Two-column Row ── */}
                <div className='flex flex-col md:flex-row items-center gap-12 md:gap-20'>

                    {/* Left — Feature Cards */}
                    <div className='flex flex-col gap-4 w-full md:w-1/2'>
                        {featuresData.map((feature, i) => {
                            const Icon = iconMap[feature.icon]
                            return (
                                <Animated key={feature.title} y={60} duration={1.0} delay={0.2 + i * 0.22}>
                                    <div className='group flex items-start gap-5 p-5 rounded-2xl border border-transparent
                                        hover:border-orange-100 hover:bg-orange-50/60
                                        hover:-translate-y-1 hover:shadow-md hover:shadow-orange-100/60
                                        transition-all duration-300 ease-out cursor-pointer'>

                                        {/* Icon Box */}
                                        <div className='shrink-0 size-11 rounded-xl flex items-center justify-center
                                            bg-orange-100 group-hover:bg-orange-500
                                            transition-colors duration-300'>
                                            <Icon
                                                size={20}
                                                className='text-orange-500 group-hover:text-white transition-colors duration-300'
                                            />
                                        </div>

                                        {/* Text */}
                                        <div className='flex flex-col gap-1.5 pt-0.5'>
                                            <h3 className='font-semibold text-zinc-900 text-base group-hover:text-orange-600 transition-colors duration-300'>
                                                {feature.title}
                                            </h3>
                                            <p className='text-zinc-500 text-sm leading-relaxed max-w-xs'>
                                                {feature.description}
                                            </p>
                                        </div>

                                    </div>
                                </Animated>
                            )
                        })}
                    </div>

                    {/* Right — Chef Image */}
                    <Animated className='w-full md:w-1/2' x={80} y={0} duration={1.2} delay={0.15}>
                        <div className='relative group overflow-hidden rounded-3xl max-w-[460px] mx-auto md:ml-auto'>
                            <img
                                src="/assets/chef.png"
                                alt="Chef at work"
                                className='w-full h-auto object-cover
                                    transition-transform duration-700 ease-out
                                    group-hover:scale-105'
                            />
                            {/* Subtle overlay on hover */}
                            <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl' />
                        </div>
                    </Animated>

                </div>

            </div>
        </section>
    )
}

export default Features
