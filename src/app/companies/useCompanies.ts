import React, {useState, useEffect} from "react";
import axios from 'axios';

import { mockCompanies } from "./data";

import { CompaniesType } from "./types";

export function useCompanies() {
  const [companies, setCompanies] = useState<CompaniesType[]>(mockCompanies);
  const [filteredCompanies, setFilteredCompanies] = useState<CompaniesType[]>(mockCompanies.filter((c) => c.status === "active"))
  const [certStatus, setCertStatus] = useState<string>("active")

  const regions = ["Бишкек", "Ош", "Нарын"]
  const businessTypes = ["Пищевая продукция", "Сертификация", "Торговля"]
  const specializations = ["Мясо", "Молочная продукция", "Одежда"]

  const statuses = ["active", "expired", "suspended"];

  useEffect(() => {
    setFilteredCompanies(mockCompanies.filter((c) => c.status === certStatus))
  }, [certStatus])


  
  const fetchFiltered = async (filters: {
    region: string
    businessType: string
    specialization: string
  }) => {
    const params = {
      ...(filters.region !== "all" && { region: filters.region }),
      ...(filters.businessType && { businessType: filters.businessType }),
      ...(filters.specialization && { specialization: filters.specialization }),
    }

    const { data } = await axios.get("/api/companies", { params })
    setCompanies(data)
  }

  useEffect(() => {
    fetchFiltered({ region: "all", businessType: "", specialization: "" })
  }, [])

  return {companies, filteredCompanies, certStatus, setCertStatus, statuses, regions, businessTypes, specializations, fetchFiltered};
}