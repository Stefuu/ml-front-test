import { formatDecimals, formatCurrency } from './'

describe('Helper', () => {
  describe('formatDecimals', () => {
    it('Should remove the leading zeros and the dot from decimal numbers', () => {
      expect(formatDecimals(0.88)).toBe('88')
    })
    it('Should return "00" when decimal is zero', () => {
      expect(formatDecimals(0)).toBe('00')
    })
  })

  describe('formatDecimals', () => {
    it('Should format the price', () => {
      expect(formatCurrency(9999)).toBe('9.999')
    })
  })
})
