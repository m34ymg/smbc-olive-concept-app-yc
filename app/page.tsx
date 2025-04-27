"use client"

import { Bell, ChevronRight, RefreshCw, HelpCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { MobileFrame } from "@/components/layout/mobile-frame"

export default function HomePage() {
  return (
    <MobileFrame>
      {/* ヘッダー */}
      <header className="bg-[#0D7A5F] text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <div className="w-5 h-5 bg-[#C5E86C] mr-1"></div>
            <div className="font-bold text-xl">SMBC</div>
          </div>
        </div>
        <div className="flex gap-3">
          <Bell size={20} />
          <HelpCircle size={20} />
        </div>
      </header>

      {/* カードセクション */}
      <div className="p-4 bg-[#0D7A5F] space-y-4">
        {/* カード情報 */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <div className="w-10 h-6 bg-gray-700 rounded mr-2 flex items-center justify-center">
              <div className="w-6 h-1 bg-[#0D7A5F]"></div>
            </div>
            <span className="text-white text-xl font-bold">Olive</span>
          </div>
          <div className="flex items-center text-white text-sm">
            <RefreshCw size={14} className="mr-1" />
            <span>10:30 現在</span>
          </div>
        </div>

        {/* 口座残高カード */}
        <Card className="bg-white rounded-lg shadow">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-2">
              <div className="font-bold">口座残高</div>
              <ChevronRight className="text-gray-400" size={20} />
            </div>
            <div className="text-gray-500 text-sm mb-1">普通預金 0123456</div>
            <div className="flex justify-between items-center mb-4">
              <div className="text-3xl font-bold">
                1,234,567 <span className="text-sm">円</span>
              </div>
              <div className="text-[#0D7A5F] font-bold">詳細表示</div>
            </div>
            <div className="flex border-t pt-3">
              <div className="flex-1 border-r pr-2">
                <div className="text-center text-sm">コンビニATM手数料</div>
                <div className="text-center font-bold">あと 1 回無料</div>
              </div>
              <div className="flex-1 pl-2 flex items-center justify-between">
                <div>
                  <div className="text-sm">振込手数料</div>
                  <div className="font-bold">あと 1 回無料</div>
                </div>
                <ChevronRight className="text-gray-400" size={20} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* クレジットカード情報 */}
        <Card className="bg-white rounded-lg shadow">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <div className="bg-[#0D7A5F] text-white px-3 py-1 rounded-md text-sm font-bold mr-2">
                  クレジットモード
                </div>
                <div className="text-sm">に設定中</div>
              </div>
              <ChevronRight className="text-gray-400" size={20} />
            </div>
            <div className="text-gray-500 text-sm mb-1">2021年3月15日 お支払い金額</div>
            <div className="flex justify-between items-center mb-4">
              <div className="text-3xl font-bold">
                125,000 <span className="text-sm">円</span>
              </div>
              <div className="text-[#0D7A5F] font-bold">詳細表示</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                  7
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                  L
                </div>
                <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs">
                  M
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-sm mr-2">
                  あなたは最大 <span className="text-orange-500 font-bold">5</span> % 還元
                </div>
                <ChevronRight className="text-gray-400" size={20} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vポイント情報 */}
        <Card className="bg-white rounded-lg shadow">
          <CardContent className="p-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#0D7A5F] rounded-md flex items-center justify-center text-white font-bold mr-2">
                V
              </div>
              <div className="font-bold">Vポイント</div>
            </div>
            <div className="flex items-center">
              <div className="text-xl font-bold mr-1">1,024</div>
              <div className="text-sm mr-1">P</div>
              <ChevronRight className="text-gray-400" size={20} />
            </div>
          </CardContent>
        </Card>

        {/* アドバイスカード */}
        <Card className="bg-white rounded-lg shadow mt-4">
          <CardContent className="p-4">
            <div className="flex">
              <div className="w-16 h-16 bg-yellow-100 rounded-md flex items-center justify-center mr-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              </div>
              <div className="flex-1">
                <p className="text-sm mb-2">
                  <span className="text-blue-500">過去6ヶ月で平均月に12,000円</span>
                  <span>使っています。そのお金でもう少し資産を増やす方法をご案内します。</span>
                </p>
                <div className="flex justify-end">
                  <div className="text-[#0D7A5F] font-bold text-sm">余剰資金の使い道</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MobileFrame>
  )
}
