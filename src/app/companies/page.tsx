'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { Metadata} from 'next';

import { useCompanies } from './useCompanies';

import { StatusFilter } from '@/components/status-filter';
import { CompanyFilters } from '@/components/filter';
import { Badge } from '@/components/ui/badge';


// export const metadata: Metadata = {
//   title: 'Сертифицированные компании | Халал Даму',
//   description: 'Список компаний, получивших сертификат Халал от Центра стандартизации и сертификации «Халал Даму»'
// };

export default function CompaniesPage() {
	const {filteredCompanies, 
				certStatus,
				companies,
				statuses,
				setCertStatus,
				regions,
				specializations,
				businessTypes,
				fetchFiltered} = useCompanies();

	return (
		<div className="container mx-auto py-12">
			{/* filter */}
 			<StatusFilter statuses={statuses} current={certStatus as any} onChange={setCertStatus} />

			<CompanyFilters
				regions={regions}
				businessTypes={businessTypes}
				specializations={specializations}
				onApply={fetchFiltered}
			/>
			
			{/* end filter */}
			<div className="grid md:grid-cols-3 gap-6">
				{filteredCompanies.map((company) => (
					<Link
						href={`/companies/${company.id}`}
						key={company.id}
						className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
					>
						<div className="h-48 bg-gray-200 relative">
							<Image
								src={company.image || "/placeholder.svg"}
								alt={company.name}
								fill
								className="object-cover"
							/>
							<Badge className={`absolute top-3 right-3`} variant={company?.status}>
								{company.statusLabel}
							</Badge>
						</div>
						<div className="p-6">
							<div className="flex items-center justify-between mb-3">
								<h3 className="text-xl font-semibold">{company.name}</h3>
								<span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
									{company.businessType}
								</span>
							</div>
							<p className="text-gray-600 mb-4">{company.specialization}</p>
							<div className="flex items-center text-sm text-gray-500">
								{/* <MapPin size={16} className="mr-1" /> */}
								<span>{company.region}</span>
								<span className="mx-2">•</span>
								<span>Сертификат действителен</span>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
