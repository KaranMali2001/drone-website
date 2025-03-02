"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { categories } from "@/category";
import Link from "next/link";

const designOptions = ["Grid", "Masonry", "Carousel"];

export default function ProductPage({ params }: { params: { id: string } }) {
  const category = categories
    .flatMap((cat) => cat.subcategories)
    .flatMap((subcat) => subcat.categoryName)
    .find((cat) => cat.id === params.id);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-semibold mb-8 text-center">
        {category.title}
      </h1>

      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {category.products.map((product, index) => (
              <Link href={`/products/${params.id}/${product.id}`}>
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-40 mb-2">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <h4 className="text-lg font-semibold">{product.name}</h4>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
