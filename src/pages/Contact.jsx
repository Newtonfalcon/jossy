import React from "react";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <section className=" mt-10 bg-[#fffdf5] text-gray-900 min-h-screen flex flex-col items-center justify-center py-12 px-6 md:px-20 font-body">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section — About Contact */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-4">
            Contact <span className="text-black">Jossy Technical Work</span>
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We specialize in selling, installing, and servicing all types of
            cooling and heating systems — including air conditioners,
            refrigerators, fans, gas cookers, and more.  
            <br />
            Reach us anytime using the contact information below.
          </p>

          <div className="space-y-4 text-gray-800">
            <div className="flex items-center gap-3">
              <MapPin className="text-yellow-600" />
              <p>No. 37 Middle Road, Sabon Gari, Kano</p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-yellow-600" />
              <p>+234 706 601 7972</p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-yellow-600" />
              <p>+234 813 073 1555 (Shuaibu Ibrahim Muhammed)</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-yellow-600" />
              <a
                href="mailto:jossytechnicalworks@gmail.com"
                className="text-gray-800 hover:text-yellow-700"
              >
                jossytechnicalworks@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Facebook className="text-yellow-600" />
              <a
                href="https://www.facebook.com/profile.php?id=100063792680852"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-yellow-700"
              >
                Facebook Page
              </a>
            </div>
          </div>
        </div>

        {/* Right Section — Map or Logo */}
        <div className="flex flex-col items-center justify-center">
          <img
            src="/icon.png"
            alt="Jossy Technical Work Logo"
            className="w-52 md:w-64 mb-4"
          />
          <p className="text-center text-gray-700 max-w-sm">
            Providing quality technical service since{" "}
            <span className="font-semibold text-yellow-700">2018</span>.  
            Trusted by homes and businesses across Nigeria.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-12 text-sm text-gray-600 border-t border-yellow-200 pt-6 w-full">
        © {new Date().getFullYear()} Jossy Technical Work. All rights reserved.
      </div>
    </section>
  );
}
