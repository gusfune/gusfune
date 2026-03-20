"use client"

import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

interface TypingAnimationProps {
  text: string
  duration?: number
  className?: string
}

export default function TypingAnimation({
  text,
  duration = 200,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("")
  const indexRef = useRef(0)

  useEffect(() => {
    indexRef.current = 0
    setDisplayedText("")

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReducedMotion) {
      setDisplayedText(text)
      return
    }

    const typingEffect = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayedText(text.substring(0, indexRef.current + 1))
        indexRef.current += 1
      } else {
        clearInterval(typingEffect)
      }
    }, duration)

    return () => {
      clearInterval(typingEffect)
    }
  }, [duration, text])

  return (
    <span className={cn("tracking-[-0.02em] drop-shadow-xs", className)}>
      {displayedText}
    </span>
  )
}
