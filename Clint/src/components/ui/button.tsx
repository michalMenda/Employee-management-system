import type { ButtonProps as ChakraButtonProps } from "@chakra-ui/react"
import { Button as ChakraButton } from "@chakra-ui/react"
import * as React from "react"

export interface ButtonProps extends ChakraButtonProps {
  isLoading?: boolean
  loadingText?: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const { isLoading, disabled, loadingText, children, ...rest } = props
    return (
      <ChakraButton 
        disabled={isLoading || disabled} 
        ref={ref} 
        {...rest}
      >
        {isLoading ? loadingText || "Loading..." : children}
      </ChakraButton>
    )
  },
)
