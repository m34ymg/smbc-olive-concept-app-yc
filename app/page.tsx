"use client"

import { MobileFrame } from "@/components/layout/mobile-frame"
import { Bell, HelpCircle, RefreshCw, ChevronRight, CreditCard, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <MobileFrame>
      {/* ヘッダー - 深緑色の背景 */}
      <div className="bg-[#0D7A5F] text-white">
        {/* SMBCロゴとアイコン */}
        <div className="p-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-[#C5E86C] mr-2 flex items-center justify-center">
              <div className="w-6 h-6 bg-[#0D7A5F]"></div>
            </div>
            <span className="text-xl font-bold">SMBC</span>
          </div>
          <div className="flex gap-4">
            <Bell size={24} />
            <HelpCircle size={24} />
          </div>
        </div>

        {/* Oliveカード表示 */}
        <div className="px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-14 h-10 bg-gray-700 rounded mr-3 flex items-center justify-center">
              <div className="w-10 h-1.5 bg-white"></div>
            </div>
            <span className="text-2xl font-bold">Olive</span>
          </div>
          <div className="flex items-center text-sm">
            <RefreshCw size={16} className="mr-1" />
            <span>12:54 現在</span>
          </div>
        </div>

        {/* 口座残高カード */}
        <div className="p-4 space-y-4">
          <Card className="bg-white text-black rounded-lg">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-bold">口座残高</p>
                  <p className="text-sm text-gray-500">赤坂 支店 8563171</p>
                </div>
                <ChevronRight className="text-gray-400" />
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="text-3xl font-bold">
                  1,597,715<span className="text-sm ml-1">円</span>
                </p>
                <button className="text-[#0D7A5F] font-bold">非表示</button>
              </div>
            </CardContent>
          </Card>

          {/* クレジットモードカード */}
          <Card className="bg-white text-black rounded-lg">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="bg-[#0D7A5F] text-white px-3 py-1 rounded-md text-sm font-bold">
                    Olive クレジットモード
                  </div>
                  <span className="text-sm ml-2">に設定中</span>
                </div>
                <ChevronRight className="text-gray-400" />
              </div>
              <p className="text-sm text-gray-500 mt-2">2025年4月28日 お支払い金額</p>
              <div className="flex justify-between items-center mt-1">
                <p className="text-3xl font-bold">
                  188,425<span className="text-sm ml-1">円</span>
                </p>
                <button className="text-[#0D7A5F] font-bold">非表示</button>
              </div>
            </CardContent>
          </Card>

          {/* Vポイントカード */}
          <Card className="bg-white text-black rounded-lg">
            <CardContent className="p-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-800 rounded-md flex items-center justify-center mr-2">
                    <div className="w-6 h-4 bg-yellow-400 transform rotate-45"></div>
                  </div>
                  <span className="text-xl font-bold">POINT</span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-bold mr-1">2,477</span>
                <span className="mr-1">P</span>
                <ChevronRight className="text-gray-400" />
              </div>
            </CardContent>
          </Card>

          {/* 特典情報 */}
          <div className="flex gap-2">
            <Card className="bg-white text-black rounded-lg w-1/3">
              <CardContent className="p-3">
                <div className="flex flex-col h-full justify-between">
                  <p className="text-lg font-bold">Olive</p>
                  <p className="text-sm">利用状況</p>
                  <ChevronRight className="text-gray-400 self-end" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white text-black rounded-lg w-2/3">
              <CardContent className="p-3">
                <div className="flex justify-between mb-2">
                  <div className="flex items-center">
                    <span className="text-green-600 mr-1">🎁</span>
                    <span className="text-sm">特典を選ぶ</span>
                  </div>
                  <ChevronRight className="text-gray-400" />
                </div>
                <div className="flex justify-between text-sm mb-1">
                  <span>コンビニATM</span>
                  <span>
                    あと<strong>0</strong>回無料
                  </span>
                </div>
                <div className="flex justify-between text-sm mb-1">
                  <span>他行あて振込</span>
                  <span>
                    あと<strong>3</strong>回無料
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>還元率</span>
                  <div className="flex items-center">
                    <span>最大</span>
                    <span className="text-orange-500 text-xl font-bold mx-1">10</span>
                    <span>%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* 最近使った項目 */}
      <div className="bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">最近使った項目</h2>
        <div className="flex justify-between mb-6">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-1">
              <CreditCard className="text-[#0D7A5F]" size={24} />
            </div>
            <p className="text-xs text-center">クレジットメニュー</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-1">
              <CreditCard className="text-[#0D7A5F]" size={24} />
            </div>
            <p className="text-xs text-center">フレキシブルペイ番号照会</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-1">
              <DollarSign className="text-[#0D7A5F]" size={24} />
            </div>
            <p className="text-xs text-center">クレジットモード明細</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-1">
              <ChevronRight className="text-[#0D7A5F]" size={24} />
            </div>
            <p className="text-xs text-center">もっと見る</p>
          </div>
        </div>

        {/* Web通帳の案内 */}
        <Card className="bg-white mb-6">
          <CardContent className="p-4">
            <p className="text-sm">
              Web通帳には
              <span className="text-blue-500">メモの入力やカラーラベルの設定</span>、
              <span className="text-blue-500">キーワード検索</span>が可能です。
              入出金の明細をタップしてメモの入力をしてみましょう！
            </p>
          </CardContent>
        </Card>

        {/* SBI証券 */}
        <h2 className="text-xl font-bold mb-2">SBI証券</h2>
        <Card className="bg-white mb-6">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-2">
              <p className="text-xl font-bold text-blue-800">SBI証券</p>
              <ChevronRight className="text-gray-400" />
            </div>
            <p className="text-sm text-gray-500">資産合計</p>
            <div className="flex justify-between items-center">
              <p className="text-2xl font-bold">
                15,588,283<span className="text-sm ml-1">円</span>
              </p>
              <button className="text-[#0D7A5F] font-bold">非表示</button>
            </div>
          </CardContent>
        </Card>

        {/* アプリの使い方 */}
        <h2 className="text-xl font-bold mb-2">アプリの使い方・便利な機能</h2>
        <Card className="bg-white mb-4">
          <CardContent className="p-0">
            <div className="bg-[#E8F5F0] p-4 rounded-t-lg">
              <div className="flex">
                <div className="w-1/2">
                  <p className="text-xl font-bold text-[#0D7A5F]">あなたの</p>
                  <p className="text-xl font-bold text-[#0D7A5F]">スマホが銀行に</p>
                </div>
                <div className="w-1/2 flex justify-end">
                  <img src="/secure-banking-app.png" alt="スマホバンキングイメージ" className="h-24" />
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <span className="bg-gray-100 text-[#0D7A5F] px-2 py-1 rounded-full text-xs">おすすめ</span>
                  <p className="font-bold mt-1">アプリの使い方・便利な機能を見る</p>
                </div>
                <ChevronRight className="text-gray-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* お金に関するクイズ */}
        <Card className="bg-[#FFF9C4] mb-4">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#E6EE9C] rounded-lg flex items-center justify-center mr-3">
                  <span className="text-lg font-bold">🐸</span>
                </div>
                <p className="font-bold">お金に関するクイズに挑戦してみよう</p>
              </div>
              <button className="bg-white px-4 py-2 rounded-full text-sm">クイズに挑戦する</button>
            </div>
          </CardContent>
        </Card>

        {/* Olive LOUNGE */}
        <Card className="bg-[#E8F5F0] mb-4">
          <CardContent className="p-0">
            <div className="bg-[#0D7A5F] text-white p-2 flex items-center">
              <p className="font-bold">私のアプリとダイレクト 4月号公開</p>
            </div>
            <div className="p-4 flex justify-between items-center">
              <p className="font-bold text-lg">Olive LOUNGE 高円寺店をご紹介！</p>
              <ChevronRight className="text-gray-400" />
            </div>
          </CardContent>
        </Card>

        {/* 浪費家夫婦の記事 */}
        <Card className="bg-white mb-6">
          <CardContent className="p-0">
            <div className="flex">
              <div className="w-1/3">
                <img
                  src="/smiling-woman-pink-sweater.png"
                  alt="浪費家夫婦の記事"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="w-2/3 bg-[#F9FBE7] p-3">
                <div className="bg-[#0D7A5F] text-white inline-block px-2 py-1 rounded-lg text-xs mb-1">
                  貯蓄0円から5年で！
                </div>
                <p className="font-bold text-lg">浪費家夫婦が1,300万円貯めたマネー術とは？</p>
              </div>
            </div>
            <div className="p-4 flex justify-between items-center">
              <p className="font-bold">浪費家夫婦が5年で1,300万円貯蓄!?</p>
              <ChevronRight className="text-gray-400" />
            </div>
          </CardContent>
        </Card>

        {/* キャンペーン・お得情報 */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">キャンペーン・お得情報</h2>
          <div className="flex items-center">
            <span className="text-[#0D7A5F] mr-1">一覧</span>
            <ChevronRight className="text-[#0D7A5F]" size={16} />
          </div>
        </div>

        {/* セキュリティ設定 */}
        <Card className="bg-[#0D7A5F] text-white mb-6">
          <CardContent className="p-4">
            <div className="bg-[#C5E86C] text-[#0D7A5F] inline-block px-3 py-1 rounded-full mb-2">
              あなたはお済みですか？
            </div>
            <p className="text-3xl font-bold">「4つ」の</p>
            <p className="text-3xl font-bold">セキュリティ設定</p>
          </CardContent>
        </Card>

        {/* ファミリーネットワークサービス */}
        <h2 className="text-xl font-bold mb-2">ファミリーネットワークサービス</h2>
        <Card className="bg-white mb-6">
          <CardContent className="p-0">
            <div className="bg-[#8BC34A] p-2 rounded-t-lg">
              <p className="text-white text-center text-sm">毎日のお買が</p>
            </div>
            <div className="p-4 flex justify-center items-center">
              <div className="w-8 h-8 bg-blue-800 rounded-md flex items-center justify-center mr-2">
                <div className="w-6 h-4 bg-yellow-400 transform rotate-45"></div>
              </div>
              <p className="text-xl font-bold text-[#8BC34A]">Vポイントや</p>
              <p className="text-xl font-bold text-[#FFC107]">ギフト券</p>
              <p className="text-xl font-bold text-[#8BC34A]">にかわる！</p>
            </div>
            <div className="bg-[#8BC34A] p-3 flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-white mr-2">👨‍👩‍👧‍👦</span>
                <p className="text-white font-bold">FAMILY NETWORK SERVICE</p>
              </div>
              <button className="bg-white px-4 py-1 rounded-full text-sm">ダウンロード</button>
            </div>
          </CardContent>
        </Card>

        {/* ホーム編集ボタン */}
        <div className="flex justify-center mb-4">
          <button className="bg-white px-8 py-3 rounded-full text-[#0D7A5F] font-bold">ホームを編集する</button>
        </div>

        {/* 最終ログイン情報 */}
        <p className="text-right text-sm text-gray-500 mb-20">前回ログイン 2025.04.27 12:21</p>
      </div>
    </MobileFrame>
  )
}
