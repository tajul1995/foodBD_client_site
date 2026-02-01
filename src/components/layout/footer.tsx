"use client"

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-amber-700 text-amber-950 mt-10 rounded-2xl">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        
        
        <div>
          <h2 className="text-2xl font-extrabold italic mb-3">Foodie</h2>
          <p className="font-medium leading-relaxed">
            Delicious food delivered fast and fresh.  
            Taste the best from your favorite restaurants.
          </p>

         
          <div className="flex gap-4 mt-5">
            <a className="hover:text-white transition" href="/">
              <FaFacebookF size={18} />
            </a>
            <a className="hover:text-white transition" href="/menu">
              <FaInstagram size={18} />
            </a>
            <a className="hover:text-white transition" href="#">
              <FaTwitter size={18} />
            </a>
            <a className="hover:text-white transition" href="#">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>

        
        <div>
          <h3 className="font-bold italic text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 font-medium">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Menu</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

 
        <div>
          <h3 className="font-bold italic text-lg mb-4">Contact Us</h3>
          <p className="font-medium">jurain dhaka 1204</p>
          <p className="font-medium">Dhaka, Bangladesh</p>
          <p className="font-medium mt-2">info@foodie.com</p>
          <p className="font-medium">+880 123 456 789</p>
        </div>

      
        <div>
          <h3 className="font-bold italic text-lg mb-4">Subscribe</h3>
          <p className="font-medium mb-4">
            Get our latest offers and updates.
          </p>

          <form className="flex gap-2 border border-amber-400 rounded-2xl">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-3 py-2 rounded-lg outline-none text-black"
            />
            
          </form>
        </div>
      </div>

   
      <div className="border-t border-amber-800 text-center py-5 font-semibold">
        © {new Date().getFullYear()} Foodie. All rights reserved.
      </div>
    </footer>
  )
}
