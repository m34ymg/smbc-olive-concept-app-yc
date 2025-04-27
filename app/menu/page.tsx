"use client"

import { MobileFrame } from "@/components/layout/mobile-frame"
import { HelpCircle, ChevronRight, ChevronDown } from "lucide-react"

export default function MenuPage() {
  return (
    <MobileFrame>
      {/* ヘッダー */}
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">メニュー</h1>
        <HelpCircle size={28} className="text-[#0D7A5F]" />
      </div>

      {/* ユーザー情報 */}
      <div className="p-4">
        <div className="mb-2">
          <p className="text-sm text-gray-500">契約者番号 01773 - 25707</p>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold">店・口座番号</h2>
              <p className="text-2xl font-bold">825 - 8563171</p>
            </div>
            <button className="bg-white border border-gray-300 text-red-500 px-6 py-2 rounded-full">ログアウト</button>
          </div>
        </div>

        {/* SMBC ID情報 */}
        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <p className="text-gray-700 mb-1">SMBC ID（メールアドレス）</p>
          <p className="text-gray-900 mb-4">m34ymg@gmail.com</p>

          {/* アイコンメニュー */}
          <div className="grid grid-cols-3 border-t border-b py-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-[#0D7A5F] rounded-full flex items-center justify-center mb-1">
                <span className="text-white">✉</span>
              </div>
              <p className="text-sm">メールアドレス</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-[#0D7A5F] rounded-full flex items-center justify-center mb-1">
                <span className="text-white">🔍</span>
              </div>
              <p className="text-sm">パスワード</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-[#0D7A5F] rounded-full flex items-center justify-center mb-1">
                <span className="text-white">🏠</span>
              </div>
              <p className="text-sm">住所・電話番号</p>
            </div>
          </div>

          {/* SMBC ID・連携情報 */}
          <div className="py-4 border-b">
            <div className="flex justify-between items-center">
              <p className="font-bold">SMBC ID・連携情報の設定</p>
              <ChevronRight size={20} className="text-gray-400" />
            </div>
            <div className="flex items-center mt-2 space-x-2">
              <div className="text-xs bg-gray-200 px-2 py-1 rounded">三井住友カード</div>
              <div className="text-xs bg-gray-200 px-2 py-1 rounded flex items-center">
                <span className="text-green-600 mr-1">P</span>
                <span>PRESTIA</span>
              </div>
              <div className="text-xs bg-gray-200 px-2 py-1 rounded text-blue-800">SBI証券</div>
              <div className="text-xs bg-gray-200 px-2 py-1 rounded text-green-600">🌱</div>
            </div>
          </div>

          {/* 勤務先情報とサービス利用口座 */}
          <div className="grid grid-cols-2 border-b">
            <div className="py-4 border-r pr-2">
              <div className="flex justify-between items-center">
                <p className="font-bold">勤務先情報</p>
                <ChevronRight size={20} className="text-gray-400" />
              </div>
            </div>
            <div className="py-4 pl-2">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold">サービス利用口座の追加・解除</p>
                </div>
                <ChevronRight size={20} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* セキュリティ設定 */}
        <div className="bg-[#E8F5F0] rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center">
            <p className="font-bold">セキュリティ設定</p>
            <ChevronDown size={20} className="text-gray-600" />
          </div>
        </div>

        {/* 紛失・盗難・破損 */}
        <div className="bg-white border rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold">紛失・盗難・破損</p>
              <p className="text-sm text-gray-500">カード・印鑑・通帳等</p>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
        </div>

        {/* 各種お手続き */}
        <div className="bg-white border rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold">各種お手続き</p>
              <p className="text-sm text-gray-500">名義変更・口座解約等</p>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
        </div>

        {/* 設定 */}
        <div className="bg-[#E8F5F0] rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center">
            <p className="font-bold">設定</p>
            <ChevronDown size={20} className="text-gray-600" />
          </div>
        </div>

        {/* 外国為替 */}
        <div className="bg-white border rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center">
            <p className="font-bold">外国為替</p>
            <div className="bg-[#0D7A5F] text-white px-2 py-1 rounded-sm text-xs">新</div>
          </div>
        </div>

        {/* デジタルセーフティボックス */}
        <div className="bg-[#E8F5F0] rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-yellow-400 rounded flex items-center justify-center mr-3 mt-1">
                <span className="text-[#0D7A5F] text-xl">🔒</span>
              </div>
              <div>
                <p className="font-bold">デジタルセーフティボックス</p>
                <p className="text-sm text-gray-600">デジタル版の貸金庫（専用ホームページからご利用いただけます）</p>
              </div>
            </div>
            <ChevronDown size={20} className="text-gray-600" />
          </div>
        </div>

        {/* ファミリーネットワークサービス */}
        <div className="bg-white border rounded-lg p-0 mb-4 overflow-hidden">
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
        </div>

        {/* お問い合わせ */}
        <div className="bg-[#E8F5F0] rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center">
            <p className="font-bold">お問い合わせ</p>
            <ChevronDown size={20} className="text-gray-600" />
          </div>
        </div>

        {/* お金の学び場 */}
        <div className="bg-white border rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-100 rounded flex items-center justify-center mr-3">
                <span className="text-[#0D7A5F] text-xl">📚</span>
              </div>
              <div>
                <p className="font-bold">お金の学び場</p>
                <p className="text-sm text-gray-600">初心者でも学べる運用商品の学習コンテンツ</p>
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
        </div>

        {/* ためる・ふやす */}
        <div className="bg-[#E8F5F0] rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold">ためる・ふやす</p>
              <p className="text-sm text-gray-600">投資信託・外貨預金・定期預金等</p>
            </div>
            <ChevronDown size={20} className="text-gray-600" />
          </div>
        </div>

        {/* かりる */}
        <div className="bg-[#E8F5F0] rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold">かりる</p>
              <p className="text-sm text-gray-600">カードローン・住宅ローン</p>
            </div>
            <ChevronDown size={20} className="text-gray-600" />
          </div>
        </div>

        {/* くじ */}
        <div className="bg-[#E8F5F0] rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold">くじ</p>
              <p className="text-sm text-gray-600">宝くじ・SMBC toto</p>
            </div>
            <ChevronDown size={20} className="text-gray-600" />
          </div>
        </div>

        {/* Web通帳 */}
        <div className="bg-white border rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold">Web通帳</p>
              <p className="text-sm text-gray-600">紙通帳からの切替</p>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
        </div>

        {/* 口座開設・切替 */}
        <div className="bg-white border rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center">
            <p className="font-bold">口座開設・切替</p>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
        </div>

        {/* My通帳 */}
        <div className="bg-white border rounded-lg p-4 mb-20">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#0D7A5F] mr-2 flex items-center justify-center">
                <div className="w-6 h-1 bg-white"></div>
              </div>
              <p className="font-bold">My通帳</p>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
        </div>

        {/* 注意書き */}
        <div className="text-xs text-gray-500 mb-20">
          <p className="mb-2">
            ・スポーツくじは（独）日本スポーツ振興センターとの販売業務契約に基づいて提供するサービスです。
          </p>
          <p className="mb-2">・宝くじは（株）みずほ銀行との販売再受託契約定書に基づいて提供するサービスです。</p>
          <p>・本サービスに掲載されている各種サービスは、Apple社とは関係はありません。</p>
        </div>
      </div>
    </MobileFrame>
  )
}
