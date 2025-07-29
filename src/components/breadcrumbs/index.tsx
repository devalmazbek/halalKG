'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Breadcrumb } from 'antd'

export default function Breadcrumbs() {
  const pathname = usePathname()
  if(!pathname) return null;

  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean)

  const items = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/')

    let title = decodeURIComponent(segment)

    switch (segment) {
      case 'companies':
        title = 'Компании'
        break
      case 'about':
        title = 'О нас'
        break
      case 'certificate':
        title = 'Сертификаты'
        break
      case 'certification':
        title = 'Сертификация'
        break
      default:
        if (!isNaN(Number(segment))) {
          title = `Компания #${segment}`
        } else {
          title = segment.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase())
        }
    }

    return {
      title,
      href,
    }
  })

  return (
    <div className="my-2 font-normal container mx-auto">
      <Breadcrumb
        className="text-xs"
        items={[
          {
            title: <Link href="/">Главная</Link>,
          },
          ...items.map((item) => ({
            title: <Link href={item.href}>{item.title}</Link>,
          })),
        ]}
      />
    </div>
  )
}
