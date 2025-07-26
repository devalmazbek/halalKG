import { IconType } from 'react-icons';

export interface MenuItem {
  key: string;
  path: string;
  title: string;
}

export interface SocialLinkType {
  href: string,
  label: string,
  Icon: IconType,
  colorClass: string,
  hoverColorClass: string,
}
