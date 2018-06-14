/*
export const someAction = (state) => {}
 */
import { axiosInstance } from 'plugins/axios'
import { LocalStorage } from 'quasar'
export const login = (commit, creds) => {
  axiosInstance.post('/authentication', creds).then(res => {
    console.log(res.data.accessToken)
    LocalStorage.set('token', res.data.accessToken)
  })
}
