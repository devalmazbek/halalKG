import React from "react"
import { FaCheckCircle } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa6";


import { CompanyDetailType } from "@/app/companies/types"
import Button from "@/components/ui/button";

interface Props {
    company: CompanyDetailType
}

export const CertificateInfo: React.FC<Props> = ({company}) => {
    return(
        <div className="flex flex-col gap-3 max-w-sm text-gray-700 border border-gray-100 p-4 mb-3">
            <h3 className="font-bold text-lg">Информация о сертификате</h3>
            <div className="mt-1 flex items-center">
                <FaCheckCircle className="text-green-600 mr-4" />
                <div>
                    <p>Номер сертификата</p>
                    <p>{company.certificateNumber}</p>
                </div>
            </div>
            <div className="mt-1 flex items-center">
                <FaCalendar className="text-green-600 mr-4" />
                <div>
                    <p>Дата выдачи</p>
                    <p>{company.certificateIssueDate}</p>
                </div>
            </div>
            <div className="mt-1 flex items-center">
                <FaCalendarCheck className="text-green-600 mr-4" />
                <div>
                    <p>Действителен до</p>
                    <p>{company.certificateExpiryDate}</p>
                </div>
            </div>
            <Button text="Скачать сертификат" align="center"/>
        </div>
    )
}