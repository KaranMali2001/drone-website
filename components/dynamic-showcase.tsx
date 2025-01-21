"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

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
  const [activeVariant] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const variants = [
    <CarouselVariant key="carousel" activeProduct={activeProduct} />,
  ];

  return (
    <section className="bg-white text-black ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          {/* <h2 className="text-3xl font-bold">Drone Showcase</h2> */}
          {/* <Button onClick={() => setActiveVariant((prev) => (prev + 1) % 3)}>
            Switch Variant
          </Button> */}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVariant}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {variants[activeVariant]}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
//@ts-expect-error //will fix this

function CarouselVariant({ activeProduct }) {
  return (
    <div className="relative h-[600px] overflow-hidden">
      {products.map((product, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-8`}
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: index === activeProduct ? 1 : 0,
            x: index === activeProduct ? 0 : 100,
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-[300px] w-full md:h-[400px] md:w-1/2">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-4xl font-bold mb-4">{product.title}</h3>
            <p className="text-lg mb-6">{product.description}</p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {product.specs.map((spec, i) => (
                <div
                  key={i}
                  className="p-2 bg-gray-100 rounded-lg text-center text-sm"
                >
                  {spec}
                </div>
              ))}
            </div>
            <Button>Learn More</Button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
