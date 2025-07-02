import React from "react"

type BadgeVariant = "active" | "expired" | "suspended" | "halal" | "haram" | "mushbooh" | "unknown"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: string 
}

const variantClassMap: Record<BadgeVariant, string> = {
  active: "bg-green-600 text-white border-green-600",
  expired: "bg-amber-500 text-white border-amber-500",
  suspended: "bg-red-600 border-red-600 text-white",
  halal: "bg-green-600 text-white border-green-600",
  haram: "bg-red-600 border-red-600 text-white",
  mushbooh: "bg-amber-500 text-white border-amber-500",
  unknown: "bg-gray-500 text-white border-gray-500",
}

const isBadgeVariant = (value: string): value is BadgeVariant => {
  return value === "active" || value === "expired" || value === "suspended" || value === "halal" || value === "haram" || value === "mushbooh" || value === "unknown"
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "active",
  children,
  className = "",
  ...props
}) => {
  const validVariant: BadgeVariant = isBadgeVariant(variant) ? variant : "active"
  const variantClass = variantClassMap[validVariant]

  const baseClass =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"

  return (
    <div
      className={`${baseClass} ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
