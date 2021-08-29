import axios from 'axios'

export const key = 'wSuf86m2SbqRlxRSsetTfPkc9GJuvSk0wD7SVj0HhcI'
export const getData = () => axios.get('https://jsonplaceholder.typicode.com/posts')
export const getAllUsers = () => axios.get('http://localhost:3005/users')

export const registerUser = (username,email,password) => axios.post('http://localhost:3005/users',{username,email,password})