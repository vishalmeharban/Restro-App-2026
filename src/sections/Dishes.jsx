import React from "react";
import Animated from "../components/Animated";
import { dishes } from "../data/data";

const Dishes = () => {
  return (
    <section id="dishes" className="px-auto mt-32 md:mt-44">
      <div className="container">
        {/* ── Section Header ── */}
        <div className="flex flex-col items-center text-center mb-14">
          <Animated y={20} duration={0.7}>
            <p className="text-orange-500 text-xs font-semibold tracking-widest uppercase mb-4">
              Chef's Signature Selection
            </p>
          </Animated>

          <Animated y={24} duration={0.8} delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-medium font-urbanist leading-tight">
              Discover our <br /> signature dishes
            </h2>
          </Animated>
        </div>

        {/* ── Dishes Grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-14 px-[80px]">
          {dishes.map((dish, i) => (
            <Animated
              key={dish.id}
              y={50}
              scale={0.94}
              duration={0.9}
              delay={0.1 + i * 0.15}
            >
              <div className="flex flex-col items-center text-center group cursor-pointer">
                {/* Circular Image */}
                <div
                  className="w-30 h-30 md:w-40 md:h-40 rounded-full overflow-hidden mb-5
                                    ring-1 ring-zinc-100 group-hover:ring-orange-200
                                    transition-all duration-300 group-hover:scale-105"
                >
                  <img
                    src={dish.img}
                    alt={dish.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <p className="text-sm font-medium text-zinc-800 group-hover:text-orange-500 transition-colors duration-200">
                  {dish.title}
                </p>

                {/* Price */}
                <p className="text-sm text-zinc-400 mt-1">{dish.price}</p>
              </div>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dishes;
