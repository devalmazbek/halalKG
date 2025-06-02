export interface CompaniesType {
    id: number,
    name: string,
    image: string,
    position: { lat: number, lng: number },
    status: string,
    statusLabel: string,
    statusColor: string,
    businessType: string,
    specialization: string,
    region: string,
    address: string,
}

export type CompanyDetailType = {
    id: string | number;
    name: string;
    logo: string;
    coverImage: string;
    status: string;
    businessType: string;
    specialization: string;
    region: string;
    address: string;
    phone: string;
    email: string;
    website:string;
    description: string;
    certificateNumber: string;
    certificateIssueDate: string;
    certificateExpiryDate: string;
    products: ProductsType[];
    position: PositionType;
    representative: RepresentativeType;
}

export type ProductsType = {
    name: string;
    image: string;
}

export type PositionType = {
    lat: number;
    lng: number;
}

export type RepresentativeType = {
    id: number;
    name: string;
    position: string;
    region: string;
    phone: string;
    email: string;
    photo: string;
}

