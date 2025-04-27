import type { ReactNode } from "react"
import { NavigationBar } from "@/components/layout/navigation-bar"

// スクロールバーを非表示にするためのスタイル
const scrollbarHideStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;     /* Firefox */
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;             /* Chrome, Safari and Opera */
  }
`

interface MobileFrameProps {
  children: ReactNode
  showNavigation?: boolean
}

export function MobileFrame({ children, showNavigation = true }: MobileFrameProps) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      {/* スクロールバー非表示のためのスタイル */}
      <style>{scrollbarHideStyles}</style>

      {/* モバイルデバイスフレーム */}
      <div className="w-full max-w-md aspect-[9/19] bg-white rounded-[40px] overflow-hidden shadow-xl border-8 border-gray-800 relative">
        {/* ステータスバー */}
        <div className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center text-xs">
          <span>9:41</span>
          <div className="flex space-x-1">
            <span>4G</span>
            <span>100%</span>
          </div>
        </div>

        {/* アプリコンテンツ */}
        <div className="h-full overflow-y-auto pb-24 scrollbar-hide">{children}</div>

        {/* ナビゲーションバー */}
        {showNavigation && <NavigationBar />}
      </div>
    </div>
  )
}
