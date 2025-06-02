"use client";

import React from "react";
import { IoLocation} from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

import { CompanyDetailType } from "@/app/companies/types";

interface ContactInfoProps {
  company: CompanyDetailType
}

export const ContactInfo: React.FC<ContactInfoProps> = ({company}) => {
    return(
			<div className="flex flex-col gap-3 max-w-sm text-gray-700 border border-gray-100 p-4 mb-3">
				<h3 className="font-bold text-lg">Контактная информация</h3>
				<div className="mt-1 flex items-center">
					<IoLocation className="text-green-600 mr-4" />
					<p>{company.address}</p>
				</div>
				<div className="mt-1 flex items-center">
					<FaPhoneAlt className="text-green-600 mr-4" />
					<p>{company.phone}</p>
				</div>
				<div className="mt-1 flex items-center">
					<FaEnvelope className="text-green-600 mr-4" />
					<p>{company.email}</p>
				</div>
				<div className="mt-1 flex items-center">
					<AiOutlineGlobal className="text-green-600 mr-4" />
					<p>{company.website}</p>
				</div>
			</div>
    )
}