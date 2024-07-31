import axios from 'axios'
import { SnackData } from '../interfaces/SnackData'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

//https://seusite.com.br/api/burgers
//https://seusite.com.br/api/pizzas
//https://seusite.com.br/api/drinks
//https://seusite.com.br/api/ice-creams
//Captura das informações nos endpoints

export const getBurgers = () => api.get<SnackData[]>('/burgers')
export const getPizzas = () => api.get<SnackData[]>('/pizzas')
export const getDrinks = () => api.get<SnackData[]>('/drinks')
export const getIceCreams = () => api.get<SnackData[]>('/ice-creams')

export default api
