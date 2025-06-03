"use client";
import React from "react";
import Image from "next/image";
import { MdLocalPhone as Phone, MdMail as Mail, MdLocationOn as Location } from "react-icons/md";
import { FaRegCheckCircle as CheckCircle } from "react-icons/fa";

import Button from "../button";

import { RepresentativeType } from "@/app/companies/types";

interface Props {
    representative: RepresentativeType;
}

export const Representative: React.FC<Props> = ({representative}) => {
    return(
        <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-6">Региональный представитель</h2>

            <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-full md:w-1/3">
                <div className="relative h-64 w-full bg-gray-200 rounded-lg overflow-hidden mb-4">
                    <Image
                    src={representative.photo || "/placeholder.svg"}
                    alt={representative.name}
                    fill
                    className="object-cover"
                    />
                </div>
                <h3 className="text-xl font-semibold">{representative.name}</h3>
                <p className="text-green-600 font-medium mb-4">{representative.position}</p>

                <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                    <Location size={18} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>{representative.region}</span>
                    </li>
                    <li className="flex items-start gap-2">
                    <Phone size={18} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>{representative.phone}</span>
                    </li>
                    <li className="flex items-start gap-2">
                    <Mail size={18} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>{representative.email}</span>
                    </li>
                </ul>
                </div>

                <div className="w-full md:w-2/3">
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">Обязанности представителя</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <CheckCircle size={18} className="text-green-600 mt-1 flex-shrink-0" />
                                <span>Контроль соблюдения стандартов Халал на предприятии</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle size={18} className="text-green-600 mt-1 flex-shrink-0" />
                                <span>Проведение регулярных проверок производства</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle size={18} className="text-green-600 mt-1 flex-shrink-0" />
                                <span>Консультирование по вопросам сертификации</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle size={18} className="text-green-600 mt-1 flex-shrink-0" />
                                <span>Оформление и продление сертификатов</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle size={18} className="text-green-600 mt-1 flex-shrink-0" />
                                <span>Решение спорных вопросов и рассмотрение жалоб</span>
                            </li>
                        </ul>

                        <div className="mt-6">
                            <h3 className="text-lg font-semibold mb-4">Контактная информация регионального офиса</h3>
                            <p className="text-gray-600 mb-2">
                                Для получения дополнительной информации о сертификации в регионе{" "}
                                {representative.region}
                                вы можете обратиться в региональный офис центра Халал Даму.
                            </p>
                            <Button text="Связаться с представителем" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}