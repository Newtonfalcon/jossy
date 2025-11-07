import React, { useState } from "react";
import { Wind, Wrench, Snowflake, Thermometer, Shield, Settings, MessageCircle, Clock, CheckCircle, Phone } from "lucide-react";

function Service() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      icon: Snowflake,
      title: "Air Conditioning Installation & Repair",
      shortDesc: "Professional AC installation, maintenance, and repair services for homes and businesses.",
      fullDesc: "Our air conditioning services cover everything from initial consultation and system sizing to professional installation and ongoing maintenance. We work with all major AC brands and types including split systems, window units, portable ACs, and central air systems. Our certified technicians assess your space to recommend the most efficient cooling solution for your needs and budget. Installation includes proper mounting, electrical connections, refrigerant charging, and thorough testing to ensure optimal performance. We also offer preventive maintenance contracts that include regular filter cleaning, coil inspection, refrigerant level checks, and performance optimization. When your AC breaks down, our rapid response team diagnoses and repairs issues quickly, whether it's compressor problems, refrigerant leaks, electrical faults, or thermostat issues. We carry common parts on our service vehicles for same-day repairs whenever possible.",
      color: "bg-blue-500",
      benefits: [
        "Expert system sizing and recommendations",
        "Professional installation with warranty",
        "Same-day repair service available",
        "Preventive maintenance plans",
        "All major brands serviced",
        "Emergency 24/7 support"
      ]
    },
    {
      id: 2,
      icon: Thermometer,
      title: "Heating System Solutions",
      shortDesc: "Expert heating solutions to keep your space warm and comfortable all year round.",
      fullDesc: "Stay warm during cold seasons with our comprehensive heating system services. We install, repair, and maintain various heating solutions including gas heaters, electric heaters, heat pumps, and radiant heating systems. Our heating specialists perform detailed heat load calculations to ensure your system is properly sized for efficient operation and comfort. We handle complete installations from ductwork (if needed) to thermostat setup and system commissioning. Regular maintenance services keep your heating system running safely and efficiently, including burner cleaning, pilot light inspection, thermostat calibration, and safety system checks. When heating emergencies occur, our technicians respond quickly to restore warmth to your home or business. We also offer energy efficiency consultations to help reduce heating costs while maintaining comfort.",
      color: "bg-orange-500",
      benefits: [
        "All heating system types serviced",
        "Energy efficiency consultations",
        "Safety inspections included",
        "Fast emergency response",
        "Professional installation",
        "Seasonal maintenance packages"
      ]
    },
    {
      id: 3,
      icon: Wind,
      title: "Ventilation System Services",
      shortDesc: "Quality ventilation installation and maintenance for optimal air circulation and quality.",
      fullDesc: "Proper ventilation is crucial for maintaining healthy indoor air quality and comfort. Our ventilation services include design, installation, and maintenance of exhaust fans, ceiling fans, whole-house ventilation systems, and commercial ventilation solutions. We assess your space to determine optimal airflow requirements and recommend appropriate ventilation strategies. Our installations ensure proper air exchange rates to remove moisture, odors, pollutants, and excess heat while bringing in fresh outdoor air. We service bathroom exhaust fans, kitchen range hoods, attic ventilation systems, and industrial exhaust systems. Regular maintenance includes cleaning fan blades and housings, motor lubrication, belt inspection and replacement, and duct cleaning to maintain efficient operation. For commercial clients, we provide ventilation system balancing to ensure proper air distribution throughout the building.",
      color: "bg-cyan-500",
      benefits: [
        "Improved indoor air quality",
        "Moisture and odor control",
        "Energy-efficient solutions",
        "Commercial ventilation expertise",
        "Duct cleaning services",
        "System balancing and optimization"
      ]
    },
    {
      id: 4,
      icon: Settings,
      title: "Refrigeration Services",
      shortDesc: "Commercial and residential refrigeration installation, repair, and maintenance services.",
      fullDesc: "Keep your perishables fresh with our expert refrigeration services covering residential refrigerators, commercial coolers, freezers, and cold storage systems. We install new refrigeration equipment with proper leveling, electrical connection, and temperature calibration. Our technicians are trained to diagnose and repair common issues like inadequate cooling, ice buildup, water leaks, noisy operation, and compressor failures. We service all refrigerator types including top-freezer, bottom-freezer, side-by-side, French door, and commercial walk-in coolers. Regular maintenance prevents costly breakdowns and includes condenser coil cleaning, door seal inspection, temperature verification, and refrigerant system checks. For businesses, we offer priority service agreements to minimize downtime that could result in product loss. Our team works efficiently to restore cooling quickly, whether it's a home refrigerator or a commercial freezer unit.",
      color: "bg-purple-500",
      benefits: [
        "All refrigerator types serviced",
        "Commercial cold storage expertise",
        "Quick response to prevent food loss",
        "Preventive maintenance available",
        "Energy efficiency improvements",
        "Priority service for businesses"
      ]
    },
    {
      id: 5,
      icon: Wrench,
      title: "Maintenance Contracts",
      shortDesc: "Affordable maintenance packages to keep your HVAC systems running efficiently.",
      fullDesc: "Protect your investment and ensure reliable operation with our comprehensive maintenance contract programs. These affordable packages provide scheduled preventive maintenance visits throughout the year, keeping your HVAC equipment running at peak efficiency. Regular maintenance extends equipment lifespan, reduces energy costs, prevents unexpected breakdowns, and maintains manufacturer warranties. Our maintenance visits include thorough inspections, cleaning, lubrication, calibration, and performance testing of all system components. Contract customers receive priority scheduling, discounted repair rates, and emergency service priority. We maintain detailed service records for each piece of equipment, tracking performance trends and identifying potential issues before they become expensive problems. Maintenance contracts are available for residential homes, office buildings, retail spaces, restaurants, hotels, and industrial facilities. Choose from basic, standard, or premium packages based on your equipment and coverage needs.",
      color: "bg-emerald-500",
      benefits: [
        "Priority service scheduling",
        "Discounted repair rates",
        "Extended equipment lifespan",
        "Reduced energy costs",
        "Detailed service records",
        "Customizable packages available"
      ]
    },
    {
      id: 6,
      icon: Shield,
      title: "Emergency Repair Services",
      shortDesc: "24/7 emergency repair services for urgent HVAC issues. We're always here when you need us.",
      fullDesc: "HVAC emergencies don't wait for convenient times, and neither do we. Our 24/7 emergency repair service ensures you're never left in the cold or heat when critical systems fail. We understand that a broken air conditioner during peak summer, a failed heater in winter, or a malfunctioning commercial refrigerator can create serious problems quickly. Our emergency response team is always on call, ready to dispatch experienced technicians to your location promptly. We arrive equipped with diagnostic tools and common replacement parts to resolve many issues on the first visit. Emergency services cover all types of HVAC equipment failures including no cooling/heating, strange noises, refrigerant leaks, electrical problems, water leaks, and complete system failures. While we work quickly, we never compromise on quality or safety. After restoring your system, we provide recommendations for preventing future emergencies and offer follow-up support to ensure continued operation.",
      color: "bg-red-500",
      benefits: [
        "True 24/7 availability",
        "Rapid response times",
        "Experienced emergency technicians",
        "Well-stocked service vehicles",
        "Same-visit repairs when possible",
        "Follow-up support included"
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: "7+ Years Experience",
      desc: "Serving Kano since 2018 with reliable HVAC solutions"
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      desc: "Fully certified technicians and comprehensive insurance"
    },
    {
      icon: CheckCircle,
      title: "Quality Guaranteed",
      desc: "100% satisfaction guarantee on all our services"
    },
    {
      icon: Phone,
      title: "24/7 Support",
      desc: "Emergency services available anytime you need us"
    }
  ];

  return (
    <div className="mt-6 min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 px-4 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Comprehensive HVAC solutions for homes and businesses in Kano. From installation to emergency repairs, we've got you covered.
          </p>
          <a
            href="tel:+2347066017972"
            className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
          >
            Call Now: +234 706 601 7972
          </a>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-12 md:py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
            Why Choose Jossy Technical Work?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:px-8 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service) => {
            const IconComponent = service.icon;
            const isActive = activeService === service.id;
            
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
              >
                {/* Service Header */}
                <div className={`${service.color} p-6 text-white`}>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-white/90">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  {/* Description */}
                  <div className="mb-6">
                    <p className="text-slate-700 leading-relaxed">
                      {isActive ? service.fullDesc : `${service.fullDesc.substring(0, 200)}...`}
                    </p>
                    <button
                      onClick={() => setActiveService(isActive ? null : service.id)}
                      className="text-yellow-600 hover:text-yellow-700 font-semibold mt-2 text-sm"
                    >
                      {isActive ? "Show Less" : "Read More"} →
                    </button>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-3">What We Offer:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <a
                    href={`https://wa.me/2347066017972?text=Hi, I need help with ${service.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full ${service.color} hover:opacity-90 text-white text-center font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2`}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Request This Service
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Process */}
      <div className="bg-slate-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
            How We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Contact Us</h3>
              <p className="text-slate-600">Call or message us with your HVAC needs</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Assessment</h3>
              <p className="text-slate-600">We evaluate your system and provide solutions</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Service Delivery</h3>
              <p className="text-slate-600">Expert technicians complete the work efficiently</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Follow-Up</h3>
              <p className="text-slate-600">We ensure your complete satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-yellow-100 mb-8">
            Contact us today for professional HVAC services in Kano
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+2347066017972"
              className="bg-white text-yellow-600 hover:bg-slate-100 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              +234 706 601 7972
            </a>
            <a
              href="https://wa.me/2347066017972?text=Hi, I need HVAC services"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;