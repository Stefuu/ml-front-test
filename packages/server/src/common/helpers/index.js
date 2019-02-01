export const formatProducts = (json) => {
  const getCategories = (filters) => {
    if (!filters || !filters[0] || !filters[0].values || !filters[0].values[0]) return []
    return filters[0].values[0].path_from_root.map(category => category.name)
  }

  const items = json.results.map(item => mountCommonItem(item))

  return {
    author: {
      name: 'Stéfano',
      lastname: 'Damiano'
    },
    categories: getCategories(json.filters),
    items
  }
}

export const formatItem = (item, description) => ({
  author: {
    name: 'Stéfano',
    lastname: 'Damiano'
  },
  item: {
    ...mountCommonItem(item),
    sold_quantity: item.sold_quantity,
    description: description.plain_text
  }
})

export const mountCommonItem = (item) => ({
  id: item.id,
  title: item.title,
  price: {
    currency: item.currency_id,
    amount: parseInt(item.price, 10),
    decimals: parseFloat((item.price % 1).toFixed(2), 10)
  },
  picture: item.thumbnail,
  condition: item.condition,
  free_shipping: item.shipping.free_shipping
})
