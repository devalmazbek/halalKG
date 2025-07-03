"use client";
import React from 'react';

import {ECodeCard} from "@/components/e-code";
import {Badge} from "@/components/ui/badge";

import {useECodes} from "@/app/codes/useECodes";
import {ECode} from "@/app/codes/type";

export default function CodesPage () {
  const {eCodes, eCodeStatus, setECodeStatus, setSelectedECodeStatus, selectedECodeStatus, filteredECodes} = useECodes();

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Что такое Е-коды?</h2>
          <p className="text-gray-700 mb-4">
            Е-коды — это коды, используемые в Европейском союзе для обозначения пищевых добавок. Буква "Е" означает
            "Европа", а следующие за ней цифры обозначают конкретную добавку. Эти коды используются для идентификации
            веществ, которые могут быть добавлены в пищевые продукты для выполнения определенных технологических
            функций, таких как консервирование, окрашивание или ароматизация.
          </p>
          <p className="text-gray-700 mb-4">
            Для мусульман важно знать статус халяльности этих добавок, поскольку некоторые из них могут быть получены
            из запрещенных (харам) источников, таких как свинина или непрошедшие халяльный забой животные.
          </p>
          <p className="text-gray-700">
            На этой странице представлена информация о статусе халяльности различных Е-кодов, которая поможет вам
            сделать осознанный выбор при покупке продуктов питания.
          </p>
        </div>

        <div className="mb-5">
          <h3 className="text-sm font-medium mb-2">Статус:</h3>
          <div className="flex flex-wrap gap-2 cursor-pointer">
            {Object.entries(eCodeStatus).map(([key, value]) => (
              <Badge
                key={value.label}
                variant={value.status}
                onClick={() => setSelectedECodeStatus(value.status)}
              >
                {value.label}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredECodes.map((code: ECode)=> {
            return(
              <ECodeCard item={code} key={code.code} />
            )
          })}
        </div>
      </div>
    </section>
  );
}