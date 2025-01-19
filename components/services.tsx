import {
  Camera,
  Cloud,
  Map,
  Shield,
  PenToolIcon as Tool,
  Video,
} from "lucide-react";
const services = [
  {
    icon: <Camera className="h-8 w-8" />,
    title: "Aerial Photography",
    description:
      "Professional aerial photography for real estate, events, and commercial use",
  },
  {
    icon: <Video className="h-8 w-8" />,
    title: "Drone Cinematography",
    description:
      "High-quality aerial videography for films and promotional content",
  },
  {
    icon: <Map className="h-8 w-8" />,
    title: "Mapping & Surveys",
    description:
      "Precise aerial mapping and surveying for construction and agriculture",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Security Services",
    description: "Drone-based surveillance and security solutions",
  },
  {
    icon: <Tool className="h-8 w-8" />,
    title: "Maintenance",
    description: "Expert drone maintenance and repair services",
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "Data Processing",
    description: "Advanced aerial data processing and analysis",
  },
];
export function ServicesList() {
  return (
    <section className="py-12 bg-zinc-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Our Services
        </h2>
        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start gap-6 p-6 bg-zinc-800 rounded-lg border border-zinc-700 hover:border-orange-500 transition-colors"
            >
              <div className="text-orange-500 p-3 bg-zinc-900 rounded-lg">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-zinc-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Variation 3: Interactive Cards
export function ServicesCards() {
  return (
    <section className="py-12 bg-zinc-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Our Services
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative w-full md:w-[calc(33.33%-1rem)] p-6 bg-zinc-800 rounded-lg border border-zinc-700 overflow-hidden"
            >
              <div className="relative z-10">
                <div className="text-orange-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-zinc-300">{service.description}</p>
              </div>
              <div className="absolute inset-0 bg-orange-500/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
