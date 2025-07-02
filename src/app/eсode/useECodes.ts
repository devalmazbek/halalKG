import {useState} from "react";
import {ECode, ECodeCategories, ECodeStatusMap} from "./type";
import {eCodesData, eCodeCategoriesData, eCodeStatusMapData} from "./data";

export const useECodes = () => {
  const [eCodes, setECodes] = useState<ECode[]>(eCodesData ?? []);
  const [eCodeCategories, setECodeCategories] = useState<ECodeCategories[]>(eCodeCategoriesData ?? []);
  const [eCodeStatus, setECodeStatus] = useState<ECodeStatusMap>(eCodeStatusMapData ?? []);


  return {
    eCodes,
    setECodes,
  }
}