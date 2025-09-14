import { Box } from "@chakra-ui/react"
import type { BoxProps } from "@chakra-ui/react"
import * as React from "react"

export interface CollapsibleProps extends BoxProps {
  open: boolean
}

export const Collapsible = React.forwardRef<HTMLDivElement, CollapsibleProps>(
  function Collapsible({ open, children, ...props }, ref) {
    return (
      <Box
        ref={ref}
        overflow="hidden"
        transition="all 0.3s ease"
        maxHeight={open ? "500px" : "0px"}
        opacity={open ? 1 : 0}
        {...props}
      >
        <Box py={open ? 2 : 0}>
          {children}
        </Box>
      </Box>
    )
  },
)
