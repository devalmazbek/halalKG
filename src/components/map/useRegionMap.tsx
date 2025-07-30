import { useState, useMemo } from 'react';

interface Marker {
  position: [number, number];
  popupText: string;
}

interface Region {
  id: string;
  name: string;
  center: [number, number];
  defaultZoom: number;
}

export const useRegionsMap = () => {
  const regionsData: Region[] = [
    { id: 'bishkek', name: 'Бишкек', center: [42.8746, 74.5698], defaultZoom: 12 },
    { id: 'osh', name: 'Ош', center: [40.5156, 72.8033], defaultZoom: 12 },
    { id: 'jalalabad', name: 'Джалал-Абад', center: [40.9375, 72.9783], defaultZoom: 12 },
    { id: 'issykul', name: 'Иссык-Куль', center: [42.4911, 78.3948], defaultZoom: 10 },
    { id: 'naryn', name: 'Нарын', center: [41.4287, 75.9911], defaultZoom: 12 },
    { id: 'talas', name: 'Талас', center: [42.5217, 72.2228], defaultZoom: 12 },
    { id: 'batken', name: 'Баткен', center: [40.0560, 70.8070], defaultZoom: 12 },
    { id: 'chuy', name: 'Чуйская область', center: [42.4547, 74.5862], defaultZoom: 10 },
  ];

  const markersData: Record<string, Marker[]> = {
    bishkek: [
      { position: [42.8746, 74.5698], popupText: 'Центр Бишкека' },
      { position: [42.8275, 74.6069], popupText: 'Аэропорт Манас' },
      { position: [42.8782, 74.5998], popupText: 'Площадь Ала-Тоо' },
      { position: [42.8665, 74.5897], popupText: 'Ошский рынок' },
    ],
    osh: [
      { position: [40.5156, 72.8033], popupText: 'Центр Оша' },
      { position: [40.5286, 72.7985], popupText: 'Гора Сулайман-Тоо' },
      { position: [40.5204, 72.7859], popupText: 'Восточный базар' },
    ],
    jalalabad: [
      { position: [40.9375, 72.9783], popupText: 'Центр Джалал-Абада' },
      { position: [40.9333, 72.9667], popupText: 'Рынок Кыргызстан' },
      { position: [40.9250, 72.9900], popupText: 'Университет' },
    ],
    issykul: [
      { position: [42.4911, 78.3948], popupText: 'Каракол' },
      { position: [42.6500, 77.0833], popupText: 'Чолпон-Ата' },
      { position: [42.7256, 78.3800], popupText: 'Бостери' },
      { position: [42.1447, 77.1772], popupText: 'Тамга' },
    ],
    naryn: [
      { position: [41.4287, 75.9911], popupText: 'Центр Нарына' },
      { position: [41.4410, 76.0000], popupText: 'Областная больница' },
      { position: [41.1700, 75.2000], popupText: 'Торугарт' },
    ],
    talas: [
      { position: [42.5217, 72.2228], popupText: 'Центр Таласа' },
      { position: [42.4500, 72.2000], popupText: 'Манас Ордо' },
      { position: [42.5333, 72.2333], popupText: 'Областная администрация' },
    ],
    batken: [
      { position: [40.0560, 70.8070], popupText: 'Центр Баткена' },
      { position: [40.0500, 70.8200], popupText: 'Аэропорт Баткен' },
      { position: [40.0620, 70.8000], popupText: 'Областной музей' },
    ],
    chuy: [
      { position: [42.4547, 74.5862], popupText: 'Токмок' },
      { position: [42.8167, 75.2833], popupText: 'Кант' },
      { position: [42.4833, 78.4000], popupText: 'Балыкчы' },
      { position: [42.8333, 75.3000], popupText: 'Кара-Балта' },
    ],
  };

  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  // Текущий выбранный регион
  const currentRegion = useMemo(() => {
    return regionsData.find(region => region.id === activeRegion);
  }, [activeRegion]);

  // Маркеры для активного региона или все маркеры если регион не выбран
  const markers = useMemo(() => {
    if (!activeRegion) {
      return Object.values(markersData).flat();
    }
    return markersData[activeRegion] || [];
  }, [activeRegion]);

  // Центр карты - текущий регион или центр Кыргызстана
  const center = useMemo(() => {
    return currentRegion?.center || [41.2044, 74.7661] as [number, number]; // Центр Кыргызстана
  }, [currentRegion]);

  // Зум - для региона или общий
  const zoom = useMemo(() => {
    return currentRegion?.defaultZoom || 6;
  }, [currentRegion]);

  // Выбор региона
  const selectRegion = (regionId: string | null) => {
    setActiveRegion(regionId);
  };

  // Сброс выбора региона (показать всю страну)
  const resetRegion = () => {
    setActiveRegion(null);
  };

  return {
    regions: regionsData,
    markers,
    center,
    zoom,
    activeRegion,
    selectRegion,
    resetRegion,
  };
};