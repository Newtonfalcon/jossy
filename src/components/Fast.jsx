import React from "react";
import { Clock, Zap, CheckCircle, Truck } from "lucide-react";

function SpeedSection() {
  const features = [
    {
      icon: Clock,
      title: "Same-Day Service",
      description: "Most repairs completed within 24 hours of your call"
    },
    {
      icon: Zap,
      title: "Quick Response",
      description: "We respond to all inquiries within 30 minutes"
    },
    {
      icon: Truck,
      title: "Mobile Service",
      description: "Fully equipped vans ready to serve you anywhere in Kano"
    },
    {
      icon: CheckCircle,
      title: "No Delays",
      description: "On-time arrivals and efficient work, guaranteed"
    }
  ];

  return (
    <section className="font-body py-12 px-4 bg-yellow-50 md:py-20 md:px-8 lg:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Zap className="w-10 h-10 text-yellow-600 animate-pulse" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">
              Fast & Reliable Service
            </h2>
          </div>
          <p className="text-slate-700 text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
            When your HVAC system breaks down, every minute counts. That's why we pride ourselves on lightning-fast response times and efficient repairs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-2xl p-8 md:p-12 text-white shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">7+</div>
              <div className="text-yellow-100 text-sm md:text-base">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">24/7</div>
              <div className="text-yellow-100 text-sm md:text-base">Emergency Service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">100%</div>
              <div className="text-yellow-100 text-sm md:text-base">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">&lt;24h</div>
              <div className="text-yellow-100 text-sm md:text-base">Average Response</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpeedSection;