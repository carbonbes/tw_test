export default function isObjectEmpty(obj: Record<string, unknown>) {
  return Object.keys(obj).every((key) => {
    const value = obj[key]
    return (
      value === null ||
      value === undefined ||
      (typeof value === 'object' && Object.keys(value).length === 0) ||
      (Array.isArray(value) && value.length === 0) ||
      value === ''
    )
  })
}
