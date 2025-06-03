// components/ui/Breadcrumbs.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo } from "react"

interface Crumb {
  label: string
  href?: string
}

interface Props {
  dynamicLabels?: Record<string, string>
  baseCrumbs?: Crumb[]
}

export const Breadcrumbs: React.FC<Props> = ({ dynamicLabels = {}, baseCrumbs = [] }) => {
  const pathname = usePathname()
  if (!pathname) return null

  const pathParts = pathname.split("/").filter(Boolean)

  const crumbs = useMemo(() => {
    const built: Crumb[] = [...baseCrumbs]

    pathParts.forEach((part, idx) => {
      const href = "/" + pathParts.slice(0, idx + 1).join("/")
      const label = dynamicLabels[part] || decodeURIComponent(part)

      built.push({
        label,
        href: idx !== pathParts.length - 1 ? href : undefined, // последняя крошка без ссылки
      })
    })

    return built
  }, [pathname, dynamicLabels, baseCrumbs])

  return (
    <nav className="text-sm text-gray-600 mb-4" aria-label="Breadcrumbs">
      {crumbs.map((crumb, index) => (
        <span key={index}>
          {crumb.href ? (
            <Link href={crumb.href} className="hover:underline text-blue-600">
              {crumb.label}
            </Link>
          ) : (
            <span>{crumb.label}</span>
          )}
          {index < crumbs.length - 1 && <span className="mx-1">/</span>}
        </span>
      ))}
    </nav>
  )
}
