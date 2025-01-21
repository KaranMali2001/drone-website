"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const featuredProducts = [
  {
    image: "/placeholder.svg?height=400&width=400",
    title: "DroneX Mini",
    description: "Compact drone perfect for beginners",
    price: "$499",
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    title: "DroneX Explorer",
    description: "Mid-range drone with advanced features",
    price: "$899",
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    title: "DroneX Pro Max",
    description: "Professional drone for cinematography",
    price: "$1,499",
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    title: "DroneX Agriculture",
    description: "Specialized drone for agricultural use",
    price: "$2,499",
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    title: "DroneX Surveyor",
    description: "High-precision mapping drone",
    price: "$3,499",
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    title: "DroneX Racing",
    description: "High-speed racing drone",
    price: "$799",
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-secondary">
          Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-secondary">
                  {product.title}
                </h3>
                <p className="text-text mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    {product.price}
                  </span>
                  <Button className="bg-primary hover-primary text-text">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
