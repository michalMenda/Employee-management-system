import { Box, Text } from "@chakra-ui/react"
import { useState, useEffect } from "react"

interface ToastProps {
  message: string
  type?: "success" | "error" | "info"
  duration?: number
  onClose: () => void
}

export const Toast = ({ message, type = "success", duration = 3000, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  const bgColor = type === "success" ? "green.500" : type === "error" ? "red.500" : "blue.500"

  return (
    <Box
      position="fixed"
      top="20px"
      left="50%"
      transform="translateX(-50%)"
      bg={bgColor}
      color="white"
      px={6}
      py={4}
      borderRadius="xl"
      boxShadow="lg"
      zIndex={9999}
    >
      <Text>{message}</Text>
    </Box>
  )
}

export const useToast = () => {
  const [toast, setToast] = useState<{ message: string; type?: "success" | "error" | "info" } | null>(null)

  const showToast = (message: string, type: "success" | "error" | "info" = "success") => {
    setToast({ message, type })
  }

  const hideToast = () => {
    setToast(null)
  }

  return { toast, showToast, hideToast }
}
