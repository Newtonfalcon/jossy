import React, { useState } from "react";
import { MessageCircle, Star, Shield, Award, Filter, Search } from "lucide-react";

function Product() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "cooling", name: "Cooling Systems" },
    { id: "kitchen", name: "Kitchen Appliances" },
    { id: "refrigeration", name: "Refrigeration" },
    { id: "ventilation", name: "Ventilation" }
  ];

  const products = [
    // Air Conditioners
    {
      id: 1,
      name: "Split AC Units",
      category: "cooling",
      description: "Our split air conditioning systems deliver powerful, whisper-quiet cooling for any space. These modern units feature advanced inverter technology that adapts to your room's temperature, ensuring consistent comfort while reducing energy consumption. The indoor unit's sleek design complements any décor, while the outdoor compressor operates efficiently without disturbing your peace. Perfect for bedrooms, living rooms, and office spaces, these ACs come with intelligent temperature sensors, auto-restart functions, and comprehensive air filtration systems that remove dust, allergens, and odors. Installation includes professional mounting, electrical connection, and a thorough performance check.",
      image: "/acc.png",
      features: ["Energy Star Rated", "Remote Control", "Sleep Mode", "Auto Clean", "Turbo Cooling", "Dehumidifier"],
      brands: ["LG", "Samsung", "Hisense", "Panasonic", "Midea"]
    },
    {
      id: 2,
      name: "Window AC Units",
      category: "cooling",
      description: "Compact yet powerful, our window air conditioners are engineered for maximum cooling efficiency in a space-saving design. These units are ideal for rooms where split AC installation isn't feasible. They feature multiple cooling speeds, adjustable louvers for directed airflow, and washable filters for easy maintenance. The robust construction ensures years of reliable operation, while the energy-efficient compressor keeps your electricity bills manageable. These window units cool quickly, maintain consistent temperatures, and operate with minimal noise. Perfect for apartments, small offices, and rental properties where permanent installation may not be an option.",
      image: "/air.png",
      features: ["Quick Installation", "Energy Saver Mode", "3 Cooling Speeds", "Washable Filter", "Auto Restart", "24-Hour Timer"],
      brands: ["LG", "Midea", "Haier", "Hisense"]
    },
    {
      id: 3,
      name: "Portable AC Units",
      category: "cooling",
      description: "Experience cooling flexibility with our portable air conditioning units that move wherever you need them. These versatile systems are perfect for renters, temporary spaces, or rooms that need supplemental cooling. Built-in wheels and handles make relocation effortless, while the easy-window kit installation requires no permanent modifications. Beyond cooling, these units offer dehumidification to combat moisture and improve air quality. The self-evaporating system minimizes water drainage maintenance, and the programmable timer lets you schedule operation for maximum efficiency. Ideal for home offices, server rooms, workshops, or anywhere you need cooling on demand.",
      image: "/acc.png",
      features: ["Wheels for Mobility", "Easy Setup", "Dehumidifier Function", "Timer", "Self-Evaporation", "Window Kit Included"],
      brands: ["Midea", "Hisense", "Haier"]
    },
    {
      id: 4,
      name: "Inverter AC Systems",
      category: "cooling",
      description: "Step into the future of climate control with our premium inverter air conditioners. Unlike conventional ACs that constantly switch on and off, inverter technology continuously adjusts compressor speed to maintain your desired temperature with remarkable precision. This results in up to 60% energy savings, significantly quieter operation, and longer equipment lifespan. Many models feature smart connectivity, allowing you to control your AC remotely via smartphone apps. Advanced air purification systems with multi-stage filtration remove PM 2.5 particles, bacteria, and viruses. The intelligent sleep mode gradually adjusts temperature throughout the night for optimal comfort and energy efficiency.",
      image: "/img2.png",
      features: ["60% Energy Saving", "Smart WiFi Control", "Ultra Quiet Operation", "Air Purification", "Self-Diagnosis", "Turbo Mode"],
      brands: ["Samsung", "LG", "Daikin", "Panasonic"]
    },
    
    // Gas Cookers
    {
      id: 5,
      name: "4-Burner Gas Cookers with Oven",
      category: "kitchen",
      description: "Transform your cooking experience with our premium 4-burner gas cookers featuring spacious ovens. These workhorses of the kitchen combine professional-grade burners with reliable oven performance, making them perfect for family cooking and entertaining. The burners provide precise heat control from gentle simmering to high-heat searing, while the large oven accommodates multiple dishes simultaneously. Built with heavy-duty materials including rust-resistant enamel coating and durable cast-iron pan supports, these cookers withstand daily use for years. Safety features include flame failure devices that automatically cut gas supply if flames extinguish. The oven includes adjustable racks, interior lighting, and excellent heat distribution for consistent baking and roasting results.",
      image: "/gas.png",
      features: ["4 Burners", "Large Oven Capacity", "Auto Ignition", "Safety Valve", "Enamel Coating", "Grill Function"],
      brands: ["Maxi", "Ignis", "Scanfrost", "Nexus"]
    },
    {
      id: 6,
      name: "6-Burner Professional Gas Cookers",
      category: "kitchen",
      description: "Designed for serious cooking enthusiasts and commercial kitchens, our 6-burner gas cookers deliver professional-level performance and capacity. With six independently controlled burners of varying heat outputs, you can simultaneously prepare multiple dishes at different temperatures. The commercial-grade construction features heavy-duty cast iron pan supports that accommodate large pots and pans with stability. Double ovens provide incredible versatility – bake in one while grilling in the other. These cookers excel in large family settings, catering operations, restaurants, and anywhere high-volume cooking is required. The robust build quality ensures years of reliable service even under demanding conditions.",
      image: "/gas.png",
      features: ["6 Burners", "Double Oven", "Heavy Duty Construction", "Cast Iron Supports", "High BTU Output", "Industrial Grade"],
      brands: ["Maxi", "Nexus", "Scanfrost"]
    },
    {
      id: 7,
      name: "Standing Gas Cookers",
      category: "kitchen",
      description: "Elevate your kitchen with our elegant freestanding gas cookers that combine style with functionality. These attractive units serve as kitchen centerpieces while delivering exceptional cooking performance. The sleek exterior design, available in various finishes, complements modern kitchen aesthetics. Beyond good looks, these cookers offer practical features like easy-to-clean surfaces, removable parts for maintenance, and convenient storage drawers for cookware. The oven includes both baking and grilling functions with precise temperature controls. Sturdy adjustable legs ensure perfect leveling on any floor surface. Whether you're preparing daily meals or hosting dinner parties, these standing cookers provide the capacity and reliability you need.",
      image: "/gas.png",
      features: ["Stylish Design", "Easy to Clean", "Grill Function", "Storage Drawer", "Multiple Finishes", "Adjustable Legs"],
      brands: ["Scanfrost", "Maxi", "Restpoint", "Ignis"]
    },
    {
      id: 8,
      name: "Table Top Gas Cookers",
      category: "kitchen",
      description: "Maximize your kitchen space with our compact table-top gas cookers that deliver full cooking capability in a minimal footprint. These portable units are perfect for small kitchens, studio apartments, outdoor cooking, or as supplementary cooking surfaces. Despite their compact size, they feature powerful burners that heat quickly and efficiently. The tempered glass top adds modern aesthetics while being easy to clean and maintain. Available in 2, 3, and 4-burner configurations, you can choose the capacity that matches your needs. The lightweight design makes them ideal for temporary setups, camping trips, or outdoor events. Safety features include flame failure protection and stable rubber feet for secure placement.",
      image: "/gas.png",
      features: ["Space Saving Design", "2-4 Burners Available", "Portable", "Tempered Glass Top", "Auto Ignition", "Flame Failure Safety"],
      brands: ["Maxi", "Century", "Scanfrost"]
    },

    // Refrigerators
    {
      id: 9,
      name: "Double Door Refrigerators",
      category: "refrigeration",
      description: "Store your groceries in style with our spacious double-door refrigerators that combine generous capacity with energy-efficient cooling technology. The dual-compartment design keeps fresh foods and frozen items at optimal temperatures independently, preventing flavor transfer and maintaining food quality longer. Advanced cooling systems ensure uniform temperature distribution throughout both compartments, eliminating warm spots. LED lighting illuminates every corner, making it easy to find items even in low light. Adjustable shelves and door bins accommodate items of all sizes, from tall bottles to large platters. The frost-free operation eliminates manual defrosting, while smart inverter compressors adjust cooling power based on contents and usage patterns, saving energy without compromising performance.",
      image: "/fridge.png",
      features: ["Large Capacity", "Fast Cooling Technology", "LED Lighting", "Adjustable Shelves", "Frost-Free", "Energy Efficient"],
      brands: ["LG", "Samsung", "Hisense", "Haier", "Midea"]
    },
    {
      id: 10,
      name: "Single Door Refrigerators",
      category: "refrigeration",
      description: "Perfect for apartments, small families, or as a secondary refrigerator, our compact single-door models deliver reliable cooling in a space-efficient package. Don't let the smaller size fool you – these refrigerators are engineered for maximum storage optimization with clever shelf arrangements and door storage solutions. The dedicated ice box keeps frozen foods at proper temperatures, while the main compartment maintains ideal freshness for vegetables, fruits, meats, and beverages. The reversible door design allows you to configure the refrigerator to match your kitchen layout. Energy-efficient operation keeps running costs low, and the quiet compressor won't disturb your living space. Ideal for students, young professionals, or anyone who values efficiency without sacrificing quality.",
      image: "/fridge.png",
      features: ["Compact Design", "Energy Efficient", "Ice Box", "Door Storage", "Reversible Door", "Quiet Operation"],
      brands: ["Hisense", "Midea", "Nexus", "Haier"]
    },
    {
      id: 11,
      name: "Side-by-Side Refrigerators",
      category: "refrigeration",
      description: "Experience luxury and convenience with our premium side-by-side refrigerators that bring modern technology to your kitchen. These statement pieces offer massive storage capacity divided between fresh food and freezer sections accessible through French doors. The built-in ice maker and water dispenser provide filtered, chilled refreshments at the touch of a button. Digital temperature controls with independent climate zones ensure optimal preservation for different food types. Multi-airflow systems maintain consistent temperatures throughout, while advanced filtration removes odors and bacteria. Premium models include smart features like door-open alarms, vacation mode, and connectivity to home automation systems. The spacious interior accommodates large platters, bulk purchases, and party preparations with ease.",
      image: "/fridge.png",
      features: ["Ice & Water Dispenser", "Digital Display", "Multi Air Flow", "Wine Rack", "LED Lighting", "Smart Connectivity"],
      brands: ["LG", "Samsung", "Hisense", "Haier"]
    },
    {
      id: 12,
      name: "Commercial Deep Freezers",
      category: "refrigeration",
      description: "Preserve large quantities of frozen goods with our heavy-duty commercial chest freezers built for reliability and efficiency. These workhorses are essential for businesses, large families, bulk buyers, and anyone needing substantial frozen storage. The top-opening design with sliding glass lids (on display models) provides easy access while minimizing cold air loss. Powerful compressors achieve and maintain ultra-low temperatures, ensuring long-term food preservation and preventing freezer burn. The deep interior accommodates bulky items, while removable baskets help organize smaller products. Energy-efficient insulation reduces operating costs despite continuous operation. Security locks protect valuable inventory. Perfect for restaurants, hotels, supermarkets, ice cream vendors, and home food preservation enthusiasts.",
      image: "/fridge.png",
      features: ["Large Capacity", "Fast Freeze Function", "Low Energy Consumption", "Lock & Key", "Sliding Glass Lid", "Heavy Duty Build"],
      brands: ["Hisense", "Scanfrost", "Midea", "Haier"]
    },

    // Fans
    {
      id: 13,
      name: "Standing Fans",
      category: "ventilation",
      description: "Cool any room efficiently with our powerful standing fans engineered for optimal air circulation and durability. These versatile fans feature height-adjustable poles that accommodate different ceiling heights and user preferences, making them suitable for bedrooms, living rooms, offices, and workshops. The wide oscillation angle ensures even air distribution throughout the space, while three-speed settings let you customize airflow from gentle breeze to powerful cooling. Built with safety-conscious design including protective grilles and stable weighted bases that prevent tipping, these fans operate reliably for years. The quiet motor won't disturb conversations, work, or sleep. Easy-to-clean blades and grilles maintain hygiene and performance. Available in various sizes to match your space requirements.",
      image: "/img1.png",
      features: ["3 Speed Settings", "Wide Oscillation", "Height Adjustable", "Stable Base", "Quiet Motor", "Safety Grille"],
      brands: ["Binatone", "Lontor", "ORL", "Century"]
    },
    {
      id: 14,
      name: "Wall Mounted Fans",
      category: "ventilation",
      description: "Save valuable floor space while enjoying powerful cooling with our wall-mounted fans designed for homes, offices, and commercial spaces. These space-efficient solutions mount securely to walls, keeping floors clear for movement and furniture. Remote control operation adds convenience – adjust speed, oscillation, and timer settings from across the room. The pull-cord mechanism provides backup manual control. Wide oscillation coverage ensures air reaches every corner of the room. Modern models include timer functions for scheduled operation and automatic shut-off, perfect for bedrooms where you want cooling while falling asleep. The durable construction withstands continuous commercial use in shops, restaurants, and waiting areas. Easy installation includes all necessary mounting hardware.",
      image: "/img1.png",
      features: ["Remote Control", "Timer Function", "3 Speeds", "Wide Oscillation", "Pull Cord Backup", "Commercial Grade"],
      brands: ["Binatone", "ORL", "Century", "Lontor"]
    },
    {
      id: 15,
      name: "Ceiling Fans with LED Lights",
      category: "ventilation",
      description: "Combine efficient cooling with elegant lighting using our modern ceiling fans that serve dual purposes while adding style to any room. These sophisticated fixtures feature energy-efficient LED lighting integrated into attractive designs that complement contemporary and traditional interiors. The fan function operates independently from the light, giving you complete control over your comfort and ambiance. Reverse function allows you to switch blade rotation direction – downdraft in summer for cooling, updraft in winter to circulate warm air trapped near ceilings. Remote controls manage all functions conveniently. Multiple speed settings deliver customized airflow, while whisper-quiet motors ensure peaceful operation. Available in various sizes to match room dimensions, with finishes including wood grain, metallic, and modern white.",
      image: "/img1.png",
      features: ["Integrated LED Light", "Remote Control", "Reverse Function", "Energy Saving", "Multiple Speeds", "Designer Styles"],
      brands: ["Century", "Lontor", "ORL"]
    },
    {
      id: 16,
      name: "Portable Table Fans",
      category: "ventilation",
      description: "Experience personal cooling anywhere with our compact table fans that combine portability with surprising power. These small but mighty fans are perfect for desks, nightstands, kitchen counters, or anywhere you need focused airflow. Rechargeable models provide cord-free operation for outdoor use, camping, or emergency backup during power outages. USB-powered versions connect to laptops, power banks, or any USB port, making them ideal for office workers and students. Despite compact dimensions, the efficient blade design and powerful motors generate strong airflow. Adjustable tilt angles direct air exactly where you need it. The lightweight construction makes them easy to move between rooms or pack for travel. Silent operation won't disturb work or study sessions.",
      image: "/img1.png",
      features: ["Compact Size", "Rechargeable Options", "USB Powered", "Portable", "Adjustable Angle", "Ultra Quiet"],
      brands: ["Lontor", "ORL", "Binatone"]
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white mt-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white py-16 px-4 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our Products
          </h1>
          <p className="text-lg md:text-xl text-yellow-100 max-w-3xl mx-auto">
            Quality appliances from trusted brands at competitive prices. Expert installation and warranty included.
          </p>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center justify-center gap-3">
              <Shield className="w-8 h-8 text-yellow-600" />
              <div className="text-left">
                <div className="font-semibold text-slate-800">Warranty</div>
                <div className="text-sm text-slate-600">All Products</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Award className="w-8 h-8 text-yellow-600" />
              <div className="text-left">
                <div className="font-semibold text-slate-800">Quality</div>
                <div className="text-sm text-slate-600">Guaranteed</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Star className="w-8 h-8 text-yellow-600" />
              <div className="text-left">
                <div className="font-semibold text-slate-800">Top Brands</div>
                <div className="text-sm text-slate-600">Only</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MessageCircle className="w-8 h-8 text-yellow-600" />
              <div className="text-left">
                <div className="font-semibold text-slate-800">Expert</div>
                <div className="text-sm text-slate-600">Installation</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 md:px-8 md:py-16 lg:py-20">
        {/* Filter Section */}
        <div className="mb-12">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl focus:border-yellow-500 focus:outline-none text-slate-700"
            />
          </div>

          {/* Category Filters */}
          <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-slate-600 flex-shrink-0" />
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-yellow-600 text-white shadow-lg"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <p className="text-slate-600">
            Showing <span className="font-semibold text-slate-800">{filteredProducts.length}</span> products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="relative bg-slate-50 h-56 flex items-center justify-center p-6 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-yellow-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Brands */}
                <div className="mb-4 pb-4 border-b border-slate-100">
                  <p className="text-xs text-slate-500 mb-2">Available Brands:</p>
                  <div className="flex flex-wrap gap-1">
                    {product.brands.map((brand, idx) => (
                      <span key={idx} className="text-xs font-semibold text-slate-700">
                        {brand}{idx < product.brands.length - 1 ? " •" : ""}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Availability Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-2 rounded-lg text-sm font-semibold">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Available Now
                  </span>
                </div>

                {/* CTA */}
                <a
                  href={`https://wa.me/2347066017972?text=Hi, I'm interested in ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white text-center font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat for Details
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-slate-600 mb-4">No products found</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="text-yellow-600 font-semibold hover:text-yellow-700"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-slate-900 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Our experts are ready to help you find the perfect appliance for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+2347066017972"
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
            >
              Call: +234 706 601 7972
            </a>
            <a
              href="https://wa.me/2347066017972?text=Hi, I need help choosing a product"
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

export default Product;