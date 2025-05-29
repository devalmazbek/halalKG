import React from "react"

type Status = "active" | "expired" | "suspended"

interface StatusFilterProps {
  current: Status,
  statuses: string[],
  onChange: (status: Status) => void,
}

export const StatusFilter: React.FC<StatusFilterProps> = ({ current, statuses, onChange }) => {
  return (
    <div className="mb-6 flex gap-4">
      {statuses.map((status: string) => {
        const typedStatus = status as Status
        return (
          <button
            key={status}
            onClick={() => onChange(typedStatus)}
            className={`px-4 py-1 rounded-full text-sm border transition-colors
              ${current === status
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-800"}`}
          >
            {status === "active"
            ? "Активные"
            : status === "expired"
            ? "Истёкшие"
            : "Приостановленные"}
          </button>
        )
      })}
    </div>
  )
}

