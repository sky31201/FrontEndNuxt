/**
 * 金額轉千分位
 * @param num 要轉換的文字串或數字
 * @returns 千分位格式字串
 */
export default function toThousands(num: string | number) {
  num = num.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(num))
    num = num.replace(pattern, "$1,$2");
  return num;
};
