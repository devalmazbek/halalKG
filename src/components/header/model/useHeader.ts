import { FaInstagram, FaFacebook, FaTelegram } from 'react-icons/fa';
import {SocialLinkType} from "@/components/header/model/type";

const socials: SocialLinkType[] = [
    {
        href: 'https://github.com',
        label: 'GitHub',
        Icon: FaInstagram,
        colorClass: 'text-gray-500',
        hoverColorClass: 'hover:text-black',
    },
    {
        href: 'https://twitter.com',
        label: 'Twitter',
        Icon: FaFacebook,
        colorClass: 'text-blue-400',
        hoverColorClass: 'hover:text-blue-600',
    },
    {
        href: 'https://linkedin.com',
        label: 'LinkedIn',
        Icon: FaTelegram,
        colorClass: 'text-blue-700',
        hoverColorClass: 'hover:text-blue-900',
    },
  ]

export const useHeader = () => {

    return {
        socials
    }
}
