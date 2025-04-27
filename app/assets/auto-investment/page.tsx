"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { ChartContainer } from "@/components/ui/chart"
import { MobileFrame } from "@/components/layout/mobile-frame"
import { AppHeader } from "@/components/layout/app-header"
import Link from "next/link"

export default function AutoInvestmentPage() {
  // シミュレーションデータ
  const simulationData = [
    { year: "現在", conservative: 6954567, balanced: 6954567, aggressive: 6954567 },
    { year: "5年後", conservative: 8000000, balanced: 9500000, aggressive: 11000000 },
    { year: "10年後", conservative: 9200000, balanced: 12500000, aggressive: 16000000 },
    { year: "15年後", conservative: 10600000, balanced: 16000000, aggressive: 23000000 },
    { year: "20年後", conservative: 12200000, balanced: 21000000, aggressive: 33000000 },
    { year: "25年後", conservative: 14000000, balanced: 27000000, aggressive: 47000000 },
    { year: "30年後", conservative: 16100000, balanced: 35000000, aggressive: 68000000 },
  ]

  // チャート設定
  const chartConfig = {
    conservative: { label: "安定重視", color: "#0D7A5F" },
    balanced: { label: "バランス", color: "#1A9E78" },
    aggressive: { label: "成長重視", color: "#3CCEA0" },
  }

  // ユーザー情報
  const userInfo = {
    name: "山田 太郎",
    address: "東京都千代田区丸の内1-1-1",
    phone: "090-1234-5678",
    email: "taro.yamada@example.com",
  }

  // 数値をフォーマット（カンマ区切り）
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY", maximumFractionDigits: 0 }).format(
      value,
    )
  }

  return (
    <MobileFrame>
      {/* ヘッダー */}
      <AppHeader title="おまかせ自動運用" showBackButton={true} backHref="/assets" backIcon={<ArrowLeft size={20} />} />

      {/* メインコンテンツ */}
      <div className="p-4">
        <Card className="bg-gradient-to-r from-[#0D7A5F] to-[#1A9E78] text-white mb-6">
          <CardContent className="p-6">
            <p className="text-sm opacity-80">運用可能資産</p>
            <p className="text-2xl font-bold">¥6,954,567</p>
            <p className="text-sm mt-2">AIが最適な運用プランを提案します</p>
          </CardContent>
        </Card>

        {/* 運用シミュレーション */}
        <div className="mb-6">
          <h3 className="font-bold mb-3">運用シミュレーション</h3>
          <Tabs defaultValue="balanced" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-100">
              <TabsTrigger value="conservative">安定重視</TabsTrigger>
              <TabsTrigger value="balanced">バランス</TabsTrigger>
              <TabsTrigger value="aggressive">成長重視</TabsTrigger>
            </TabsList>

            <TabsContent value="conservative" className="mt-4">
              <div className="h-[250px] w-full">
                <ChartContainer config={chartConfig}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={simulationData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis tickFormatter={(value) => `${Math.floor(value / 1000000)}M`} />
                      <Tooltip formatter={(value) => formatCurrency(value)} />
                      <Line
                        type="monotone"
                        dataKey="conservative"
                        stroke="#0D7A5F"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
              <div className="mt-2 text-center text-sm text-gray-500">30年後の予想資産: {formatCurrency(16100000)}</div>
              <div className="mt-1 text-center text-xs text-gray-400">年平均リターン: 約3.0%（リスク: 低）</div>
            </TabsContent>

            <TabsContent value="balanced" className="mt-4">
              <div className="h-[250px] w-full">
                <ChartContainer config={chartConfig}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={simulationData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis tickFormatter={(value) => `${Math.floor(value / 1000000)}M`} />
                      <Tooltip formatter={(value) => formatCurrency(value)} />
                      <Line
                        type="monotone"
                        dataKey="balanced"
                        stroke="#1A9E78"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
              <div className="mt-2 text-center text-sm text-gray-500">30年後の予想資産: {formatCurrency(35000000)}</div>
              <div className="mt-1 text-center text-xs text-gray-400">年平均リターン: 約5.5%（リスク: 中）</div>
            </TabsContent>

            <TabsContent value="aggressive" className="mt-4">
              <div className="h-[250px] w-full">
                <ChartContainer config={chartConfig}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={simulationData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis tickFormatter={(value) => `${Math.floor(value / 1000000)}M`} />
                      <Tooltip formatter={(value) => formatCurrency(value)} />
                      <Line
                        type="monotone"
                        dataKey="aggressive"
                        stroke="#3CCEA0"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
              <div className="mt-2 text-center text-sm text-gray-500">30年後の予想資産: {formatCurrency(68000000)}</div>
              <div className="mt-1 text-center text-xs text-gray-400">年平均リターン: 約8.0%（リスク: 高）</div>
            </TabsContent>
          </Tabs>
        </div>

        {/* 口座開設 */}
        <div className="mb-6">
          <h3 className="font-bold mb-3">口座開設</h3>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-gray-500 mb-4">
                以下の情報で口座を開設します。情報に誤りがある場合は修正してください。
              </p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <p className="text-sm text-gray-500">氏名</p>
                  <p className="font-medium">{userInfo.name}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-500">住所</p>
                  <p className="font-medium">{userInfo.address}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-500">電話番号</p>
                  <p className="font-medium">{userInfo.phone}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-500">メールアドレス</p>
                  <p className="font-medium">{userInfo.email}</p>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <Button variant="outline" className="w-full mb-3">
                  情報を修正する
                </Button>
                <Link href="/assets/auto-investment/settings" className="w-full">
                  <Button className="w-full bg-[#0D7A5F] hover:bg-[#0A6A50]">このままはじめる</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MobileFrame>
  )
}
