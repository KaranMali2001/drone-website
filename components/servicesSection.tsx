"use client";

import { services } from "@/services";
import { AnimatePresence, motion } from "framer-motion";
import {
  CircuitBoard,
  Cpu,
  Layers,
  PrinterIcon as Printer3d,
  Settings,
} from "lucide-react";
import { useState } from "react";

export function ServicesShowcase() {
  const [currentDesign] = useState(1);

  return (
    <section className="py-24 bg-white text-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl font-bold">Our Services</h2>
        </div>
        <AnimatePresence mode="wait">
          {/* {currentDesign === 0 && <GridDesign key="grid" />} */}
          {currentDesign === 1 && <InteractiveDesign key="interactive" />}
          {/* {currentDesign === 2 && <TimelineDesign key="timeline" />} */}
        </AnimatePresence>
      </div>
    </section>
  );
}

// function GridDesign() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//     >
//       {services.map((service) => (
//         <motion.div
//           key={service.name}
//           className="bg-gray-100 p-6 rounded-lg"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <h3 className="text-2xl font-semibold mb-4">{service.name}</h3>
//           {service.subcategories ? (
//             <ul className="space-y-2">
//               {service.subcategories.map((sub) => (
//                 <li key={sub.name} className="flex items-start">
//                   <ChevronRight className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
//                   <div>
//                     <h4 className="font-medium">{sub.name}</h4>
//                     <p className="text-sm text-gray-600">{sub.description}</p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-gray-600">{service.description}</p>
//           )}
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// }

function InteractiveDesign() {
  const [activeService, setActiveService] = useState(services[0].name);

  const getIcon = (name: string) => {
    switch (name) {
      case "Laser Cutting":
        return <Layers className="w-8 h-8" />;
      case "Routing":
        return <Cpu className="w-8 h-8" />;
      case "3D Printing":
        return <Printer3d className="w-8 h-8" />;
      case "Mechanical Machining":
        return <Settings className="w-8 h-8" />;
      case "PCB Design":
        return <CircuitBoard className="w-8 h-8" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col md:flex-row gap-8"
    >
      <div className="md:w-1/3 space-y-4">
        {services.map((service) => (
          <motion.button
            key={service.name}
            className={`w-full text-left p-4 rounded-lg flex items-center ${
              activeService === service.name
                ? "bg-black text-white"
                : "bg-gray-100"
            }`}
            onClick={() => setActiveService(service.name)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {getIcon(service.name)}
            <span className="ml-4 text-lg font-medium">{service.name}</span>
          </motion.button>
        ))}
      </div>
      <div className="md:w-2/3">
        <AnimatePresence mode="wait">
          {services.map(
            (service) =>
              activeService === service.name && (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-gray-100 p-6 rounded-lg"
                >
                  <h3 className="text-2xl font-semibold mb-4">
                    {service.name}
                  </h3>
                  {service.subcategories ? (
                    <ul className="space-y-4">
                      {service.subcategories.map((sub) => (
                        <li key={sub.name}>
                          <h4 className="font-medium">{sub.name}</h4>
                          <p className="text-gray-600">{sub.description}</p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600">{service.description}</p>
                  )}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
