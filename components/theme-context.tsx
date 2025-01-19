"use client"

import { createContext, useContext, useState } from "react"
import { themes } from "@/themes/theme-config"

type ThemeContextType = {
  currentTheme: keyof typeof themes
  setTheme: (theme: keyof typeof themes) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<keyof typeof themes>("tech")

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme: setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("useTheme must be used within ThemeProvider")
  return context
}

