"use client"

import Image from "next/image"
import photo from "../../../public/photo2.jpg"

export default function AboutUsSection() {
  return (
    <section className="w-full  py-12 sm:py-2 ">

      {/* TITLE */}
      <div className="max-w-7xl mx-auto px-4 mb-10 border-t-2 border-b-2 border-amber-500">
        <h2 className="text-3xl font-extrabold text-amber-700 text-center italic py-3">
          About Us
        </h2>
      </div>
{/* grid grid-cols-1 md:grid-cols-2 gap-10 items-center */}
      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid  gap-10 items-center relative">

          {/* IMAGE */}
          <div className="relative w-full  rounded-xl overflow-hidden shadow-lg">
            <Image
              src={photo}
              alt="About us"
              //  fill
              className="object-cover w-full "
              priority
            />
          </div>

          {/* TEXT */}
          <div className="space-y-4 p-4 italic leading-relaxed absolute top-10 sm:relative font-bold text-amber-900">
            <p className="hidden md:block">
              We are passionate about building a platform that makes food ordering
              simple, reliable, and enjoyable for everyone. Our website is designed
              to connect people with their favorite restaurants and help them
              discover new flavors.
            </p>

            <p className="hidden md:block">
              Our mission is to combine modern technology with quality service. We
              focus on speed, accuracy, and transparency so customers can place
              orders confidently and track them in real time.
            </p>

            <p className="hidden md:block">
              We believe food is more than just a meal—its a moment of comfort,
              joy, and connection. Thats why we prioritize freshness, reliability,
              and customer satisfaction in everything we do.
            </p>

            <p className="hidden md:block">
              As we grow, our commitment remains the same: to deliver great food
              experiences through innovation, trust, and simplicity.
            </p>
            <p className="hidden md:block">
              We believe food is more than just a meal—its a moment of comfort,
              joy, and connection. Thats why we prioritize freshness, reliability,
              and customer satisfaction in everything we do.
            </p>

            <p className="hidden md:block">
              As we grow, our commitment remains the same: to deliver great food
              experiences through innovation, trust, and simplicity.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
