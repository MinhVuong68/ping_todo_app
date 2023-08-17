export const getCurrentDate = (): string => {
  const today = new Date()
  const dd = formatDateHave0(String(today.getDate()))
  const MM = formatDateHave0(String(today.getMonth() + 1))
  const yyyy = String(today.getFullYear())
  return `${dd}/${MM}/${yyyy}`
}

const formatDateHave0 = (v: string): string => {
  if (parseInt(v) < 10) return `0${v}`
  return v
}
