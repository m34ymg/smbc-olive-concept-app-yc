"use client"

import { useState, useEffect } from "react"
import { Home, CreditCard, BarChart3, Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function NavigationBar() {
  const [activeTab, setActiveTab] = useState("")
  const pathname = usePathname()

  // パスに基づいてアクティブタブを設定
  useEffect(() => {
    if (pathname === "/") {
      setActiveTab("home")
    } else if (pathname.startsWith("/accounts")) {
      setActiveTab("accounts")
    } else if (pathname.startsWith("/assets")) {
      setActiveTab("assets")
    } else if (pathname.startsWith("/menu")) {
      setActiveTab("menu")
    }
  }, [pathname])

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center py-2">
      <Link href="/">
        <div className="flex flex-col items-center">
          <Home size={24} className={activeTab === "home" ? "text-[#0D7A5F]" : "text-gray-500"} />
          <span className={`text-xs mt-1 ${activeTab === "home" ? "text-[#0D7A5F] font-bold" : "text-gray-500"}`}>
            ホーム
          </span>
        </div>
      </Link>
      <Link href="/accounts">
        <div className="flex flex-col items-center">
          <CreditCard size={24} className={activeTab === "accounts" ? "text-[#0D7A5F]" : "text-gray-500"} />
          <span className={`text-xs mt-1 ${activeTab === "accounts" ? "text-[#0D7A5F] font-bold" : "text-gray-500"}`}>
            口座一覧
          </span>
        </div>
      </Link>
      <Link href="/transfer">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#0D7A5F] -mt-5 flex flex-col items-center justify-center text-white">
            <span className="text-xl font-bold">¥</span>
            <span className="text-[10px] -mt-1">振込・振替</span>
          </div>
        </div>
      </Link>
      <Link href="/assets">
        <div className="flex flex-col items-center">
          <BarChart3 size={24} className={activeTab === "assets" ? "text-[#0D7A5F]" : "text-gray-500"} />
          <span className={`text-xs mt-1 ${activeTab === "assets" ? "text-[#0D7A5F] font-bold" : "text-gray-500"}`}>
            家計管理
          </span>
        </div>
      </Link>
      <Link href="/menu">
        <div className="flex flex-col items-center">
          <Menu size={24} className={activeTab === "menu" ? "text-[#0D7A5F]" : "text-gray-500"} />
          <span className={`text-xs mt-1 ${activeTab === "menu" ? "text-[#0D7A5F] font-bold" : "text-gray-500"}`}>
            メニュー
          </span>
        </div>
      </Link>
    </div>
  )
}
