// import { categories } from "@/category";
// import { motion } from "framer-motion";
// import Image from "next/image";
// export function CardsDesign() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="space-y-16"
//     >
//       {categories.map((category) => (
//         <div key={category.name} className="space-y-8">
//           <h3 className="text-3xl font-semibold text-center">
//             {category.name}
//           </h3>
//           {category.subcategories.map((subcategory) => (
//             <div key={subcategory.name} className="space-y-4">
//               <h4 className="text-2xl font-medium text-center">
//                 {subcategory.name}
//               </h4>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                 {subcategory.products.map((product) => (
//                   <motion.div
//                     key={product.title}
//                     className="bg-white border border-black rounded-lg overflow-hidden shadow-lg"
//                     whileHover={{ y: -10 }}
//                   >
//                     <div className="relative h-48">
//                       <Image
//                         src={`/placeholder.svg?height=400&width=400&text=${encodeURIComponent(
//                           product.title
//                         )}`}
//                         alt={product.title}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                     <div className="p-4">
//                       <h5 className="font-semibold text-lg mb-2">
//                         {product.title}
//                       </h5>
//                       <p className="text-sm mb-4">{product.description}</p>
//                       <p className="font-bold text-right">{product.price}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       ))}
//     </motion.div>
//   );
// }
import { categories } from "@/category";
import Image from "next/image";

export function CardsDesign() {
  return (
    <div className="space-y-16">
      {categories.map((category) => (
        <div key={category.name} className="space-y-8">
          <h3 className="text-3xl font-semibold text-center">
            {category.name}
          </h3>
          {category.subcategories.map((subcategory) => (
            <div key={subcategory.name} className="space-y-4">
              <h4 className="text-2xl font-medium text-center">
                {subcategory.name}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {subcategory.products.map((product) => (
                  <div
                    key={product.title}
                    className="bg-white border border-black rounded-lg overflow-hidden shadow-lg hover:translate-y-[-10px] transition-transform"
                  >
                    <div className="relative h-48">
                      <Image
                        src={`/placeholder.svg?height=400&width=400&text=${encodeURIComponent(
                          product.title
                        )}`}
                        alt={product.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h5 className="font-semibold text-lg mb-2">
                        {product.title}
                      </h5>
                      <p className="text-sm mb-4">{product.description}</p>
                      <p className="font-bold text-right">{product.price}</p>
                    </div>
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
