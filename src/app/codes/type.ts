export interface ECode {
  code: string
  name: string
  nameRu: string
  category: string
  status: "halal" | "haram" | "mushbooh" | "unknown"
  source: string
  description: string
  descriptionRu: string
}

export interface ECodeCategories {
  id: string;
  name: string;
}

export interface ECodeStatusMapItem {
  label: string;
  description: string;
  status: string;
}

export type ECodeStatusMap =  {
  halal: ECodeStatusMapItem;
  haram: ECodeStatusMapItem;
  mushbooh: ECodeStatusMapItem;
  unknown: ECodeStatusMapItem;
}