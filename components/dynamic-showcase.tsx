"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const products = [
  {
    image: "/placeholder.svg?height=800&width=800",
    title: "DroneX Pro",
    description:
      "Experience unparalleled aerial photography with our flagship drone. The DroneX Pro combines professional-grade camera capabilities with advanced flight controls, making it the perfect choice for photographers and videographers who demand excellence.",
    specs: ["4K Camera", "45min Flight Time", "10km Range"],
  },
  {
    image: "/placeholder.svg?height=800&width=800",
    title: "DroneX Industrial",
    description:
      "Built for demanding industrial applications, the DroneX Industrial features thermal imaging and extended flight time. Perfect for infrastructure inspection, surveying, and industrial monitoring tasks.",
    specs: ["Thermal Imaging", "60min Flight Time", "15km Range"],
  },
  {
    image: "/placeholder.svg?height=800&width=800",
    title: "DroneX Lite",
    description:
      "Compact yet powerful, the DroneX Lite is designed for enthusiasts and beginners alike. With its portable design and intuitive controls, capture amazing aerial shots wherever your adventures take you.",
    specs: ["1080p Camera", "30min Flight Time", "5km Range"],
  },
];

export function DynamicShowcase() {
  const [activeProduct, setActiveProduct] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-24 text-black">
      <div className="container mx-auto h-full px-4">
        <div className="flex flex-col items-center justify-center ">
          {products.map((product, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 flex flex-col md:flex-row items-center justify-center gap-12 text- ${
                index === activeProduct
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
            >
              <div className="relative h-[400px] w-full md:w-1/2 max-w-xl">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-contain bg-purple-600"
                  priority
                />
              </div>
              <div className="w-full md:w-1/2 max-w-xl text-center md:text-left">
                <div className="text-text-light">
                  <h2 className="text-5xl font-bold mb-6">{product.title}</h2>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {product.specs.map((spec, i) => (
                      <div
                        key={i}
                        className="p-4 bg-accent rounded-lg text-center text-text-light"
                      >
                        {spec}
                      </div>
                    ))}
                  </div>
                  <Button
                    size="lg"
                    className="bg-primary hover-primary text-text"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
