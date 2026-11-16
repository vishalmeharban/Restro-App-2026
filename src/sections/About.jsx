import React from "react";
import Animated from "../components/Animated";
import { statsData } from "../data/data";
import { MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="px-auto mt-32 md:mt-44">
      <div className="container">
        {/* ── Top Row: Image + Text ── */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          {/* Left — About Image */}
          <Animated className="w-full md:w-1/2 shrink-0">
            <img
              src="/assets/about.png"
              alt="Dining experience"
              className="w-full max-w-[520px] mx-auto md:mx-0 h-auto object-cover rounded-3xl"
            />
          </Animated>

          {/* Right — Text Content */}
          <div className="flex flex-col gap-5 w-full md:w-1/2">
            {/* Badge */}
            <Animated delay={0.1}>
              <div className="flex items-center gap-2 text-sm font-medium text-zinc-700 w-fit">
                <img src="/assets/iconL.png" alt="" className="h-5 w-auto" />
                <span className="tracking-widest uppercase">
                  Crafted with passion
                </span>
                <img src="/assets/iconR.png" alt="" className="h-5 w-auto" />
              </div>
            </Animated>

            {/* Heading */}
            <Animated delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-medium font-urbanist leading-tight text-balance">
                Experience dining beyond expectations
              </h2>
            </Animated>

            {/* Description */}
            <Animated delay={0.3}>
              <p className="text-zinc-500 max-w-sm leading-relaxed">
                We combine fresh local ingredients, creative recipes and elegant
                presentation to deliver a memorable experience with every visit.
              </p>
            </Animated>

            {/* Map CTA */}
            <Animated delay={0.4}>
              <a
                href="#"
                className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 transition text-white rounded-xl px-4 py-3 w-fit"
              >
                <img
                  src="/assets/dish1.png"
                  alt="restaurant"
                  className="size-10 rounded-lg object-cover shrink-0"
                />
                <div className="flex flex-col leading-tight">
                  <span className="font-semibold text-sm">
                    Bistro Royale, NY
                  </span>
                  <span className="text-orange-100 text-xs flex items-center gap-1">
                    <MapPin size={11} />
                    View on Map
                  </span>
                </div>
              </a>
            </Animated>
          </div>
        </div>

        {/* ── Bottom Row: Stats ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 text-center py-28">
          {statsData.map((stat, i) => (
            <Animated key={stat.number} delay={i * 0.15}>
              <div className="flex flex-col items-center gap-3">
                <span className="text-6xl md:text-7xl font-medium text-zinc-800 font-urbanist">
                  {stat.number}
                </span>
                <h3 className="font-semibold text-base text-zinc-900">
                  {stat.title}
                </h3>
                <p className="text-zinc-500 text-sm max-w-[220px] leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
