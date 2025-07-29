import React from "react";
import Link from 'next/link';
import Image from 'next/image';

import {SocialLink} from "@/components/ui/social-link";
import {SocialLinkType} from "@/components/header/model/type";
import {Language} from "@/components/header/ui/Language";

type Props = {
  socials: SocialLinkType[];
}

export const TopBar: React.FC<Props> = ({socials}) => {
  return (
    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Халал Даму Logo" width={60} height={60}/>
          <div className="text-xs md:text-sm text-gray-600 max-w-xs hidden md:block">
            ЦЕНТР СТАНДАРТИЗАЦИИ И СЕРТИФИКАЦИИ «ХАЛАЛ ДАМУ»
          </div>
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <Language />
        {socials.map((social, index) => (
          <SocialLink
            key={index}
            href={social.href}
            label={social.label}
            Icon={social.Icon}
            colorClass={social.colorClass}
            hoverColorClass={social.hoverColorClass}
            size={25}
          />
        ))}
      </div>
    </div>
  )
}
