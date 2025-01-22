import { Mail, Phone } from "lucide-react";

export default function TopNavbar() {
  return (
    <div className="w-full bg-black text-white py-2 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-orange-500 font-bold text-xl">DroneX</div>
        <div className="flex-col flex md:flex-row  items-center gap-1 md:gap-6">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>contact@dronex.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
