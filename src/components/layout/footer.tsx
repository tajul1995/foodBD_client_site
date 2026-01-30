"use client"

 import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa"


export default function Footer() {
  

  return (
    <footer className="bg-amber-700 mt-4 rounded-2xl">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-10">
        
        
        <div className="space-y-4">
          

          <div className="flex gap-4 mt-4 justify-end">
            <h2  className=" text-amber-950"><FaFacebookF size={20} /></h2>
            <p  className="hover:text-primary"><FaInstagram size={20} /></p>
            <p  className="hover:text-primary"><FaTwitter size={20} /></p>
            <p  className="hover:text-primary"><FaLinkedinIn size={20} /></p>
          </div>
        </div>

        
        <div className="flex justify-between items-center">
            <div>
          <h3 className="text-black font-bold italic mb-4">Contact Us</h3>
          <p className="text-black font-bold italic">123 Food Street, Dhaka, Bangladesh</p>
          <p className="text-black font-bold italic mt-2">Email: info@foodie.com</p>
          <p className="text-black font-bold italic mt-1">Phone: +880 123 456 789</p>
        </div>

    
        <div>
          <h3 className="text-black font-bold italic mb-4">Subscribe</h3>
          <p className="text-black font-bold italic mb-4">Get our latest offers and updates.</p>
          
        </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-10 text-black font-bold italic pt-6 text-center  text-xl">
        &copy; {new Date().getFullYear()} Foodie. All rights reserved.
      </div>
    </footer>
  )
}
