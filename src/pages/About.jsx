import React from "react";
import { Wrench, Fan, Snowflake, Flame } from "lucide-react";

export default function About() {
  return (
    <section className=" mt-5 min-h-screen bg-[#fffdf5] text-black font-body px-6 md:px-16 py-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-yellow-700 mb-4">
          About <span className="text-black">Jossy Technical Work</span>
        </h1>
        <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto">
          Established in 2018, Jossy Technical Work specializes in the sales,
          installation, and servicing of all kinds of cooling, heating, and home
          electrical systems. We deliver comfort and reliability for homes,
          offices, and industries across Nigeria.
        </p>
      </div>

      {/* Company Overview */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20">
        <img
          src="/icon.png"
          alt="Jossy Technical Work team"
          className="w-full md:w-1/2 rounded-2xl shadow-md"
        />
        <div className="md:w-1/2 text-gray-800 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-700">
            Who We Are
          </h2>
          <p className="leading-relaxed">
            We are a team of certified technicians and engineers dedicated to
            quality service and customer satisfaction. Whether it’s installing a
            new air conditioner or repairing a refrigerator, our focus is on
            performance, safety, and durability.
          </p>
          <p className="leading-relaxed">
            With over 7 years of experience, Jossy Technical Work has become a
            trusted name in electrical and appliance solutions across Kano and
            beyond.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-yellow-700 mb-10">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <Snowflake size={40} className="mx-auto text-yellow-600 mb-3" />
            <h3 className="font-bold text-lg text-black">Cooling Systems</h3>
            <p className="text-sm text-gray-700 mt-2">
              Installation and repair of air conditioners, fans, and chillers.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <Flame size={40} className="mx-auto text-yellow-600 mb-3" />
            <h3 className="font-bold text-lg text-black">Heating Equipment</h3>
            <p className="text-sm text-gray-700 mt-2">
              Gas cookers, heaters, and electric kettles — durable and efficient.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <Fan size={40} className="mx-auto text-yellow-600 mb-3" />
            <h3 className="font-bold text-lg text-black">Appliance Sales</h3>
            <p className="text-sm text-gray-700 mt-2">
              High-quality home appliances at affordable prices.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <Wrench size={40} className="mx-auto text-yellow-600 mb-3" />
            <h3 className="font-bold text-lg text-black">Maintenance & Support</h3>
            <p className="text-sm text-gray-700 mt-2">
              Reliable technical support and after-sales service you can trust.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mt-20 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-700 mb-6">
          Our Mission
        </h2>
        <p className="text-gray-800 max-w-3xl mx-auto leading-relaxed">
          To provide top-quality technical solutions that improve comfort,
          safety, and efficiency — while building long-lasting relationships
          with our customers through integrity, excellence, and innovation.
        </p>
      </div>
    </section>
  );
}
