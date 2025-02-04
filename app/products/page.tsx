import { products } from "@/category";
import Image from "next/image";
export default function Page() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
          <div className="relative h-40 mb-2">
            <Image
              src={
                product.image ||
                `/placeholder.svg?height=200&width=200&text=${encodeURIComponent(
                  product.name
                )}`
              }
              alt={product.name}
              fill
              className="object-cover rounded-md"
            />
          </div>
          <h3 className="text-center font-semibold">{product.name}</h3>
        </div>
      ))}
    </div>
  );
}
