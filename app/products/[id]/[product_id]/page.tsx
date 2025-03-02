"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { categories } from "@/category";

export default function ProductPage({
  params,
}: {
  params: { product_id: string };
}) {
  const product = categories
    .flatMap((cat) => cat.subcategories)
    .flatMap((subcat) => subcat.categoryName)
    .flatMap((cat) => cat.products)
    .find((prod) => prod.id === params.product_id);

  const [currentImage, setCurrentImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!product) {
    return <div>Product not found</div>;
  }

  // For this example, we'll use multiple images. In a real scenario, you'd have these in your product data.
  const images = [product.image, "/placeholder.svg", "/placeholder.svg"];

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square"
            >
              <Image
                src={images[currentImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
              <button
                className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md"
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <ZoomIn size={24} />
              </button>
            </motion.div>
          </AnimatePresence>
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            onClick={prevImage}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            onClick={nextImage}
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {product.name}
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {product.description}
          </motion.p>
          <motion.div
            className="text-3xl font-semibold text-green-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {product.price}
          </motion.div>
          <motion.button
            className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-green-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
      {isZoomed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setIsZoomed(false)}
        >
          <Image
            src={images[currentImage] || "/placeholder.svg"}
            alt={product.name}
            width={1200}
            height={1200}
            className="max-w-full max-h-full object-contain"
          />
        </motion.div>
      )}
    </div>
  );
}
