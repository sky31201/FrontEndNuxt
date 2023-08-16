/**
 * 驗證字串是否可以轉為數字
 * @param params 字串
 * @returns 字串轉為數字
 */
export default function isNumber(str: string) {
  return /^\d+(\.\d+)?$/.test(str)
}
