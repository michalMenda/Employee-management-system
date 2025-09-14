import { Box } from "@chakra-ui/react"
import type { BoxProps } from "@chakra-ui/react"
import * as React from "react"

export interface CardProps extends BoxProps {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  function Card(props, ref) {
    return (
      <Box
        ref={ref}
        borderWidth="1px"
        borderRadius="xl"
        overflow="hidden"
        {...props}
      />
    )
  },
)

export const CardHeader = React.forwardRef<HTMLDivElement, BoxProps>(
  function CardHeader(props, ref) {
    return <Box ref={ref} p={4} pb={2} {...props} />
  },
)

export const CardBody = React.forwardRef<HTMLDivElement, BoxProps>(
  function CardBody(props, ref) {
    return <Box ref={ref} p={4} pt={0} {...props} />
  },
)
