"use client";

import React from "react";
import { Tabs } from "antd";
import { CompanyDetailType } from "@/app/companies/types";
import { AboutCompany } from "../ui/about-company";
import { Products } from "../ui/products";

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
    ];

    return(<Tabs defaultActiveKey="1" items={items} />)
}