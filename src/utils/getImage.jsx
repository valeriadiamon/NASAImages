import axios from 'axios'

const key = '9IxjfqCCFeJ7xPQtX4RyChOJ6kApdNCEC7AMLjHf'
const url = `https://api.nasa.gov/planetary/apod?`
//uri: https://api.nasa.gov/planetary/apod?date=2022-06-15&api_key=9IxjfqCCFeJ7xPQtX4RyChOJ6kApdNCEC7AMLjHf
// tarea: hacer que la función getMovies devuelva el error
export const getImage = async (query) => {
  return await axios.get(`${url}&date=${query}&api_key${key}`)
}