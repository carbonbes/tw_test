export default function formatMonth(month: number) {
  return month < 10 ? `0${month}` : `${month}`
}
