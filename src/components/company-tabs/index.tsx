"use client";

import React from "react";
import { Tabs } from "antd";
import { CompanyDetailType } from "@/app/companies/types";
import { AboutCompany } from "../ui/about-company";
import { Products } from "../ui/products";
import { Certificate } from "../ui/certificate";
import { Representative } from "../ui/represntative";

interface Props {
	company: CompanyDetailType
}

export const CompanyTabs: React.FC<Props> = ({company}) => {

	const items = [
		{
		key: '1',
		label: 'О компаниии ',
		children: <AboutCompany company={company}/>,
		},
		{
		key: '2',
		label: 'Продукции',
		children: <Products products={company.products}/>,
		},
		{
		key: '3',
		label: 'Сертификаты',
		children: <Certificate company={company}/>,
		},
		{
		key: '4',
		label: 'Представитель',
		children: <Representative representative={company.representative}/>,
		},
	];

    return(<Tabs defaultActiveKey="1" items={items} className="mb-3 company-tabs" />)
}