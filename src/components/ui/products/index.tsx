"use client";

import React from "react";
import { Image } from "antd";

import { ProductsType } from "@/app/companies/types";

interface Props {
	products: ProductsType[];
}

export const Products: React.FC<Props> = ({products}) => {
	return(
		<div className="bg-white rounded-lg shadow-sm p-6">
			<div className="grid grid-flow-row grid-cols-2 gap-10">
				{products.map((product: ProductsType) => {
					return(
						<div key={product.name} className="bg-gray-50 rounded-lg overflow-hidden flex">
							<div className="w-24 h-24 bg-gray-200 relative flex-shrink-0">
								<Image
										src={product.image || "/placeholder.svg"}
										alt={product.name}
										className="object-cover"
								/>
							</div>
							<div className="p-4 flex items-center">
								<h3 className="font-medium">{product.name}</h3>
							</div>
						</div>
					)
				})}
			</div>
		</div>
			
	)
}