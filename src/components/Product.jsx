import React from "react";
import { MessageCircle } from "lucide-react";

function Products() {
  const products = [
    {
      name: "Air Conditioners",
      description: "Energy-efficient cooling systems for homes and offices",
      image: "/acc.png", // Replace with your actual image path
      alt: "Air Conditioner"
    },
    {
      name: "Gas Cookers",
      description: "Durable and reliable gas cookers for your kitchen",
      image: "/gas.png", // Replace with your actual image path
      alt: "Gas Cooker"
    },
    {
      name: "Refrigerators",
      description: "Premium fridges to keep your food fresh",
      image: "/fridge.png", // Replace with your actual image path
      alt: "Refrigerator"
    },
    {
      name: "Fans",
      description: "High-quality fans for optimal air circulation",
      image: "/img2.png", // Replace with your actual image path
      alt: "Fan"
    }
  ];

  return (
    <section className="font-body py-12 px-4 bg-white md:py-20 md:px-8 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Our Products
          </h2>
          <p className="text-slate-600 text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
            Quality appliances from trusted brands at competitive prices
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Image Container */}
              <div className="bg-white h-48 md:h-56 flex items-center justify-center p-6 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-slate-600 text-sm md:text-base mb-4">
                  {product.description}
                </p>
                <a 
                  href={`https://wa.me/2347066017972?text=Hi, I'm interested in ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat for More Details
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-slate-700 text-base md:text-lg mb-4">
            All products come with warranty and professional installation
          </p>
          <a 
            href="tel:+2347066017972"
            className="inline-block bg-slate-800 hover:bg-slate-900 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Contact Us for Pricing
          </a>
        </div>
      </div>
    </section>
  );
}

export default Products;