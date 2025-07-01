"use client"

import { useState } from "react"
import { Button, Input } from 'antd';

export default function CertificateVerification() {
  const [certificateNumber, setCertificateNumber] = useState("")
  const [verificationStatus, setVerificationStatus] = useState<"idle" | "valid" | "invalid">("idle")
  const [isLoading, setIsLoading] = useState(false)

  const handleVerify = () => {
    if (!certificateNumber) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      // For demo purposes, let's say certificates starting with "HD" are valid
      if (certificateNumber.toUpperCase().startsWith("HD")) {
        setVerificationStatus("valid")
      } else {
        setVerificationStatus("invalid")
      }
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4">Проверка подлинности сертификата</h3>
      <p className="text-gray-600 mb-6">
        Введите номер сертификата для проверки его подлинности. Номер сертификата указан в верхней части документа.
      </p>

      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Например: HD-2023-12345"
            value={certificateNumber}
            onChange={(e:any) => setCertificateNumber(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button>
          {isLoading ? "Проверка..." : "Проверить"}
        </Button>
      </div>

      {verificationStatus === "valid" && (
        <div className="flex items-center gap-3 p-4 bg-green-50 text-green-700 rounded-lg">
          <div>
            <p className="font-medium">Сертификат действителен</p>
            <p className="text-sm">Сертификат с номером {certificateNumber} является подлинным и действующим.</p>
          </div>
        </div>
      )}

      {verificationStatus === "invalid" && (
        <div className="flex items-center gap-3 p-4 bg-red-50 text-red-700 rounded-lg">
          <div>
            <p className="font-medium">Сертификат не найден</p>
            <p className="text-sm">Сертификат с номером {certificateNumber} не найден в нашей базе данных.</p>
          </div>
        </div>
      )}

      <div className="mt-6 text-sm text-gray-500">
        <p>Примечание: Для демонстрации, сертификаты начинающиеся с "HD" будут считаться действительными.</p>
      </div>
    </div>
  )
}