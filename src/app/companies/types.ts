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