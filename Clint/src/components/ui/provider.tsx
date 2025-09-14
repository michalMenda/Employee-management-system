"use client"

import { ChakraProvider } from "@chakra-ui/react"
import customTheme from "./theme"

import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
