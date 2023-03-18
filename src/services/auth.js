import { http } from './http';
import localStorage from './localStorage';

export const auth = {

  async onSignIn(token) {
    await localStorage.setItem('token', token)
  },

  async isSignedIn() {
    const token = localStorage.getItem('token')
    return (token !== null) ? true : false;
  },

  async getUser() {
    const token = await localStorage.getItem('token')
    if (!token) return false
    const res = await http.get('/user/me')
    return res.data
  },

  async getHeaderConfig() {
    const token = await localStorage.getItem('token')
    if (!token) return {}
    const config = { headers: { Authorization: `Bearer ${token}` } };
    return config
  },

  async onSignOut() {
    try {
      await http.post('/logout')
    } catch (error) {
      return true
    } finally {
      localStorage.removeItem('token')
    }
  },
}