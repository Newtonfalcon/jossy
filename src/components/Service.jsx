import React from "react";
import { Wind, Wrench, Snowflake, Thermometer, Shield, Settings } from "lucide-react";

function Service() {
  const services = [
    {
      icon: Snowflake,
      title: "AC Installation & Repair",
      description: "Professional air conditioning installation, maintenance, and repair services for homes and businesses.",
      color: "bg-blue-500"
    },
    {
      icon: Thermometer,
      title: "Heating Systems",
      description: "Expert heating solutions to keep your space warm and comfortable all year round.",
      color: "bg-orange-500"
    },
    {
      icon: Wind,
      title: "Ventilation Systems",
      description: "Quality ventilation installation and maintenance for optimal air circulation and quality.",
      color: "bg-cyan-500"
    },
    {
      icon: Settings,
      title: "Refrigeration Services",
      description: "Commercial and residential refrigeration installation, repair, and maintenance services.",
      color: "bg-purple-500"
    },
    {
      icon: Wrench,
      title: "Maintenance Contracts",
      description: "Affordable maintenance packages to keep your HVAC systems running efficiently.",
      color: "bg-emerald-500"
    },
    {
      icon: Shield,
      title: "Emergency Repairs",
      description: "24/7 emergency repair services for urgent HVAC issues. We're always here when you need us.",
      color: "bg-red-500"
    }
  ];

  return (
    <section className="font-body py-12 px-4 bg-gradient-to-b from-white to-slate-50 md:py-20 md:px-8 lg:py-24">
      <hr className="text-zinc-400 pb-5"/>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Our Services
          </h2>
          <p className="text-slate-600 text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
            Expert Ventillation solutions for homes and businesses in Kano. Quality service you can trust.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Icon */}
                <div className={`${service.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>

                {/* CTA Link */}
                <button className="mt-4 text-yellow-600 font-semibold text-sm hover:text-yellow-700 transition-colors duration-200 flex items-center gap-1 group-hover:gap-2">
                  Learn More
                  <span className="transition-all duration-200">→</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <a 
            href="tel:+2347066017972"
            className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Call Us: +234 706 601 7972
          </a>
        </div>
      </div>
    </section>
  );
}

export default Service;