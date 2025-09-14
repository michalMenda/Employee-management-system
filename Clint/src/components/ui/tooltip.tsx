import * as React from "react"

export interface TooltipProps {
  label: React.ReactNode
  children: React.ReactNode
  placement?: "top" | "bottom" | "left" | "right"
  isDisabled?: boolean
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  function Tooltip(props, ref) {
    const { label, children, isDisabled } = props

    if (isDisabled) return <>{children}</>

    return (
      <div title={typeof label === 'string' ? label : undefined}>
        {children}
      </div>
    )
  },
)
