"use client"

import { MobileFrame } from "@/components/layout/mobile-frame"
import { RefreshCw, HelpCircle, ChevronRight, Plus, CreditCard } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Bar } from "recharts"
import { ChartContainer } from "@/components/ui/chart"
import { Progress } from "@/components/ui/progress"

export default function AssetsPage() {
  // 収支データを家計簿アプリらしいランダムデータに変更
  // 収入、支出、収支（差分）の値を設定

  // 以下のmonthlyDataを置き換え
  const monthlyData = [
    { month: "12月", income: 320000, expense: -280000, balance: 40000 },
    { month: "1月", income: 325000, expense: -290000, balance: 35000 },
    { month: "2月", income: 318000, expense: -305000, balance: 13000 },
    { month: "3月", income: 350000, expense: -320000, balance: 30000 },
    { month: "4月", income: 335000, expense: -300000, balance: 35000 },
  ]

  // 銀行口座データ
  const bankAccounts = [
    {
      name: "三井住友銀行",
      income: 335000,
      expense: -300000,
      note: "（うちデビット -11,288 円）",
    },
    {
      name: "ソニー銀行",
      income: 0,
      expense: 0,
    },
    {
      name: "SMBC信託銀行 プレスティア",
      income: 0,
      expense: 0,
    },
  ]

  // クレジットカードデータ
  const creditCards = [
    {
      name: "Platinum Card®",
      income: 65,
      incomeNote: "（返金・キャッシュバック等）",
      expense: 0,
      expenseNote: "（当月利用額）",
    },
  ]

  return (
    <MobileFrame>
      {/* ヘッダー */}
      <div className="bg-[#0D7A5F] text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">家計管理</h1>
        <div className="flex space-x-4">
          <RefreshCw size={24} />
          <HelpCircle size={24} />
        </div>
      </div>

      {/* タブナビゲーション */}
      <div className="bg-[#0D7A5F] text-white">
        <Tabs defaultValue="income" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-transparent">
            <TabsTrigger
              value="top"
              className="text-white data-[state=active]:bg-transparent data-[state=active]:text-white"
            >
              トップ
            </TabsTrigger>
            <TabsTrigger
              value="income"
              className="text-white data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white"
            >
              収支
            </TabsTrigger>
            <TabsTrigger
              value="assets"
              className="text-white data-[state=active]:bg-transparent data-[state=active]:text-white"
            >
              資産
            </TabsTrigger>
          </TabsList>

          <TabsContent value="income">
            {/* 収支サマリー */}
            <div className="bg-[#0D7A5F] text-white p-4 text-center">
              <p className="text-xl">2025年4月 収支</p>
              <p className="text-4xl font-bold mt-2">
                35,000<span className="text-xl">円</span>
              </p>
            </div>

            {/* 収入・支出サマリー */}
            <div className="bg-[#0D7A5F] text-white px-4 py-2">
              <div className="flex justify-between items-center">
                <p>収入</p>
                <p className="text-xl">
                  335,000<span className="text-sm">円</span>
                </p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <p>支出</p>
                <p className="text-xl">
                  -300,000<span className="text-sm">円</span>
                </p>
              </div>
            </div>

            {/* 収支グラフ */}
            <div className="bg-[#0D7A5F] p-4 h-[300px]">
              {/* チャートコンテナの設定を変更 */}
              {/* 収入と支出のカラー設定を追加 */}
              {/* ChartContainerの設定を以下に置き換え */}
              <ChartContainer
                config={{
                  balance: { label: "収支", color: "#FFFFFF" },
                  income: { label: "収入", color: "#8BC34A" },
                  expense: { label: "支出", color: "#81D4FA" },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2A8D73" />
                    <XAxis
                      dataKey="month"
                      tick={{ fill: "#FFFFFF" }}
                      tick={{ stroke: "#FFFFFF" }}
                      axisLine={{ stroke: "#FFFFFF" }}
                    />
                    <YAxis
                      tick={{ fill: "#FFFFFF" }}
                      axisLine={{ stroke: "#FFFFFF" }}
                      tick={{ stroke: "#FFFFFF" }}
                      tickFormatter={(v) => `${Math.abs(v) / 10000}万円`}
                    />
                    <Tooltip
                      formatter={(value, name) => [`${Math.abs(value).toLocaleString()}円`, name]}
                      labelFormatter={(label) => `${label}`}
                    />

                    {/* both bars must have the same stackId */}
                    <Bar dataKey="income" fill="#8BC34A" name="収入" />
                    <Bar dataKey="expense" fill="#81D4FA" name="支出" />

                    <Line
                      type="linear"
                      dataKey="balance"
                      stroke="#FFFFFF"
                      strokeWidth={2}
                      dot={{ r: 6, fill: "#FFFFFF", stroke: "#FFFFFF" }}
                      name="収支"
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>

            {/* 白背景上のテキストカラーを修正 */}
            {/* 収入・支出タブの部分を以下に置き換え */}
            <div className="bg-white p-4">
              <div className="grid grid-cols-2 gap-1 bg-gray-100 rounded-lg p-1 mb-4">
                <button className="py-2 rounded-lg text-gray-800">収入</button>
                <button className="py-2 rounded-lg bg-[#0D7A5F] text-white">支出</button>
              </div>

              {/* 支出詳細 */}
              <div className="border-b pb-4 mb-4">
                <div className="flex justify-between items-center">
                  <p className="font-bold text-gray-800">支出</p>
                  <p className="font-bold text-gray-800">-11,288円</p>
                </div>
              </div>

              {/* 食費カテゴリ */}
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-800">食費</p>
                <div className="flex items-center">
                  <p className="font-bold mr-2 text-gray-800">-11,288円</p>
                  <ChevronRight size={20} className="text-gray-400" />
                </div>
              </div>
              <Progress value={100} className="h-2 bg-blue-200 mb-4" />

              {/* 今月のカード引落と口座残高 */}
              <div className="bg-[#0D7A5F] bg-opacity-10 rounded-lg p-4 flex justify-between items-center mt-8 mb-4">
                <div className="flex items-center">
                  <CreditCard size={20} className="mr-2 text-[#0D7A5F]" />
                  <p className="text-[#0D7A5F]">今月のカード引落と口座残高</p>
                </div>
                <ChevronRight size={20} className="text-[#0D7A5F]" />
              </div>

              {/* 銀行口座セクション */}
              <div className="mb-6">
                <h2 className="font-bold text-lg mb-2 text-gray-800">銀行口座</h2>
                {bankAccounts.map((account, index) => (
                  <div key={index} className="border-b py-4">
                    <p className="font-bold mb-2 text-gray-800">{account.name}</p>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-gray-800">収入</p>
                      <p className="text-gray-800">{account.income}円</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-gray-800">支出</p>
                      <p className="text-gray-800">
                        {account.expense}円{" "}
                        {account.note && <span className="text-sm text-gray-500">{account.note}</span>}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="flex items-center mt-4">
                  <div className="w-8 h-8 bg-[#0D7A5F] rounded-full flex items-center justify-center mr-2">
                    <Plus size={16} className="text-white" />
                  </div>
                  <p className="text-[#0D7A5F]">銀行口座を追加する</p>
                </div>
              </div>

              {/* クレジットカードセクション */}
              <div>
                <h2 className="font-bold text-lg mb-2 text-gray-800">クレジットカード</h2>
                {creditCards.map((card, index) => (
                  <div key={index} className="border-b py-4">
                    <p className="font-bold mb-2 text-gray-800">{card.name}</p>
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <p className="text-gray-800">収入</p>
                        <p className="text-sm text-gray-500">{card.incomeNote}</p>
                      </div>
                      <p className="text-gray-800">{card.income}円</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-gray-800">支出</p>
                        <p className="text-sm text-gray-500">{card.expenseNote}</p>
                      </div>
                      <p className="text-gray-800">{card.expense}円</p>
                    </div>
                  </div>
                ))}
                <div className="flex items-center mt-4">
                  <div className="w-8 h-8 bg-[#0D7A5F] rounded-full flex items-center justify-center mr-2">
                    <Plus size={16} className="text-white" />
                  </div>
                  <p className="text-[#0D7A5F]">クレジットカードを追加する</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MobileFrame>
  )
}
