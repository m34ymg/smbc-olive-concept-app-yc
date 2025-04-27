"use client"

import { MobileFrame } from "@/components/layout/mobile-frame"
import { AppHeader } from "@/components/layout/app-header"
import { Card, CardContent } from "@/components/ui/card"
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  Info,
  AlertTriangle,
  TrendingUp,
  DollarSign,
  LineChart,
  BarChart,
  CheckCircle2,
  Sparkles,
  PiggyBank,
  Globe,
  ChevronDown,
  ChevronRight,
} from "lucide-react"
import { formatCurrency } from "@/utils/format"
import Link from "next/link"
import { useState } from "react"

export default function AnalyticsPage() {
  // 折りたたみ状態を管理するステート
  const [expandedSections, setExpandedSections] = useState({
    analysis: false,
    risk: false,
    advice: false,
  })

  // セクションの展開/折りたたみを切り替える関数
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  // 保有資産データ
  const assetData = [
    { name: "普通", value: 4500000, color: "#9CA3AF" },
    { name: "定期", value: 1500000, color: "#D1D5DB" },
    { name: "外貨", value: 500000, color: "#3B82F6" },
    { name: "投信", value: 1200000, color: "#10B981" },
    { name: "債券", value: 800000, color: "#F59E0B" },
    { name: "日興", value: 600000, color: "#EC4899" },
    { name: "信託", value: 900000, color: "#8B5CF6" },
  ]

  // 総資産額を計算
  const totalAssets = assetData.reduce((sum, item) => sum + item.value, 0)

  // リスクファクターデータ
  const riskFactors = [
    {
      name: "成長リスク",
      level: 15,
      description: "経済成長に関連するリスク",
      icon: <TrendingUp size={16} className="mr-1" />,
      shortName: "成長",
    },
    {
      name: "為替リスク",
      level: 70,
      description: "為替変動による資産価値への影響",
      icon: <DollarSign size={16} className="mr-1" />,
      shortName: "為替",
    },
    {
      name: "金利リスク",
      level: 50,
      description: "金利変動による資産価値への影響",
      icon: <LineChart size={16} className="mr-1" />,
      shortName: "金利",
    },
    {
      name: "インフレリスク",
      level: 80,
      description: "インフレによる資産価値が目減りするリスク",
      icon: <BarChart size={16} className="mr-1" />,
      shortName: "インフレ",
    },
    {
      name: "地域集中リスク",
      level: 65,
      description: "特定地域への投資集中によるリスク",
      icon: <Globe size={16} className="mr-1" />,
      shortName: "地域",
    },
  ]

  // レーダーチャート用のデータ構造
  const radarData = [
    { subject: "成長", A: 15, B: 60, fullMark: 100 },
    { subject: "為替", A: 80, B: 60, fullMark: 100 },
    { subject: "金利", A: 60, B: 60, fullMark: 100 },
    { subject: "インフレ", A: 95, B: 60, fullMark: 100 },
    { subject: "地域", A: 80, B: 60, fullMark: 100 },
  ]

  // リスクレベルの表示テキスト
  const getRiskLevelText = (level) => {
    if (level < 20) return "非常に低い"
    if (level < 40) return "低い"
    if (level === 50) return "適正"
    if (level < 60) return "やや高い"
    if (level < 80) return "高い"
    return "非常に高い"
  }

  // リスクレベルの色
  const getRiskLevelColor = (level) => {
    if (level < 20) return "bg-blue-300"
    if (level < 40) return "bg-blue-500"
    if (level === 50) return "bg-green-500"
    if (level < 60) return "bg-yellow-500"
    if (level < 80) return "bg-orange-500"
    return "bg-red-500"
  }

  return (
    <MobileFrame>
      <AppHeader title="AI分析" showBackButton={true} backHref="/" backIcon={<ArrowLeft size={20} />} />

      <div className="p-4 space-y-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold flex items-center">
                <PiggyBank size={20} className="mr-2 text-[#0D7A5F]" />
                あなたの保有資産
              </h2>
              <div className="text-[#0D7A5F] font-bold">{formatCurrency(totalAssets)}</div>
            </div>

            <div className="h-[220px] w-full mb-4">
              <ChartContainer
                config={Object.fromEntries(
                  assetData.map((item) => [item.name, { label: item.name, color: item.color }]),
                )}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={assetData}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={60}
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
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

            <div className="space-y-2">
              {assetData.map((asset, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: asset.color }}></div>
                    <span>{asset.name}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">{formatCurrency(asset.value)}</span>
                    <span className="text-gray-500 text-sm">{((asset.value / totalAssets) * 100).toFixed(1)}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* ポートフォリオ解析結果 - 折りたたみ可能 */}
        <Card>
          <div
            className="p-4 flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("analysis")}
          >
            <div className="flex items-center">
              <Sparkles size={20} className="mr-2 text-yellow-500" />
              <h2 className="text-lg font-bold">ポートフォリオ解析結果</h2>
            </div>
            {expandedSections.analysis ? (
              <ChevronDown size={20} className="text-gray-500" />
            ) : (
              <ChevronRight size={20} className="text-gray-500" />
            )}
          </div>
          {expandedSections.analysis && (
            <CardContent className="p-4 pt-0 border-t">
              <div className="bg-blue-50 p-3 rounded-lg mb-3 mt-3">
                <div className="flex items-center text-blue-700 font-medium mb-1">
                  <Info size={16} className="mr-1" />
                  AI分析（Beta版）
                </div>
                <p className="text-sm text-gray-700">
                  あなたのポートフォリオを分析した結果、以下のリスクが検出されました。
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mr-2 mt-0.5">
                    <AlertTriangle size={14} className="text-red-500" />
                  </div>
                  <p className="text-sm">
                    <span className="font-bold">現金比率が高すぎます（60%）</span>：
                    長期的なインフレにより資産価値が目減りするリスクが高まっています。
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-full p-1 mr-2 mt-0.5">
                    <Info size={14} className="text-orange-500" />
                  </div>
                  <p className="text-sm">
                    <span className="font-bold">ETFが米国株式に偏っています</span>：
                    地域集中リスクが高く、米国市場の下落時に大きな影響を受ける可能性があります。
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-100 rounded-full p-1 mr-2 mt-0.5">
                    <DollarSign size={14} className="text-yellow-600" />
                  </div>
                  <p className="text-sm">
                    <span className="font-bold">為替リスクが高すぎます</span>：
                    外貨預金と外国資産建て投資信託の配分が多く、円高時に資産価値が大きく下落する可能性があります。
                  </p>
                </div>
              </div>
            </CardContent>
          )}
        </Card>

        {/* ポートフォリオのリスク特性 - 折りたたみ可能 */}
        <Card>
          <div className="p-4 flex justify-between items-center cursor-pointer" onClick={() => toggleSection("risk")}>
            <div className="flex items-center">
              <AlertTriangle size={20} className="mr-2 text-[#0D7A5F]" />
              <h2 className="text-lg font-bold">ポートフォリオのリスク特性</h2>
            </div>
            {expandedSections.risk ? (
              <ChevronDown size={20} className="text-gray-500" />
            ) : (
              <ChevronRight size={20} className="text-gray-500" />
            )}
          </div>
          {expandedSections.risk && (
            <CardContent className="p-4 pt-0 border-t">
              {/* レーダーチャート */}
              <div className="h-[300px] w-full mb-6 mt-3">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: "#333", fontSize: 12 }} />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10 }} />
                    <Radar name="あなた" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.4} />
                    <Radar name="適正値" dataKey="B" stroke="#0D7A5F" fill="#0D7A5F" fillOpacity={0.2} />
                    <Legend />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-4">
                {riskFactors.map((risk, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        {risk.icon}
                        <span className="font-medium">{risk.name}</span>
                      </div>
                      <div className="flex items-center">
                        <div className={`px-2 py-0.5 rounded-full text-xs text-white ${getRiskLevelColor(risk.level)}`}>
                          {getRiskLevelText(risk.level)}
                        </div>
                      </div>
                    </div>
                    <Progress value={risk.level} className="h-2" />
                    <p className="text-xs text-gray-500">{risk.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          )}
        </Card>

        {/* AIアドバイス - 折りたたみ可能 */}
        <Card>
          <div className="p-4 flex justify-between items-center cursor-pointer" onClick={() => toggleSection("advice")}>
            <div className="flex items-center">
              <CheckCircle2 size={20} className="mr-2 text-[#0D7A5F]" />
              <h2 className="text-lg font-bold">AIアドバイス</h2>
            </div>
            {expandedSections.advice ? (
              <ChevronDown size={20} className="text-gray-500" />
            ) : (
              <ChevronRight size={20} className="text-gray-500" />
            )}
          </div>
          {expandedSections.advice && (
            <CardContent className="p-4 pt-0 border-t">
              <div className="space-y-4 mt-3">
                <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                  <div className="bg-[#0D7A5F] text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-medium mb-1">あなたはさらに月々15,000円を追加でつみたてできます 💰</p>
                    <p className="text-sm text-gray-600">
                      あなたの直近12ヶ月の家計簿分析による収支解析の結果、月々15,000円を追加積立することで、インフレリスクを軽減しつつ資産の安定的な成長が見込めます。
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                  <div className="bg-[#0D7A5F] text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-medium mb-1">余っている29万円を自動運用にまわしましょう 🤖</p>
                    <p className="text-sm text-gray-600">
                      追加の為替リスクを取りすぎないよう、為替ヘッジされた資産を多めに配分する、あなたへ最適なポートフォリオをAIがご提案いたします。
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          )}
        </Card>

        <div className="flex justify-center">
          <Link href="/assets/auto-investment">
            <button className="bg-[#0D7A5F] text-white px-6 py-3 rounded-lg font-medium flex items-center">
              <Sparkles size={18} className="mr-2" />
              資産配分をあなたに最適化する
            </button>
          </Link>
        </div>
      </div>
    </MobileFrame>
  )
}
