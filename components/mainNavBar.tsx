"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Link from "next/link";

export default function MainNavbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // You can implement your search logic here
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="w-full bg-zinc-900 py-4 px-4 border-t border-zinc-800">
      <div className="container mx-auto flex justify-between items-center gap-6">
        <nav className="flex gap-6">
          <Link
            href="/services"
            className="text-white hover:text-orange-500 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/products"
            className="text-white hover:text-orange-500 transition-colors"
          >
            Products
          </Link>
          <Link
            href="/login"
            className="text-white hover:text-orange-500 transition-colors"
          >
            Login
          </Link>
        </nav>
        <form onSubmit={handleSearch} className="flex-1 max-w-2xl">
          <div className="relative">
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-10 py-6 text-lg bg-zinc-800 border-zinc-700 text-white"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-400" />
          </div>
        </form>
      </div>
    </div>
  );
}
