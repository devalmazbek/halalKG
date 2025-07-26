import React from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';

interface SocialLinkProps {
  href: string;
  label: string;
  Icon: IconType;
  colorClass?: string;
  hoverColorClass?: string;
  size?: number;
}

export const SocialLink: React.FC<SocialLinkProps> = ({
   href,
   label,
   Icon,
   colorClass = '',
   hoverColorClass = '',
   size = 20,
 }) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <a
        aria-label={label}
        className={`${colorClass} ${hoverColorClass} transition-colors`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon size={size} />
      </a>
    </Link>
  );
};

