"use client";
import { CompanyDetailType } from "@/app/companies/types";
import React from "react";
import { Badge } from "../badge";

interface Props {
    company: CompanyDetailType;
}

export const AboutCompany: React.FC<Props> = ({company}) => {
    return(
        <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-bold text-xl">{company.name}</h3>
            <div className="my-3">
                <p className="text-base text-gray-700 mb-6 leading-relaxed">{company.description}</p>
            </div>

            <div className="flex justify-between">
                <div>
                    <div className="mb-3">
                        <h4 className="font-bold text-base">Тип бизнеса</h4>
                        <p className="text-base text-gray-700 leading-relaxed">{company.businessType}</p>
                    </div>
                    <div className="mb-3">
                        <h4 className="font-bold text-base">Регион</h4>
                        <p className="text-base text-gray-700 leading-relaxed">{company.region}</p>
                    </div>
                </div>
                <div>
                    <div className="mb-3">
                        <h4 className="font-bold text-base">Специализация</h4>
                        <p className="text-base text-gray-700 leading-relaxed">{company.specialization}</p>
                    </div>
                    <div className="mb-3">
                        <h4 className="font-bold text-base">Статус сертификации</h4>
                        <Badge variant={company.status}>{company.status}</Badge>
                    </div>
                </div>

            </div>
        </div>
    )
}