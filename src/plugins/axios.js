import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://swapsteem-api.herokuapp.com'
})

export default ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance
}

export { axiosInstance }
