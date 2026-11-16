import React from 'react'
import Animated from '../components/Animated'
import { testimonials } from '../data/data'
import { Star } from 'lucide-react'

const Testimonials = () => {
    return (
        <section className='px-auto mt-32 md:mt-44'>
            <div className="container">

                {/* ── Section Header ── */}
                <div className='flex flex-col items-center text-center mb-14'>
                    <Animated y={20} duration={0.8}>
                        <p className='text-orange-500 text-xs font-semibold tracking-widest uppercase mb-4'>
                            Loved by Food Lovers
                        </p>
                    </Animated>

                    <Animated y={30} duration={0.9} delay={0.1}>
                        <h2 className='text-4xl md:text-5xl font-medium font-urbanist'>
                            What Our Guests Say
                        </h2>
                    </Animated>
                </div>

                {/* ── Testimonials Grid ── */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {testimonials.map((t, i) => (
                        <Animated key={t.name} y={50} duration={0.9} delay={0.1 + i * 0.12}>
                            <div className='group flex flex-col gap-4 p-6 rounded-2xl border border-zinc-200
                                bg-white hover:border-orange-200 hover:shadow-lg hover:shadow-orange-50
                                hover:-translate-y-1 transition-all duration-300 ease-out h-full'>

                                {/* Stars */}
                                <div className='flex gap-1'>
                                    {[...Array(t.rating)].map((_, j) => (
                                        <Star key={j} size={16} className='fill-orange-400 text-orange-400' />
                                    ))}
                                </div>

                                {/* Review */}
                                <p className='text-zinc-600 text-sm leading-relaxed flex-1'>
                                    "{t.review}"
                                </p>

                                {/* Author */}
                                <div className='flex items-center gap-3 pt-2 border-t border-zinc-100'>
                                    <img
                                        src={t.avatar}
                                        alt={t.name}
                                        className='size-10 rounded-full object-cover ring-2 ring-zinc-100
                                            group-hover:ring-orange-200 transition-all duration-300'
                                    />
                                    <div className='flex flex-col'>
                                        <span className='font-semibold text-zinc-900 text-sm'>
                                            {t.name}
                                        </span>
                                        <span className='text-zinc-400 text-xs'>
                                            {t.location}
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </Animated>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Testimonials

