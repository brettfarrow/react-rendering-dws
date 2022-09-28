import { throttle } from "lodash"
import { useEffect, useState } from "react"

export default function useRandomColor() {
  const [color, setColor] = useState("#000000")

  // Generate three random numbers and convert them to
  const generateRandomHexColor = () => {
    const MAX_COLOR_SPACE = 256 * 256 * 256
    return `#${Math.floor(Math.random() * MAX_COLOR_SPACE).toString(16)}`
  }

  const setRandomColor = () => {
    const hex = generateRandomHexColor()
    setColor(hex)
  }

  const throttledRandomColor = throttle(setRandomColor, 1000)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", throttledRandomColor)
    }

    return () => {
      window.removeEventListener("resize", throttledRandomColor)
    }
  }, [])

  return color
}
