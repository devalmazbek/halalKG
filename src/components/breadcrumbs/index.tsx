'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Breadcrumb } from 'antd';

interface BreadcrumbsProps {
  title?: string;
}

export default function Breadcrumbs({ title }: BreadcrumbsProps) {
  const pathname = usePathname();
  if (!pathname || pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);

  const items = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    const isLast = index === segments.length - 1;

    let displayTitle: string;

    // Если это последний сегмент и передан title — показываем его
    if (isLast && title) {
      displayTitle = title;
    } else {
      switch (segment) {
        case 'companies':
          displayTitle = 'Компании';
          break;
        case 'about':
          displayTitle = 'О нас';
          break;
        case 'certificate':
          displayTitle = 'Сертификаты';
          break;
        case 'certification':
          displayTitle = 'Сертификация';
          break;
        case 'news':
          displayTitle = 'Новости';
          break;
        default:
          if (!isNaN(Number(segment))) {
            displayTitle = `Компания #${segment}`;
          } else {
            displayTitle = segment
              .replace(/-/g, ' ')
              .replace(/^\w/, (c) => c.toUpperCase());
          }
      }
    }

    return {
      title: isLast ? (
        <span>{displayTitle}</span>
      ) : (
        <Link href={href}>{displayTitle}</Link>
      ),
    };
  });

  return (
    <div className="my-2 font-normal container mx-auto">
      <Breadcrumb
        className="text-xs"
        items={[
          {
            title: <Link href="/">Главная</Link>,
          },
          ...items,
        ]}
      />
    </div>
  );
}
