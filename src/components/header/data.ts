import { useTranslation } from "react-i18next";

const { t } = useTranslation();

export const menuItems = [
    { key: 'home', path: '/',  title: t('nav.home')},
    { key: 'about', path: '/about', title: t('nav.about') },
    { key: 'companies', path: '/companies', title: t('nav.companies') },
    { key: 'news', path: '/news', title: t('nav.news') },
    { key: 'fatwa', path: '/fatwa', title: t('nav.fatwa') },
    { key: 'articles', path: '/articles', title: t('nav.articles') },
    { key: 'certificate', path: '/certificate', title: t('nav.certificate') },
    { key: 'certification', path: '/certification', title: t('nav.certification') },
  ];
