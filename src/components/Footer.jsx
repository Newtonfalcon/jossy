import React from "react";
import { MapPin, Phone, Mail, Facebook, Clock } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white font-body">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:px-8 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              Jossy Technical Work
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Your trusted Ventillation experts in Kano since 2018. Quality service, swift response, and customer satisfaction guaranteed.
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Clock className="w-4 h-4" />
              <span>Est. August 11, 2018</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/service" className="text-slate-300 hover:text-yellow-400 transition-colors duration-200">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/products" className="text-slate-300 hover:text-yellow-400 transition-colors duration-200">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="text-slate-300 hover:text-yellow-400 transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-slate-300 hover:text-yellow-400 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <span className="text-slate-300 text-sm">
                  No37 Middle Road, Sabon Gari, Kano
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <a 
                  href="tel:+2347066017972" 
                  className="text-slate-300 hover:text-yellow-400 transition-colors duration-200 text-sm"
                >
                  +234 706 601 7972
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <a 
                  href="tel:+2348130731555" 
                  className="text-slate-300 hover:text-yellow-400 transition-colors duration-200 text-sm"
                >
                  +234 813 073 1555
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <a 
                  href="mailto:jossytechnicalworks@gmail.com" 
                  className="text-slate-300 hover:text-yellow-400 transition-colors duration-200 text-sm break-all"
                >
                  jossytechnicalworks@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <a
              href="https://www.facebook.com/profile.php?id=100063792680852"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 mb-6"
            >
              <Facebook className="w-5 h-5" />
              Follow us on Facebook
            </a>
            
            <div className="bg-slate-800 rounded-lg p-4">
              <p className="text-sm text-slate-300 mb-3">
                Need urgent assistance?
              </p>
              <a
                href="tel:+2347066017972"
                className="block w-full bg-yellow-600 hover:bg-yellow-700 text-center text-white font-semibold py-3 rounded-lg transition-colors duration-200"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>
              © {currentYear} Jossy Technical Work. All rights reserved.
            </p>
            <p>
              Managed by Shuaibu Ibrahim Muhammed
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;