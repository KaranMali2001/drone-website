"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type React from "react"; // Added import for React

interface FormData {
  name?: string;
  phone: string;
  email?: string;
  password: string;
}

export default function AuthForms() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", formData);
    setLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br bg-white flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8"
          whileHover={{
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
          transition={{ duration: 0.2 }}
        >
          <motion.h2
            className="text-2xl font-bold text-center mb-6"
            initial={false}
            animate={{ scale: [1.2, 1], opacity: [0, 1] }}
            key={isLogin ? "login" : "register"}
          >
            {isLogin ? "Welcome Back" : "Create Account"}
          </motion.h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <AnimatePresence mode="popLayout">
              {!isLogin && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Input
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="transition-all duration-200 hover:border-gray-400 focus:border-black"
                  />
                </motion.div>
              )}

              <motion.div layout transition={{ duration: 0.2 }}>
                <Input
                  placeholder="Phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="transition-all duration-200 hover:border-gray-400 focus:border-black"
                />
              </motion.div>

              {!isLogin && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Input
                    placeholder="Email (Optional)"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="transition-all duration-200 hover:border-gray-400 focus:border-black"
                  />
                </motion.div>
              )}

              <motion.div layout transition={{ duration: 0.2 }}>
                <Input
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="transition-all duration-200 hover:border-gray-400 focus:border-black"
                />
              </motion.div>
            </AnimatePresence>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                className="w-full bg-black hover:bg-gray-800 text-white transition-colors duration-200"
                disabled={loading}
              >
                {loading ? (
                  <motion.div
                    initial={{ opacity: 0, rotate: 0 }}
                    animate={{ opacity: 1, rotate: 360 }}
                    transition={{
                      duration: 0.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    <Loader2 className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <motion.span
                    key={isLogin ? "login" : "register"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {isLogin ? "Login" : "Register"}
                  </motion.span>
                )}
              </Button>
            </motion.div>
          </form>

          <motion.div className="text-center mt-4" layout>
            <motion.p className="text-sm text-gray-600">
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
              <motion.button
                onClick={() => setIsLogin(!isLogin)}
                className="text-black underline hover:text-gray-600 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isLogin ? "Register" : "Login"}
              </motion.button>
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
