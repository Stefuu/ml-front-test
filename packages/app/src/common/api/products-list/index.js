
import axios from 'axios'
const getProductsList = async () => {
  try {
    const response = await axios(`http://localhost:8088/api/items?q=${term}&limit=4`)
    return response.data
  } catch (error) {
    return { error }
  }
}

export default getProductsList
