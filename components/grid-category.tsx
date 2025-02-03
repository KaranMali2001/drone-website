import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { categories } from "@/category";

export default function CardsDesign() {
  return (
    <div className="container mx-auto py-12">
      {categories.map((category) => (
        <div key={category.name} className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            {category.name}
          </h2>
          {category.subcategories.map((subcategory) => (
            <div key={subcategory.name} className="mb-12">
              <h3 className="text-2xl font-medium mb-6 text-center">
                {subcategory.name}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {subcategory.products.map((product) => (
                  <Card key={product.title} className="flex flex-col">
                    <CardHeader className="p-0">
                      <div className="relative h-48 w-full">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.title}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow p-4">
                      <CardTitle className="text-lg mb-2">
                        {product.title}
                      </CardTitle>
                      <p className="text-sm mb-4">{product.description}</p>
                      <p className="font-bold text-right">{product.price}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
