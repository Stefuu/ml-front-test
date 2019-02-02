const format = (value, n, x, s, c) => {
  if (value !== 0 && !value) return ''

  let re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')'
  let num = value.toFixed(Math.max(0, ~~n))

  return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','))
}

export const formatCurrency = (value) => {
  return format(value, 0, 3, '.', ',')
}
