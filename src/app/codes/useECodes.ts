import {useEffect, useState} from "react";
import {eCodesData, eCodeCategoriesData, eCodeStatusMapData} from "./data";
import {type ECode, type ECodeCategories, type ECodeStatusMap} from "./type";

export const useECodes = () => {
  const [eCodes, setECodes] = useState<ECode[]>(eCodesData ?? []);
  const [eCodeCategories, setECodeCategories] = useState<ECodeCategories[]>(eCodeCategoriesData ?? []);
  const [eCodeStatus, setECodeStatus] = useState<ECodeStatusMap>(eCodeStatusMapData ?? []);
  const [selectedECodeStatus, setSelectedECodeStatus] = useState<string>("");
  const [filteredECodes, setFilteredECodes] = useState<ECode[]>([]);

  useEffect(() => {
    if(selectedECodeStatus) {
      setFilteredECodes(eCodes.filter((item) => item.status === selectedECodeStatus));
    }
    else {
      setFilteredECodes(eCodes)
    }
  }, [selectedECodeStatus]);


  return {
    eCodes,
    setECodes,
    eCodeStatus,
    setECodeStatus,
    selectedECodeStatus,
    setSelectedECodeStatus,
    filteredECodes
  }
}