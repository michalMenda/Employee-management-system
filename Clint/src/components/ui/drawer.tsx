import { Box } from "@chakra-ui/react"
import type { BoxProps } from "@chakra-ui/react"
import * as React from "react"

export interface DrawerProps extends BoxProps {
  isOpen: boolean
  onClose: () => void
  placement?: "left" | "right" | "top" | "bottom"
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "full"
}

export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  function Drawer({ isOpen, onClose, placement = "right", size = "md", children, ...props }, ref) {
    if (!isOpen) return null

    const getWidth = () => {
      switch (size) {
        case "xs": return "300px"
        case "sm": return "350px"
        case "md": return "400px"
        case "lg": return "500px"
        case "xl": return "600px"
        case "full": return "100vw"
        default: return "400px"
      }
    }

    return (
      <>
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100vw"
          height="100vh"
          bg="blackAlpha.600"
          zIndex={1000}
          onClick={onClose}
        />
        <Box
          ref={ref}
          position="fixed"
          top="0"
          right={placement === "right" ? "0" : undefined}
          left={placement === "left" ? "0" : undefined}
          width={getWidth()}
          height="100vh"
          bg="white"
          boxShadow="lg"
          zIndex={1001}
          display="flex"
          flexDirection="column"
          {...props}
        >
          {children}
        </Box>
      </>
    )
  },
)

export const DrawerHeader = React.forwardRef<HTMLDivElement, BoxProps>(
  function DrawerHeader(props, ref) {
    return <Box ref={ref} p={6} borderBottomWidth="1px" flexShrink={0} {...props} />
  },
)

export const DrawerBody = React.forwardRef<HTMLDivElement, BoxProps>(
  function DrawerBody(props, ref) {
    return <Box ref={ref} p={6} flex="1" overflowY="auto" {...props} />
  },
)

export const DrawerFooter = React.forwardRef<HTMLDivElement, BoxProps>(
  function DrawerFooter(props, ref) {
    return <Box ref={ref} p={6} borderTopWidth="1px" flexShrink={0} {...props} />
  },
)
