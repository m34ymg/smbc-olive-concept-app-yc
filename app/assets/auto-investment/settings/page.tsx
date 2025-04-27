"use client"

import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import { MobileFrame } from "@/components/layout/mobile-frame"
import { AppHeader } from "@/components/layout/app-header"
import { useState } from "react"

export default function InvestmentSettingsPage() {
  const [monthlyAmount, setMonthlyAmount] = useState(30000)
  const [summerBonusEnabled, setSummerBonusEnabled] = useState(true)
  const [summerBonusAmount, setSummerBonusAmount] = useState(100000)
  const [winterBonusEnabled, setWinterBonusEnabled] = useState(true)
  const [winterBonusAmount, setWinterBonusAmount] = useState(100000)
  const [depositAmount, setDepositAmount] = useState("")
  const [withdrawAmount, setWithdrawAmount] = useState("")
  const [expandedAsset, setExpandedAsset] = useState<string | null>(null)

  // 運用タイプ（前のページで選択したものを想定）
  const investmentType = "balanced" // balanced, conservative, aggressive

  // ポートフォリオデータ
  const portfolioData = {
    balanced: [
      { name: "国内株式", value: 30, color: "#0D7A5F" },
      { name: "海外株式", value: 30, color: "#1A9E78" },
      { name: "国内債券", value: 15, color: "#3CCEA0" },
      { name: "海外債券", value: 15, color: "#6EDDBF" },
      { name: "不動産", value: 5, color: "#A5EAD7" },
      { name: "現金等", value: 5, color: "#D0F4EA" },
    ],
    conservative: [
      { name: "国内株式", value: 15, color: "#0D7A5F" },
      { name: "海外株式", value: 15, color: "#1A9E78" },
      { name: "国内債券", value: 30, color: "#3CCEA0" },
      { name: "海外債券", value: 30, color: "#6EDDBF" },
      { name: "不動産", value: 0, color: "#A5EAD7" },
      { name: "現金等", value: 10, color: "#D0F4EA" },
    ],
    aggressive: [
      { name: "国内株式", value: 40, color: "#0D7A5F" },
      { name: "海外株式", value: 40, color: "#1A9E78" },
      { name: "国内債券", value: 5, color: "#3CCEA0" },
      { name: "海外債券", value: 5, color: "#6EDDBF" },
      { name: "不動産", value: 10, color: "#A5EAD7" },
      { name: "現金等", value: 0, color: "#D0F4EA" },
    ],
  }

  // 資産クラスの詳細情報
  const assetDetails = {
    国内株式:
      "日本の株式市場に上場している企業の株式に投資します。日経平均株価やTOPIXに連動する投資信託を中心に運用します。",
    海外株式:
      "米国や欧州、新興国などの海外株式市場に投資します。S&P500やMSCI-KOKUSAIに連動する投資信託を中心に運用します。",
    国内債券: "日本国債や日本の企業が発行する社債に投資します。安定した利回りを目指します。",
    海外債券:
      "米国債や欧州国債、新興国債券などに投資します。為替リスクをヘッジしたものと、ヘッジしていないものをバランスよく保有します。",
    不動産: "国内外の不動産投資信託（REIT）に投資します。安定した配当収入と値上がり益を目指します。",
    現金等: "短期金融資産や預金等の流動性の高い資産で運用します。市場の急変時に備えた安全資産です。",
  }

  // 入出金履歴
  const transactionHistory = [
    { date: "2023/04/15", type: "入金", amount: "100,000円" },
    { date: "2023/03/10", type: "入金", amount: "50,000円" },
    { date: "2023/02/05", type: "出金", amount: "30,000円" },
  ]

  // 運用タイプの表示名
  const investmentTypeNames = {
    balanced: "バランス型",
    conservative: "安定重視型",
    aggressive: "成長重視型",
  }

  // 数値をフォーマット（カンマ区切り）
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY", maximumFractionDigits: 0 }).format(
      value,
    )
  }

  // 月々の積立金額を変更
  const handleMonthlyAmountChange = (value) => {
    setMonthlyAmount(value[0])
  }

  // 入力フィールドから月々の積立金額を変更
  const handleMonthlyInputChange = (e) => {
    const value = Number.parseInt(e.target.value.replace(/[^0-9]/g, ""))
    if (!isNaN(value)) {
      setMonthlyAmount(value)
    } else {
      setMonthlyAmount(0)
    }
  }

  // 資産クラスの詳細表示を切り替え
  const toggleAssetDetails = (assetName) => {
    if (expandedAsset === assetName) {
      setExpandedAsset(null)
    } else {
      setExpandedAsset(assetName)
    }
  }

  return (
    <MobileFrame>
      {/* ヘッダー */}
      <AppHeader
        title="運用設定"
        showBackButton={true}
        backHref="/assets/auto-investment"
        backIcon={<ArrowLeft size={20} />}
      />

      {/* メインコンテンツ */}
      <div className="p-4">
        <Tabs defaultValue="portfolio" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-100">
            <TabsTrigger value="portfolio">ポートフォリオ</TabsTrigger>
            <TabsTrigger value="monthly">積立設定</TabsTrigger>
            <TabsTrigger value="deposit">入出金</TabsTrigger>
          </TabsList>

          {/* ポートフォリオタブ */}
          <TabsContent value="portfolio" className="mt-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold">あなたのおすすめ運用タイプ</h3>
                  <span className="bg-[#0D7A5F] text-white px-3 py-1 rounded-full text-sm">
                    {investmentTypeNames[investmentType]}
                  </span>
                </div>

                <div className="h-[260px] w-full mb-4">
                  <ChartContainer
                    config={Object.fromEntries(
                      portfolioData[investmentType].map((item) => [item.name, { label: item.name, color: item.color }]),
                    )}
                    className="[&_.recharts-wrapper]:!overflow-visible"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={portfolioData[investmentType]}
                          cx="50%"
                          cy="50%"
                          innerRadius={30}
                          outerRadius={75}
                          paddingAngle={2}
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}%`}
                          labelLine={true}
                          labelLine={{ stroke: "#555", strokeWidth: 0.5 }}
                        >
                          {portfolioData[investmentType].map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip content={<ChartTooltipContent />} />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>

                <div className="space-y-2 mt-4">
                  <h3 className="font-bold mb-2">資産クラス詳細</h3>
                  {portfolioData[investmentType].map((asset, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden">
                      <div
                        className="flex justify-between items-center p-3 cursor-pointer"
                        onClick={() => toggleAssetDetails(asset.name)}
                      >
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: asset.color }}></div>
                          <p className="font-medium">{asset.name}</p>
                        </div>
                        <div className="flex items-center">
                          <span className="mr-2">{asset.value}%</span>
                          {expandedAsset === asset.name ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </div>
                      </div>
                      {expandedAsset === asset.name && (
                        <div className="p-3 bg-gray-50 text-sm text-gray-600 border-t">{assetDetails[asset.name]}</div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 積立設定タブ */}
          <TabsContent value="monthly" className="mt-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold mb-4">月々の積立</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-500">積立金額</span>
                      <span className="font-bold text-[#0D7A5F]">{formatCurrency(monthlyAmount)}</span>
                    </div>
                    <Slider
                      value={[monthlyAmount]}
                      min={1000}
                      max={100000}
                      step={1000}
                      onValueChange={handleMonthlyAmountChange}
                      className="mb-4"
                    />
                    <div className="flex items-center">
                      <Input
                        type="text"
                        value={formatCurrency(monthlyAmount)}
                        onChange={handleMonthlyInputChange}
                        className="text-right"
                      />
                      <span className="ml-2 text-sm text-gray-500">/ 月</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">次回積立予定日: 2023年5月25日</p>
                    <p className="text-xs text-gray-500 mt-1">※毎月25日に引き落としされます</p>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-bold mb-4">ボーナス月の積立</h3>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">夏のボーナス月（6月）</p>
                          {summerBonusEnabled && (
                            <p className="text-sm text-gray-500">{formatCurrency(summerBonusAmount)}</p>
                          )}
                        </div>
                        <Switch checked={summerBonusEnabled} onCheckedChange={setSummerBonusEnabled} />
                      </div>

                      {summerBonusEnabled && (
                        <div className="pl-3">
                          <Slider
                            value={[summerBonusAmount]}
                            min={10000}
                            max={500000}
                            step={10000}
                            onValueChange={(value) => setSummerBonusAmount(value[0])}
                            className="mb-2"
                          />
                          <Input
                            type="text"
                            value={formatCurrency(summerBonusAmount)}
                            onChange={(e) => {
                              const value = Number.parseInt(e.target.value.replace(/[^0-9]/g, ""))
                              if (!isNaN(value)) setSummerBonusAmount(value)
                            }}
                            className="text-right"
                          />
                        </div>
                      )}

                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">冬のボーナス月（12月）</p>
                          {winterBonusEnabled && (
                            <p className="text-sm text-gray-500">{formatCurrency(winterBonusAmount)}</p>
                          )}
                        </div>
                        <Switch checked={winterBonusEnabled} onCheckedChange={setWinterBonusEnabled} />
                      </div>

                      {winterBonusEnabled && (
                        <div className="pl-3">
                          <Slider
                            value={[winterBonusAmount]}
                            min={10000}
                            max={500000}
                            step={10000}
                            onValueChange={(value) => setWinterBonusAmount(value[0])}
                            className="mb-2"
                          />
                          <Input
                            type="text"
                            value={formatCurrency(winterBonusAmount)}
                            onChange={(e) => {
                              const value = Number.parseInt(e.target.value.replace(/[^0-9]/g, ""))
                              if (!isNaN(value)) setWinterBonusAmount(value)
                            }}
                            className="text-right"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 入出金タブ */}
          <TabsContent value="deposit" className="mt-4">
            <Card>
              <CardContent className="p-4">
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <p className="text-sm text-gray-600">現在の残高</p>
                  <p className="text-xl font-bold text-[#0D7A5F]">¥1,234,567</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold mb-2">入金</h3>
                    <div className="flex space-x-2">
                      <Input
                        type="text"
                        placeholder="入金額"
                        value={depositAmount}
                        onChange={(e) => setDepositAmount(e.target.value)}
                        className="text-right"
                      />
                      <Button className="bg-[#0D7A5F] hover:bg-[#0A6A50] whitespace-nowrap">入金する</Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold mb-2">出金</h3>
                    <div className="flex space-x-2">
                      <Input
                        type="text"
                        placeholder="出金額"
                        value={withdrawAmount}
                        onChange={(e) => setWithdrawAmount(e.target.value)}
                        className="text-right"
                      />
                      <Button variant="outline" className="whitespace-nowrap">
                        出金する
                      </Button>
                    </div>
                  </div>

                  <div className="border-t pt-4 mt-4">
                    <h3 className="font-bold mb-2">入出金履歴</h3>
                    <div className="space-y-2">
                      {transactionHistory.map((transaction, index) => (
                        <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">{transaction.type}</p>
                            <p className="text-sm text-gray-500">{transaction.date}</p>
                          </div>
                          <p className="font-bold">{transaction.amount}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

      </div>
    </MobileFrame>
  )
}
