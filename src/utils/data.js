
import { Home, Box, Wrench, Info, Mail } from "lucide-react";

export const navLinks = [
  { id: "home", label: "Home", href: "/", Icon: Home },
  { id: "products", label: "Products", href: "/products", Icon: Box },
  { id: "services", label: "Services", href: "/services", Icon: Wrench },
  { id: "about", label: "About Us", href: "/about", Icon: Info },
  { id: "contact", label: "Contact Us", href: "/contact", Icon: Mail },
];


// src/data/carouselData.js

export const carouselData = [
  {
    id: 1,
    image: "/air.png",
    ill:"/ill2.png",
    heading: "Air Conditioners & Cooling",
    text: "Sales and installation of cooling system.",
  },
  {
    id: 2,
    image: "/fridge.png",
     ill:"/ill1.png",
    heading: "Refrigerators & Freezers",
    text: "Energy-efficient fridges and deep freezers.",
  },
  {
    id: 3,
    image: "/img1.png",
     ill:"/ill3.png",
    heading: "Fans and Ventilation",
    text: "fans with expert maintenance service.",
  },
  {
    id: 4,
    image: "/gas.png",
     ill:"/ill4.png",
    heading: "Kitchen Appliances",
    text: "Gas cookers, kettles, and heaters durable, and affordable.",
  },
];
