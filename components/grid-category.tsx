import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { categories } from "@/category";
import Link from "next/link";
import { useId } from "react";

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
                {subcategory.categoryName.map((cat) => (
                  <div key={cat.id}>
                    <Link href={`/products/${cat.id}`}>
                      <Card key={cat.title} className="flex flex-col">
                        <CardHeader className="p-0">
                          <div className="relative h-48 w-full">
                            <Image
                              src={cat.image || "/placeholder.svg"}
                              alt={cat.title}
                              fill
                              className="object-cover rounded-t-lg"
                            />
                          </div>
                        </CardHeader>
                        <CardContent className="flex-grow p-4">
                          <CardTitle className="text-lg mb-2">
                            {cat.title}
                          </CardTitle>
                          <p className="text-sm mb-4">{cat.description}</p>
                          <p className="font-bold text-right">{cat.price}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
