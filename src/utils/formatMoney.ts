export const formatMoney = (value: number): string => {
  const numberStr = value.toFixed(2)

  return numberStr.replace('.', ',')
}
