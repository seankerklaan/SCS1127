import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src="/images/smart-clinic-systems-logo.png" alt="Smart Clinic Systems Logo" className="h-12 w-12 mb-4" />
            <p className="mb-4">
              Expert consulting for modern healthcare practices. Transform your practice with smart tools & expert guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>613-800-6876</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>seankerklaan@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="h-4 w-4 mt-1">📍</div>
                <span>1132 Tighe Street, Manotick ON K4M 1A5</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe for actionable tips to enhance your clinic operations.</p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border-gray-700"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Smart Clinic Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
