"use client";
import React from "react";

import Button from "../button";
import { Badge } from "../badge";

import { CompanyDetailType } from "@/app/companies/types";

interface Props {
    company: CompanyDetailType;
}

export const Certificate: React.FC<Props> = ({company}) => {
    return(
         <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-6">Сертификаты</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h3 className="text-lg font-semibold">Сертификат Халал</h3>
                        <p className="text-gray-600">Номер: {company.certificateNumber}</p>
                    </div>
                    <Badge variant={company.status}>{company.status}</Badge>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                        <span className="text-gray-600">Дата выдачи:</span>
                        <span className="ml-2 font-medium">{company.certificateIssueDate}</span>
                    </div>
                    <div>
                        <span className="text-gray-600">Действителен до:</span>
                        <span className="ml-2 font-medium">{company.certificateExpiryDate}</span>
                    </div>
                    <div>
                        <span className="text-gray-600">Тип продукции:</span>
                        <span className="ml-2 font-medium">{company.businessType}</span>
                    </div>
                    <div>
                        <span className="text-gray-600">Специализация:</span>
                        <span className="ml-2 font-medium">{company.specialization}</span>
                    </div>
                </div>
                <div className="mt-6 flex justify-end">
                <Button text=" Скачать сертификат" />
                </div>
            </div>

            <div className="text-center text-gray-600">
                <p>История предыдущих сертификатов не найдена.</p>
            </div>
        </div>
    )
}