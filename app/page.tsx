"use client"

import { useState, useRef } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ValentinePage() {
  const [showDialog, setShowDialog] = useState(false)
  const noButtonRef = useRef<HTMLButtonElement>(null)

  const moveNoButton = () => {
    if (noButtonRef.current) {
      // Calculate random position within viewport boundaries
      const maxX = window.innerWidth - 100
      const maxY = window.innerHeight - 50

      const randomX = Math.max(10, Math.floor(Math.random() * maxX))
      const randomY = Math.max(10, Math.floor(Math.random() * maxY))

      noButtonRef.current.style.position = "fixed"
      noButtonRef.current.style.left = `${randomX}px`
      noButtonRef.current.style.top = `${randomY}px`
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 p-4">
      <div className="max-w-md w-full mx-auto text-center space-y-6">
        <div className="rounded-lg overflow-hidden border-4 border-pink-300 shadow-lg">
          <Image
            src="https://i.gifer.com/JTu.gif?height=300&width=400"
            alt="Romantic gif"
            width={400}
            height={300}
            className="w-full"
          />
        </div>

        <h1 className="text-3xl font-bold text-pink-600 mt-6">¿Quieres ser mi San Valentin?💘💖</h1>

        <div className="flex justify-center gap-6 mt-8">
          <Button
            onClick={() => setShowDialog(true)}
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-2 rounded-full text-lg font-medium"
          >
            Si
          </Button>

          <Button
            ref={noButtonRef}
            onMouseEnter={moveNoButton}
            className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-2 rounded-full text-lg font-medium"
          >
            No
          </Button>
        </div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center p-4">
            <div className="rounded-lg overflow-hidden border-4 border-pink-300 shadow-lg mb-4">
              <Image
                src="https://i.gifer.com/7cIs.gif?height=200&width=300"
                alt="Happy cat"
                width={300}
                height={200}
                className="w-full"
              />
            </div>
            <h2 className="text-xl font-bold text-pink-600">¡Sabia que dirias que si!¡Ni lo dudé por un segundo! 😄</h2>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

