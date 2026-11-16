import React, { useState } from 'react'
import Animated from '../components/Animated'
import { faqs } from '../data/data'
import { Plus, X } from 'lucide-react'

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(0)

    const toggle = (i) => {
        setOpenIndex(openIndex === i ? null : i)
    }

    return (
        <section id='faq' className='px-auto mt-32 md:mt-44'>
            <div className="container">

                {/* ── Section Header ── */}
                <div className='flex flex-col items-center text-center mb-16'>
                    <Animated y={25} duration={0.8}>
                        <p className='text-orange-500 text-xs font-semibold tracking-widest uppercase mb-4'>
                            FAQS
                        </p>
                    </Animated>

                    <Animated y={35} duration={0.9} delay={0.12}>
                        <h2 className='text-4xl md:text-5xl font-medium font-urbanist text-zinc-900'>
                            Frequently Asked Questions
                        </h2>
                    </Animated>
                </div>

                {/* ── Accordion List ── */}
                <div className='max-w-3xl mx-auto flex flex-col gap-4'>
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i
                        return (
                            <Animated
                                key={i}
                                y={45}
                                duration={0.9}
                                delay={0.15 + i * 0.12}
                            >
                                <div
                                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                                        isOpen
                                            ? 'border-zinc-200 bg-white shadow-sm'
                                            : 'border-zinc-200/90 bg-white hover:border-zinc-300'
                                    }`}
                                >
                                    {/* Question Header */}
                                    <button
                                        type='button'
                                        onClick={() => toggle(i)}
                                        className='w-full flex items-center justify-between gap-6 px-6 py-5 text-left cursor-pointer select-none'
                                        aria-expanded={isOpen}
                                    >
                                        <span className={`text-[15px] md:text-base font-normal md:font-medium transition-colors duration-200 ${
                                            isOpen ? 'text-zinc-900' : 'text-zinc-800'
                                        }`}>
                                            {faq.question}
                                        </span>

                                        <span
                                            className={`shrink-0 size-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                                                isOpen
                                                    ? 'bg-zinc-100 text-zinc-600 rotate-90'
                                                    : 'bg-zinc-100/80 text-zinc-400 hover:bg-zinc-200/80'
                                            }`}
                                        >
                                            {isOpen ? (
                                                <X size={15} strokeWidth={2} />
                                            ) : (
                                                <Plus size={15} strokeWidth={2} />
                                            )}
                                        </span>
                                    </button>

                                    {/* Answer Dropdown */}
                                    <div
                                        className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                            isOpen
                                                ? 'grid-rows-[1fr] opacity-100'
                                                : 'grid-rows-[0fr] opacity-0'
                                        }`}
                                    >
                                        <div className='overflow-hidden'>
                                            <p className='px-6 pb-6 text-sm text-zinc-500 leading-relaxed max-w-2xl'>
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Animated>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default Faq
