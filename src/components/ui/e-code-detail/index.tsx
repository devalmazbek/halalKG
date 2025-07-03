"use client";

import React from "react";

import {ECode} from "@/app/codes/type";

interface Props {
  eCode: ECode;
}

export const ECodeDetails: React.FC<Props> = ({eCode}) => {
  return (
    <div>
      <div className="p-6">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Основная информация</h3>
            <dl className="space-y-2">
              <div>
                <dt className="text-sm text-gray-500">Название (RU)</dt>
                <dd className="font-medium">{eCode.nameRu}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Название (EN)</dt>
                <dd>{eCode.name}</dd>
              </div>
              {/*<div>*/}
              {/*  <dt className="text-sm text-gray-500">Категория</dt>*/}
              {/*  <dd>{eCodeCategories.find((cat) => cat.id === eCode.category)?.name}</dd>*/}
              {/*</div>*/}
              <div>
                <dt className="text-sm text-gray-500">Источник</dt>
                <dd>{eCode.source}</dd>
              </div>
            </dl>
          </div>

          {/*<div>*/}
          {/*  <h3 className="text-lg font-semibold mb-4">Статус халяльности</h3>*/}
          {/*  <div className={`p-4 rounded-lg ${eCodeStatusMap[eCode.status].color}`}>*/}
          {/*    <p className="font-medium">{eCodeStatusMap[eCode.status].label}</p>*/}
          {/*    <p className="text-sm">{eCodeStatusMap[eCode.status].description}</p>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Описание</h3>
          <p className="text-gray-700">{eCode.descriptionRu}</p>
          <p className="text-sm text-gray-500">{eCode.description}</p>
        </div>

        <div className="mt-8 pt-4 border-t">
          <h3 className="text-lg font-semibold mb-4">Рекомендации</h3>
          {eCode.status === "halal" && (
            <p className="text-green-700">
              Данная добавка разрешена для употребления мусульманами и соответствует стандартам Халяль.
            </p>
          )}
          {eCode.status === "haram" && (
            <p className="text-red-700">
              Данная добавка запрещена для употребления мусульманами, так как получена из запрещенных источников или
              содержит запрещенные компоненты.
            </p>
          )}
          {eCode.status === "mushbooh" && (
            <p className="text-amber-700">
              Статус данной добавки является сомнительным. Рекомендуется избегать продуктов с этой добавкой или
              уточнять у производителя источник ее происхождения.
            </p>
          )}
          {eCode.status === "unknown" && (
            <p className="text-gray-700">
              Статус данной добавки не определен. Рекомендуется проявлять осторожность и по возможности уточнять у
              производителя источник ее происхождения.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}