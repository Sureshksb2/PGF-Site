import React, { createContext, useContext, useState } from 'react'

type ImagesContextType = {
  images: string[]
  setImages: (imgs: string[]) => void
}

const ImagesContext = createContext<ImagesContextType | null>(null)

export const useImages = () => {
  const ctx = useContext(ImagesContext)
  if (!ctx) throw new Error('useImages must be used within ImagesProvider')
  return ctx
}

const defaultImages = Array.from({ length: 10 }, (_, i) => `/images/img${i + 1}.png`)

export const ImagesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<string[]>(defaultImages)
  return (
    <ImagesContext.Provider value={{ images, setImages }}>
      {children}
    </ImagesContext.Provider>
  )
}