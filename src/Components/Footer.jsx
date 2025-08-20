// Footer.jsx
import React from "react";
import { Globe, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaSquareFacebook,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-white ">
      <div className="max-w-7xl mx-auto px-6 md:px-30 py-14">

        {/* Brand + Help */}
        <div className="mb-12">
          <div className="text-2xl font-semibold">
             <a href="/" className="text-2xl font-bold">
            <img src="./Logo.png" alt="" className="w-[70px] h-[40px] " />
          </a>
          </div>
          <a href="#" className="mt-3 inline-block text-sm hover:underline">
            Visit Help Center
          </a>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 mb-12">
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-white/90">
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Our offerings</a></li>
              <li><a href="#" className="hover:underline">Newsroom</a></li>
              <li><a href="#" className="hover:underline">Investors</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-3 text-sm text-white/90">
              <li><a href="#" className="hover:underline">Ride</a></li>
              <li><a href="#" className="hover:underline">Drive</a></li>
              <li><a href="#" className="hover:underline">Eat</a></li>
              <li><a href="#" className="hover:underline">Uber for Business</a></li>
              <li><a href="#" className="hover:underline">Uber Freight</a></li>
              <li><a href="#" className="hover:underline">Gift cards</a></li>
              <li><a href="#" className="hover:underline">Uber Health</a></li>
            </ul>
          </div>

          {/* Global citizenship */}
          <div>
            <h4 className="font-semibold mb-4">Global citizenship</h4>
            <ul className="space-y-3 text-sm text-white/90">
              <li><a href="#" className="hover:underline">Safety</a></li>
              <li><a href="#" className="hover:underline">Sustainability</a></li>
            </ul>
          </div>

          {/* Travel */}
          <div>
            <h4 className="font-semibold mb-4">Travel</h4>
            <ul className="space-y-3 text-sm text-white/90">
              <li><a href="#" className="hover:underline">Reserve</a></li>
              <li><a href="#" className="hover:underline">Airports</a></li>
              <li><a href="#" className="hover:underline">Cities</a></li>
            </ul>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-25 text-white mb-10">
          <a href="#" aria-label="Facebook" className="hover:opacity-80"><FaSquareFacebook size={16} /></a>
          <a href="#" aria-label="X" className="hover:opacity-80"><FaXTwitter size={16} /></a>
          <a href="#" aria-label="YouTube" className="hover:opacity-80"><FaYoutube size={18} /></a>
          <a href="#" aria-label="LinkedIn" className="hover:opacity-80"><FaLinkedinIn size={16} /></a>
          <a href="#" aria-label="Instagram" className="hover:opacity-80"><FaInstagram size={16} /></a>
        </div>

        {/* Store badges (left) + language/location (right) */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div className="flex items-center gap-4">
            <a href="#">
              <img
                className="h-9"
                alt="Get it on Google Play"
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              />
            </a>
            <a href="#">
              <img
                className="h-9"
                alt="Download on the App Store"
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              />
            </a>
          </div>

          <div className="flex items-center gap-8 text-sm text-white/90">
            <button className="inline-flex items-center gap-2 hover:underline">
              <Globe size={16} /> English
            </button>
            <button className="inline-flex items-center gap-2 hover:underline">
              <MapPin size={16} /> Bhopal
            </button>
          </div>
        </div>

        {/* Bottom legal row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-xs text-white/70 border-t border-white/10 pt-6">
          <p>© 2025 Uber Technologies Inc.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Accessibility</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
