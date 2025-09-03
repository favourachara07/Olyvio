import * as React from "react"
import { cn } from "@/lib/utils"

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  className?: string
}

export function Progress({
  value,
  max = 100,
  className,
  ...props
}: ProgressProps) {
  const percentage = Math.min(Math.max(0, value), max)
  
  return (
    <div 
      className={cn(
        "h-2 w-full overflow-hidden rounded-full bg-[#F0F0F0]",
        className
      )}
      {...props}
    >
      <div
        className="h-full bg-[#0096FF] transition-all duration-300"
        style={{ width: `${(percentage / max) * 100}%` }}
      />
    </div>
  )
}
