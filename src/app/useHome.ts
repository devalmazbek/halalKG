import {MarkerData, RegionMarker} from "@/app/type";


export interface AccordionPanel {
  key: string;
  header: React.ReactNode;
  content: React.ReactNode;
}

export const useHome = () => {
  const accordianData: AccordionPanel[] = [
    {
      key: '1',
      header: 'Что такое сертификат Халал?',
      content: 'Сертификат Халал - это документ, подтверждающий соответствие продукции или услуг исламским стандартам. Он выдается после тщательной проверки всех этапов производства и используемых ингредиентов.',
    },
    {
      key: '2',
      header: 'Сколько времени занимает процесс сертификации?',
      content: 'Процесс сертификации обычно занимает от 2 до 4 недель в зависимости от сложности производства и типа продукции.',
    },
    {
      key: '3',
      header: 'Какой срок действия сертификата Халал?',
      content: 'Сертификат Халал действителен в течение 1 года с момента выдачи. После этого необходимо пройти процедуру ресертификации',
    },
    {
      key: '4',
      header: 'Признается ли сертификат Халал Даму за рубежом?',
      content: 'Да, сертификаты, выданные центром Халал Даму, признаются в странах СНГ, Ближнего Востока и Юго-Восточной Азии.',
    },
];


  const regions: RegionMarker[] = [
    { id: 'bishkek', position: [42.8746, 74.5698], popupText: 'Бишкек', zoomLevel: 12 },
    { id: 'issykul', position: [42.4911, 78.3948], popupText: 'Каракол (Иссык‑Куль)', zoomLevel: 10 },
    { id: 'jalalabad', position: [40.9375, 72.9683], popupText: 'Джалал‑Абад', zoomLevel: 10 },
    { id: 'osh', position: [40.5139, 72.8169], popupText: 'Ош', zoomLevel: 10 },
    { id: 'naryn', position: [41.4333, 75.9833], popupText: 'Нарын', zoomLevel: 10 },
    { id: 'talas', position: [42.5233, 72.2236], popupText: 'Талас', zoomLevel: 10 },
    { id: 'batken', position: [40.0560, 70.8070], popupText: 'Баткен', zoomLevel: 10 },
    { id: 'chuy', position: [42.8746, 74.5698], popupText: 'Чуйская область', zoomLevel: 12 },
  ];


  const markers: MarkerData[] = [
    { regionId: 'bishkek',  position: [42.8746,  74.5698], popupText: 'Бишкек (город республиканского значения)' },
    { regionId: 'issykul', position: [42.4911,  78.3948], popupText: 'Каракол (Иссык‑Кульская область)' },
    { regionId: 'jalalabad', position: [40.9375,  72.9683], popupText: 'Джалал‑Абад (Джалал‑Абадская область)' },
    { regionId: 'osh', position: [40.5139,  72.8169], popupText: 'Ош (Ошская область)' },
    { regionId: 'naryn', position: [41.4333,  75.9833], popupText: 'Нарын (Нарынская область)' },
    { regionId: 'talas', position: [42.5233,  72.2236], popupText: 'Талас (Таласская область)' },
    { regionId: 'batken', position: [40.0560,  70.8070], popupText: 'Баткен (Баткенская область)' },

    { regionId: 'bishkek', position: [42.8746, 74.6122], popupText: 'Площадь Ала‑Тоо' },
    { regionId: 'bishkek', position: [42.8856, 74.6091], popupText: 'Дубовый парк' },
    { regionId: 'bishkek', position: [42.8780, 74.6031], popupText: 'Площадь Победы' },
    { regionId: 'bishkek', position: [42.8619, 74.6081], popupText: 'Ботанический сад' },
    { regionId: 'bishkek', position: [42.8744, 74.6050], popupText: 'Ошский базар' },
    { regionId: 'bishkek', position: [42.8732, 74.5988], popupText: 'Улица Панфилова' },
    { regionId: 'bishkek', position: [42.8746, 74.5854], popupText: 'Белый дом' },
    { regionId: 'bishkek', position: [42.8747, 74.5846], popupText: 'Исторический музей' },
    { regionId: 'bishkek', position: [42.8820, 74.6109], popupText: 'Филармония' },
    { regionId: 'bishkek', position: [42.8745, 74.6145], popupText: 'ТЦ «Дордой Плаза»' },
  ];

  return{
    accordianData, markers, regions,
  }
}