"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import foodImage from "../../../public/pizza.jpg"

export default function AboutUsAwesome() {
  return (
    <section className="relative h-[700px] overflow-hidden">
      
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute inset-0"
      >
        <Image
          src={foodImage}
          alt="Delicious Food"
          fill
          priority
          className="object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative z-10 h-full flex items-center"
      >
        <div className="max-w-5xl px-6 md:px-12 space-y-6">
          
          <span className="inline-block text-primary font-semibold tracking-widest uppercase">
            About Us
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Where Passion <br />
            Meets <span className="text-primary">Perfect Food</span>
          </h1>

          <p className="max-w-2xl text-white/90 text-lg">
            We partner with trusted kitchens and chefs to bring you food that
            is fresh, flavorful, and crafted with care. Every dish tells a
            story of quality ingredients and unforgettable taste.
          </p>

          <div className="flex gap-8 pt-4">
            <div>
              <p className="text-4xl font-bold text-white">10k+</p>
              <p className="text-sm text-white/70">Orders Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">120+</p>
              <p className="text-sm text-white/70">Food Items</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">60+</p>
              <p className="text-sm text-white/70">Trusted Kitchens</p>
            </div>
          </div>

          {/* CTA */}
          

        </div>
      </motion.div>
    </section>
  )
}
