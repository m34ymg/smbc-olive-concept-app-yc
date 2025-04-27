/**
 * 数値を日本円形式でフォーマットする
 * @param value フォーマットする数値
 * @param options フォーマットオプション
 * @returns フォーマットされた文字列
 */
export function formatCurrency(value: number, options: { maximumFractionDigits?: number } = {}) {
  const { maximumFractionDigits = 0 } = options
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
    maximumFractionDigits,
  }).format(value)
}
