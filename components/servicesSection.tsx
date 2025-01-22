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
import { useState, useEffect } from "react";
import ModalWindow from "./ModalWindow";

export function ServicesShowcase() {
  return (
    <section className="py-24 bg-white text-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl font-bold">Our Services</h2>
        </div>
        <AnimatePresence mode="wait">
          <InteractiveDesign key="interactive" />
        </AnimatePresence>
      </div>
    </section>
  );
}

function InteractiveDesign() {
  const [activeService, setActiveService] = useState(services[0].name);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const getIcon = (name: string) => {
    const icons = {
      "Laser Cutting": Layers,
      Routing: Cpu,
      "3D Printing": Printer3d,
      "Mechanical Machining": Settings,
      "PCB Design": CircuitBoard,
    };
    const Icon = icons[name as keyof typeof icons] || Layers;
    return <Icon className="w-8 h-8" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col md:flex-row md:gap-8"
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
            onClick={() => {
              setActiveService(service.name);
              if (isMobile) setIsOpen(true);
            }}
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
          {services.map((service) => (
            <ServiceContent
              key={service.name}
              service={service}
              isActive={activeService === service.name}
              isMobile={isMobile}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
/* eslint no-use-before-define: 0 */
function ServiceContent({
  service,
  isActive,
  isMobile,
  isOpen,
  setIsOpen,
}: any) {
  if (!isActive) return null;

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-gray-100 p-6 rounded-lg"
    >
      <h3 className="text-2xl font-semibold mb-4">{service.name}</h3>
      {service.subcategories ? (
        <ul className="space-y-4">
          {/* @ts-expect-error ts-migrate(7006) FIXME: Parameter 'name' implicitly has an 'any' type.*/}
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
  );

  return isMobile ? (
    isOpen ? (
      <ModalWindow setIsOpen={setIsOpen}>{content}</ModalWindow>
    ) : null
  ) : (
    content
  );
}
