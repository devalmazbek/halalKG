"use client"

import { ContactInfo } from "@/components/ui/contact";

import { CompanyDetailType } from "../types";
import { CertificateInfo } from "@/components/ui/certificate-info";
import { CompanyTabs } from "@/components/user-tabs";

export default function CompayDetailPage({ params }: { params: { id: string } }) {

    const company: CompanyDetailType = {
    id: params.id,
    name: `Компания ${params.id}`,
    logo: `/company-logos/company-${params.id}-logo.png`,
    coverImage: "/company-banner.jpg",
    status: "Сертифицирован", // or "Истек", "Остановлено"
    businessType: "Пищевая продукция",
    specialization: "Мясо и мясная продукция",
    region: "Чуй",
    address: "г. Бишкек, ул. Примерная, 123",
    phone: "+996 555 123 456",
    email: "info@company.kg",
    website: "www.company.kg",
    description:
      "Компания специализируется на производстве мясной продукции с 2010 года. Вся продукция соответствует стандартам Халал и проходит строгий контроль качества.",
    certificateNumber: "HD-2023-12345",
    certificateIssueDate: "15.01.2023",
    certificateExpiryDate: "15.01.2025",
    products: [
      { name: "Говядина халяль", image: "/product-1.jpg" },
      { name: "Баранина халяль", image: "/product-2.jpg" },
      { name: "Колбасные изделия", image: "/product-3.jpg" },
      { name: "Полуфабрикаты", image: "/product-4.jpg" },
    ],
    position: { lat: 42.8746, lng: 74.5698 }, // Bishkek coordinates
    representative: {
      id: 1,
      name: "Амангелдиев Акылбек",
      position: "Региональный представитель",
      region: "Чуй",
      phone: "+7 702 202 2329",
      email: "chuy@halaldamu.kz",
      photo: "/representatives/representative-1.jpg",
    },
  }


    return (
        <div className="container mx-auto mt-4 flex">
            <div className="w-1/3 flex-none">
                <ContactInfo company={company} />
                <CertificateInfo company={company}/>
            </div>
            <div className="flex-1">
                <CompanyTabs company={company}/>
            </div>
        </div>
    );
}