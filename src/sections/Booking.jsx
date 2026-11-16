import React from "react";
import Animated from "../components/Animated";
import { bookingSteps, bookingTestimonial } from "../data/data";
import { Star } from "lucide-react";

const Booking = () => {
  return (
    <section id="booking-process" className="px-auto mt-32 md:mt-44">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          {/* ── Left Column ── */}
          <div className="flex flex-col gap-8 w-full md:w-1/2 shrink-0">
            {/* Label */}
            <Animated y={20} duration={0.8}>
              <p className="text-orange-500 text-xs font-semibold tracking-widest uppercase">
                Table Reservation Process
              </p>
            </Animated>

            {/* Heading */}
            <Animated y={30} duration={0.9} delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-medium font-urbanist leading-tight">
                Reserve your table in three simple steps
              </h2>
            </Animated>

            {/* Testimonial Card */}
            <Animated y={30} duration={0.9} delay={0.2}>
              <div className="flex flex-col gap-4 p-6 rounded-2xl border border-zinc-100 bg-zinc-50/60">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(bookingTestimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-orange-400 text-orange-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-zinc-600 text-sm leading-relaxed italic">
                  "{bookingTestimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-1">
                  <img
                    src={bookingTestimonial.authorImg}
                    alt={bookingTestimonial.authorName}
                    className="size-10 rounded-full object-cover ring-2 ring-orange-100"
                  />
                  <span className="font-semibold text-zinc-800 text-sm">
                    {bookingTestimonial.authorName}
                  </span>
                </div>
              </div>
            </Animated>
          </div>

          {/* ── Right Column — Steps ── */}
          <div className="flex flex-col w-full md:w-1/2 divide-y divide-zinc-100">
            {bookingSteps.map((step, i) => (
              <Animated
                key={step.number}
                y={40}
                duration={0.9}
                delay={0.15 + i * 0.18}
              >
                <div className="flex items-start gap-6 py-8 group cursor-default">
                  {/* Step Number */}
                  <span className="text-orange-500 font-medium text-base shrink-0 w-10 pt-0.5">
                    {step.number}
                  </span>

                  {/* Text */}
                  <div className="flex flex-col gap-2">
                    <h3
                      className="font-semibold text-zinc-900 text-lg
                                            group-hover:text-orange-500 transition-colors duration-300"
                    >
                      {step.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
