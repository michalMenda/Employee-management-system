import { Avatar as ChakraAvatar, AvatarGroup as ChakraAvatarGroup } from "@chakra-ui/react"
import type { AvatarProps as ChakraAvatarProps } from "@chakra-ui/react"
import * as React from "react"

export interface AvatarProps extends ChakraAvatarProps {
  name?: string
  src?: string
}

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  function Avatar(props, ref) {
    return <ChakraAvatar ref={ref} {...props} />
  },
)

export const AvatarGroup = ChakraAvatarGroup
