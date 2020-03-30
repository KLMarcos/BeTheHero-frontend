import axios from 'axios'

const api = axios.create({
  baseURL: 'https://be-the-hero-omnistack-week.herokuapp.com',
})

export default api
