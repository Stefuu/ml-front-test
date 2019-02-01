import { formatProducts, formatItem, mountCommonItem } from './'
import productsData from './__fixtures__/products.json'
import itemData from './__fixtures__/item.json'
import descriptionData from './__fixtures__/description.json'

describe('Helpers', () => {
  describe('formatProducts', () => {
    it('Should format the product search result data into the desired format', () => {
      const result = formatProducts(productsData)
      const firstItem = result.items[0]

      expect(result).toHaveProperty('author')
      expect(result.author).toHaveProperty('name')
      expect(result.author).toHaveProperty('lastname')
      expect(typeof result.author.name).toBe('string')
      expect(typeof result.author.lastname).toBe('string')
      expect(result).toHaveProperty('categories')
      expect(Array.isArray(result.categories)).toBe(true)
      expect(result).toHaveProperty('items')
      expect(firstItem).toHaveProperty('id')
      expect(typeof firstItem.id).toBe('string')
      expect(firstItem).toHaveProperty('title')
      expect(typeof firstItem.title).toBe('string')
      expect(firstItem).toHaveProperty('price')
      expect(firstItem).toHaveProperty('picture')
      expect(typeof firstItem.picture).toBe('string')
      expect(firstItem).toHaveProperty('condition')
      expect(typeof firstItem.condition).toBe('string')
      expect(firstItem).toHaveProperty('free_shipping')
      expect(typeof firstItem.free_shipping).toBe('boolean')
      expect(firstItem.price).toHaveProperty('currency')
      expect(typeof firstItem.price.currency).toBe('string')
      expect(firstItem.price).toHaveProperty('amount')
      expect(typeof firstItem.price.amount).toBe('number')
      expect(firstItem.price).toHaveProperty('decimals')
      expect(typeof firstItem.price.decimals).toBe('number')
    })
  })

  describe('formatItem', () => {
    it('Should format the specific item result data into the desired format', () => {
      const result = formatItem(itemData, descriptionData)
      const item = result.item
      const author = result.author

      expect(result).toHaveProperty('author')
      expect(author).toHaveProperty('name')
      expect(author).toHaveProperty('lastname')
      expect(typeof author.name).toBe('string')
      expect(typeof author.lastname).toBe('string')
      expect(item).toHaveProperty('id')
      expect(typeof item.id).toBe('string')
      expect(item).toHaveProperty('title')
      expect(typeof item.title).toBe('string')
      expect(item).toHaveProperty('price')
      expect(item.price).toHaveProperty('currency')
      expect(typeof item.price.currency).toBe('string')
      expect(item.price).toHaveProperty('amount')
      expect(typeof item.price.amount).toBe('number')
      expect(item.price).toHaveProperty('decimals')
      expect(typeof item.price.decimals).toBe('number')
      expect(item).toHaveProperty('condition')
      expect(typeof item.condition).toBe('string')
      expect(item).toHaveProperty('free_shipping')
      expect(typeof item.free_shipping).toBe('boolean')
      expect(item).toHaveProperty('sold_quantity')
      expect(typeof item.sold_quantity).toBe('number')
      expect(item).toHaveProperty('description')
      expect(typeof item.description).toBe('string')
    })
  })

  describe('mountCommonItem', () => {
    it('Should mount the common parts of the "item" object', () => {

    })
  })
})
