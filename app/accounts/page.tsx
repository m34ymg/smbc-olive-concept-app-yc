"use client"

import { MobileFrame } from "@/components/layout/mobile-frame"
import { Card, CardContent } from "@/components/ui/card"
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { ChartContainer } from "@/components/ui/chart"
import { RefreshCw, HelpCircle, ChevronRight, Plus, Phone } from "lucide-react"
import { formatCurrency } from "@/utils/format"
import Link from "next/link"

export default function AccountsPage() {
  // 残高合計
  const totalBalance = 1597826

  // 資産データ
  const assetData = [
    { name: "普通", value: 787715, color: "#0D7A5F", percentage: "30%" },
    { name: "定期", value: 787715, color: "#8BC34A", percentage: "30%" },
    { name: "外貨", value: 287715, color: "#2196F3", percentage: "10%" },
    { name: "投信", value: 0, color: "#00BCD4", percentage: "5%" },
    { name: "債券", value: 0, color: "#FFC107", percentage: "-%" },
    { name: "日興", value: 587715, color: "#E91E63", percentage: "25%" },
    { name: "信託", value: 0, color: "#9C27B0", percentage: "-%" },
  ]

  // 口座データ
  const accountData = [
    {
      type: "残高別普通(総合)",
      branch: "赤坂 支店",
      accountNumber: "08563171",
      balance: 1597715,
    },
    {
      type: "定期",
      branch: "赤坂 支店",
      accountNumber: "00632387",
      balance: 0,
    },
    {
      type: "外貨",
      branch: "赤坂 支店",
      accountNumber: "00136474",
      balance: 111,
    },
  ]

  return (
    <MobileFrame>
      <div className="bg-gray-100 min-h-full">
        {/* ヘッダー */}
        <div className="p-4 bg-white flex justify-between items-center">
          <h1 className="text-2xl font-bold">口座一覧</h1>
          <div className="flex space-x-4">
            <RefreshCw size={24} className="text-[#0D7A5F]" />
            <HelpCircle size={24} className="text-[#0D7A5F]" />
          </div>
        </div>

        {/* 残高合計 */}
        <div className="p-4 bg-white">
          <p className="text-gray-600">残高合計</p>
          <p className="text-4xl font-bold">
            {formatCurrency(totalBalance).replace("￥", "")} <span className="text-xl">円</span>
          </p>
        </div>

        {/* 資産配分チャート */}
        <div className="p-4 bg-white flex justify-between items-center">
          <div className="w-1/2">
            <ChartContainer
              config={Object.fromEntries(
                assetData
                  .filter((item) => item.value > 0)
                  .map((item) => [item.name, { label: item.name, color: item.color }]),
              )}
            >
              <ResponsiveContainer width="100%" height={250}>
                <RechartsPieChart>
                  <Pie
                    data={assetData.filter((item) => item.value > 0)}
                    cx="50%"
                    cy="50%"
                    innerRadius={20}
                    outerRadius={40}
                    paddingAngle={0}
                    dataKey="value"
                  >
                    {assetData
                      .filter((item) => item.value > 0)
                      .map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                  </Pie>
                </RechartsPieChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="text-center">
              <p className="text-sm">現在</p>
            </div>
          </div>

          <div className="w-1/2">
            <ChartContainer
              config={{
                active: { label: "余っているお金を活用", color: "#00BCD4" },
                inactive: { label: "未活用", color: "#E0E0E0" },
              }}
            >
              <ResponsiveContainer width="100%" height={250}>
                <RechartsPieChart>
                  <Pie
                    data={[
                      { name: "active", value: 20 },
                      { name: "inactive", value: 80 },
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={20}
                    outerRadius={40}
                    paddingAngle={0}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                  >
                    <Cell fill="#00BCD4" />
                    <Cell fill="#E0E0E0" />
                  </Pie>
                </RechartsPieChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="text-center">
              <p className="text-sm text-[#00BCD4]">余っているお金を活用</p>
            </div>
          </div>
        </div>

        {/* 資産配分リスト */}
        <div className="px-4 py-2 bg-white flex flex-wrap">
          {assetData.map((asset, index) => (
            <div key={index} className="flex items-center mr-4 mb-2">
              <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: asset.color }}></div>
              <span className="text-sm">
                {asset.name} {asset.percentage}
              </span>
            </div>
          ))}
        </div>

        {/* 資産比率非表示ボタン */}
        <div className="p-2 bg-white flex justify-end">
          <button className="text-[#0D7A5F] text-sm flex items-center">
            資産比率を非表示 <ChevronRight size={16} />
          </button>
        </div>

        {/* 運用ボタン */}
        <div className="p-4 bg-white">
          <button className="w-full bg-[#0D7A5F] text-white py-3 rounded-full font-bold mb-3">
            1万円から始める運用へ
          </button>
          <Link href="/analytics">
            <button className="w-full bg-[#2196F3] text-white py-3 rounded-full font-bold">
              ポートフォリオのAI分析へ
            </button>
          </Link>
        </div>

        {/* 銀行セクション */}
        <div className="mt-4 p-4 bg-white">
          <h2 className="text-lg font-bold mb-2">銀行</h2>
          <Card className="mb-4">
            <CardContent className="p-0">
              <div className="p-4 flex justify-between items-center border-b">
                <p className="font-bold">三井住友銀行 合計</p>
                <div className="flex items-center">
                  <p className="font-bold text-xl mr-1">{formatCurrency(totalBalance).replace("￥", "")}</p>
                  <p>円</p>
                  <ChevronRight size={20} className="ml-2 text-gray-400" />
                </div>
              </div>

              {accountData.map((account, index) => (
                <div key={index} className="p-4 border-b">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold">{account.type}</p>
                      <p className="text-sm text-gray-500">
                        {account.branch} {account.accountNumber}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p className="font-bold text-xl mr-1">{formatCurrency(account.balance).replace("￥", "")}</p>
                      <p>円</p>
                      <ChevronRight size={20} className="ml-2 text-gray-400" />
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* 他の口座を開設 */}
          <div className="p-4 border-b flex items-center">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
              <Plus size={20} className="text-[#0D7A5F]" />
            </div>
            <p className="font-medium">他の口座を開設・お取引</p>
          </div>

          {/* 資産運用について相談 */}
          <div className="p-4 border rounded-lg mt-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0D7A5F] to-[#8BC34A] flex items-center justify-center mr-3">
                <Phone size={20} className="text-white" />
              </div>
              <div>
                <p className="font-medium">資産運用についてご相談</p>
                <p className="text-sm text-gray-500">電話する</p>
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
        </div>

        {/* 証券セクション */}
        <div className="mt-4 p-4 bg-white">
          <h2 className="text-lg font-bold mb-2">証券</h2>
          <Card>
            <CardContent className="p-4">
              <p className="font-medium mb-3">SMBC日興証券と直接連携してスムーズにお取引</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white border rounded p-1 mr-2">
                    <div className="w-full h-full bg-[#0D7A5F]"></div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-red-500 mr-1">→</div>
                    <div className="font-bold text-[#E91E63]">SMBC日興証券</div>
                  </div>
                </div>
                <button className="bg-white border border-[#0D7A5F] text-[#0D7A5F] px-4 py-2 rounded-full flex items-center">
                  <span className="mr-1">連携する</span>
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 信託銀行セクション */}
        <div className="mt-4 p-4 bg-white mb-20">
          <h2 className="text-lg font-bold mb-2">信託銀行</h2>
          <Card>
            <CardContent className="p-4">
              <p className="font-medium mb-3">SMBC信託銀行と連携して残高やお取引を確認</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white border rounded p-1 mr-2 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#9C27B0] to-[#2196F3]"></div>
                  </div>
                  <div className="font-bold">PRESTIA</div>
                </div>
                <button className="bg-white border border-[#0D7A5F] text-[#0D7A5F] px-4 py-2 rounded-full flex items-center">
                  <span className="mr-1">連携する</span>
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MobileFrame>
  )
}
