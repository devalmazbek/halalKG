"use client";
import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { AiFillInstagram as Instagram } from "react-icons/ai";
import { FaFacebook as Facebook, FaWhatsapp as Whatsapp } from "react-icons/fa";
import { MdLocalPhone as Phone, MdMail as Mail, MdLocationOn as Location, MdSend as Send } from "react-icons/md";

interface NavItem {
  label: string
  href: string
}

interface ContactInfo {
  icon: React.ElementType
  content: string
  href?: string
  isLink?: boolean
}

interface SocialLink {
  icon: React.ElementType
  href: string
  label: string
  bgColor: string
  hoverColor: string
}

// Navigation items
const navItems: NavItem[] = [
  { label: "Главная", href: "/" },
  { label: "О нас", href: "/about" },
  { label: "Компании", href: "/companies" },
  { label: "Новости", href: "/news" },
  { label: "Фетвы", href: "/fatwas" },
  { label: "Статьи", href: "/articles" },
  { label: "Сертификат", href: "/certificate" },
  { label: "Сертификация", href: "/certification" },
]

const contactInfo: ContactInfo[] = [
  {
    icon: Phone,
    content: "+996 (777) 123-45-67",
    href: "tel:+996707070700",
    isLink: true,
  },
  {
    icon: Mail,
    content: "info@halal.kg",
    href: "mailto:info@halaldamu.kz",
    isLink: true,
  },
  {
    icon: Location,
    content: "г. Бишкек, ул. Жибек Жолу, 123, Кырыгызсатан",
  },
]

const socialLinks: SocialLink[] = [
  {
    icon: Instagram,
    href: "#",
    label: "Instagram",
    bgColor: "bg-pink-500",
    hoverColor: "hover:bg-pink-600",
  },
  {
    icon: Facebook,
    href: "#",
    label: "Facebook",
    bgColor: "bg-blue-600",
    hoverColor: "hover:bg-blue-700",
  },
  {
    icon: Whatsapp,
    href: "#",
    label: "WhatsApp",
    bgColor: "bg-green-500",
    hoverColor: "hover:bg-green-600",
  },
  {
    icon: Send,
    href: "#",
    label: "Telegram",
    bgColor: "bg-blue-400",
    hoverColor: "hover:bg-blue-500",
  },
]

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Image src="/logo.png" alt="Халал Даму Logo" width={50} height={50} />
              <h3 className="font-bold text-xl">Халал Даму</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Центр стандартизации и сертификации «Халал Даму» при духовном управлении мусульман Кыргызстана - ведущий
              центр сертификации халяльной продукции.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 ${social.bgColor} rounded-full flex items-center justify-center text-white ${social.hoverColor} transition-colors`}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6">Навигация</h3>
            <ul className="grid grid-cols-2 gap-3">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-gray-600 hover:text-green-600 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6">Контакты</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-600">
                  <item.icon size={18} className="text-green-600" />
                  {item.isLink && item.href ? (
                    <a href={item.href} className="hover:text-green-600 transition-colors">
                      {item.content}
                    </a>
                  ) : (
                    <span>{item.content}</span>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors font-medium"
              >
                Связаться с нами
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-12 pt-8 text-center text-gray-500 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {currentYear} Халал. Все права защищены.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-green-600 transition-colors">
                Политика конфиденциальности
              </Link>
              <Link href="/terms" className="hover:text-green-600 transition-colors">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}