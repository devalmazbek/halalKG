// components/companies/CompanyFilters.tsx
import React, { useState } from "react"

interface CompanyFiltersProps {
  regions: string[]
  businessTypes: string[]
  specializations: string[]
  onApply: (filters: {
    region: string
    businessType: string
    specialization: string
  }) => void
}

export const CompanyFilters: React.FC<CompanyFiltersProps> = ({
  regions,
  businessTypes,
  specializations,
  onApply,
}) => {
  const [region, setRegion] = useState("all")
  const [businessType, setBusinessType] = useState("")
  const [specialization, setSpecialization] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onApply({ region, businessType, specialization })
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded mb-7">
      <div>
        <h2 className="text-xl font-semibold mb-4">Фильтры</h2>
        <div className="grid md:grid-cols-4 gap-4 items-end">
          <div>
            <label className="block mb-1 text-sm font-medium">Регион</label>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="all">Все регионы</option>
              {regions.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Тип бизнеса</label>
            <select
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="">Все</option>
              {businessTypes.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Специализация</label>
            <select
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="">Все</option>
              {specializations.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-green-700 text-white px-4 py-2 rounded w-full md:w-auto"
          >
            Применить фильтры
          </button>
        </div>
      </div>

    </form>
  )
}
