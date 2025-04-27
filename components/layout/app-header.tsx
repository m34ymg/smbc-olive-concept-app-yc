import type { ReactNode } from "react"
import { Bell, Menu } from "lucide-react"
import Link from "next/link"

interface AppHeaderProps {
  title: string
  showBackButton?: boolean
  backHref?: string
  backIcon?: ReactNode
  showSubtitle?: boolean
}

export function AppHeader({
  title,
  showBackButton = false,
  backHref = "/",
  backIcon = null,
  showSubtitle = false,
}: AppHeaderProps) {
  return (
    <header className="bg-[#0D7A5F] text-white p-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        {showBackButton && <Link href={backHref}>{backIcon}</Link>}
        <div className="font-bold text-xl">{title}</div>
        {showSubtitle && <div className="bg-white/20 rounded-full px-2 py-0.5 text-xs">SMBC</div>}
      </div>
      <div className="flex gap-3">
        <Bell size={20} />
        <Menu size={20} />
      </div>
    </header>
  )
}
