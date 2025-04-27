"use client"

import { MobileFrame } from "@/components/layout/mobile-frame"
import { AppHeader } from "@/components/layout/app-header"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Send, ArrowRightLeft, Receipt, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function TransferPage() {
  const transferOptions = [
    {
      icon: <Send size={24} className="text-[#0D7A5F]" />,
      title: "振込・送金",
      description: "他の金融機関の口座へ送金します",
      link: "#",
    },
    {
      icon: <ArrowRightLeft size={24} className="text-[#0D7A5F]" />,
      title: "振替",
      description: "ご自身の口座間で資金を移動します",
      link: "#",
    },
    {
      icon: <Receipt size={24} className="text-[#0D7A5F]" />,
      title: "税金・各種料金の払込",
      description: "公共料金や税金などの支払いを行います",
      link: "#",
    },
  ]

  return (
    <MobileFrame>
      <AppHeader title="振込・振替" showBackButton={true} backHref="/" backIcon={<ArrowLeft size={20} />} />

      <div className="p-4 space-y-4">
        <div className="bg-[#0D7A5F]/10 p-4 rounded-lg">
          <h2 className="font-bold text-[#0D7A5F] mb-2">振込・振替サービス</h2>
          <p className="text-sm text-gray-600">
            24時間いつでも、簡単に振込・振替のお手続きが可能です。 手数料無料の取引が残り2回あります。
          </p>
        </div>

        <div className="space-y-3">
          {transferOptions.map((option, index) => (
            <Link href={option.link} key={index}>
              <Card className="hover:bg-gray-50 transition-colors mb-2">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-[#0D7A5F]/10 rounded-full flex items-center justify-center mr-4">
                        {option.icon}
                      </div>
                      <div>
                        <h3 className="font-bold">{option.title}</h3>
                        <p className="text-sm text-gray-500">{option.description}</p>
                      </div>
                    </div>
                    <ChevronRight className="text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-bold mb-2">最近の取引</h3>
          <div className="text-center text-gray-500 py-4">
            <p>最近の取引はありません</p>
          </div>
        </div>
      </div>
    </MobileFrame>
  )
}
