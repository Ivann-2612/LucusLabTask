import axios from 'axios'

export const getData = () => axios.get('https://jsonplaceholder.typicode.com/posts')
export const getAllUsers = () => axios.get('http://localhost:3005/users')

export const registerUser = (username,email,password) => axios.post('http://localhost:3005/users',{username,email,password})