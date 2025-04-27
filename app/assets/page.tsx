"use client"

import { ArrowUpRight, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import { MobileFrame } from "@/components/layout/mobile-frame"
import { AppHeader } from "@/components/layout/app-header"
import Link from "next/link"

export default function AssetsPage() {
  // 資産データ
  const assetData = [
    { name: "預金", value: 1234567, color: "#0D7A5F" },
    { name: "株式", value: 2450000, color: "#1A9E78" },
    { name: "投資信託", value: 1870000, color: "#3CCEA0" },
    { name: "債券", value: 980000, color: "#6EDDBF" },
    { name: "その他", value: 420000, color: "#A5EAD7" },
  ]

  // 総資産額を計算
  const totalAssets = assetData.reduce((sum, item) => sum + item.value, 0)

  // 資産割合を計算
  const assetPercentages = assetData.map((item) => ({
    ...item,
    percentage: ((item.value / totalAssets) * 100).toFixed(1),
  }))

  // チャート用データ
  const chartData = assetData.map((item) => ({
    name: item.name,
    value: item.value,
    percentage: ((item.value / totalAssets) * 100).toFixed(1),
  }))

  // 数値をフォーマット（カンマ区切り）
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(value)
  }

  return (
    <MobileFrame>
      {/* ヘッダー */}
      <AppHeader title="Olive" showSubtitle={true} />

      {/* メインコンテンツ */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">資産構成</h2>

        {/* 総資産カード */}
        <Card className="bg-gradient-to-r from-[#0D7A5F] to-[#1A9E78] text-white mb-6">
          <CardContent className="p-6">
            <p className="text-sm opacity-80">総資産</p>
            <p className="text-2xl font-bold">{formatCurrency(totalAssets)}</p>
            <div className="flex items-center mt-2 text-sm">
              <ArrowUpRight className="mr-1" size={16} />
              <span>前月比 +3.2%</span>
            </div>
          </CardContent>
        </Card>

        {/* 資産構成タブ */}
        <Tabs defaultValue="chart" className="w-full mb-6">
          <TabsList className="grid w-full grid-cols-2 bg-gray-100">
            <TabsTrigger value="chart">グラフ</TabsTrigger>
            <TabsTrigger value="list">一覧</TabsTrigger>
          </TabsList>

          <TabsContent value="chart" className="mt-4">
            {/* パイチャート */}
            <div className="h-[300px] w-full">
              <ChartContainer
                config={Object.fromEntries(
                  assetData.map((item) => [item.name, { label: item.name, color: item.color }]),
                )}
                className="[&_.recharts-wrapper]:!overflow-visible"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, payload, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                      labelLine={false}
                    >
                      {assetData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<ChartTooltipContent />} />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </TabsContent>

          <TabsContent value="list" className="mt-4">
            {/* 資産一覧 */}
            <div className="space-y-3">
              {assetPercentages.map((asset, index) => (
                <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: asset.color }}></div>
                    <div>
                      <p className="font-medium">{asset.name}</p>
                      <p className="text-sm text-gray-500">{asset.percentage}%</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">{formatCurrency(asset.value)}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* 資産管理オプション */}
        <h3 className="font-bold mb-3">資産管理</h3>
        <div className="space-y-2">
          {[
            { name: "投資信託", description: "積立・購入・解約" },
            { name: "株式", description: "保有株式・取引" },
            { name: "外貨預金", description: "外貨預金・為替" },
            { name: "おまかせ自動運用", description: "AIによる最適な資産運用", link: "/assets/auto-investment" },
            { name: "資産運用シミュレーション", description: "将来の資産をシミュレーション" },
          ].map((option, i) => (
            <div key={i} className="flex justify-between items-center p-3 border rounded-lg">
              {option.link ? (
                <Link href={option.link} className="flex justify-between items-center w-full">
                  <div>
                    <p className="font-medium">{option.name}</p>
                    <p className="text-sm text-gray-500">{option.description}</p>
                  </div>
                  <ChevronRight className="text-gray-400" />
                </Link>
              ) : (
                <>
                  <div>
                    <p className="font-medium">{option.name}</p>
                    <p className="text-sm text-gray-500">{option.description}</p>
                  </div>
                  <ChevronRight className="text-gray-400" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </MobileFrame>
  )
}
