import axios from 'axios'
import { useState , useRef, useEffect } from 'react'
import Navbar from './components/Navbar'
import ImgText from './components/ImgText'
import Loading from './components/Loading'

const key = '9IxjfqCCFeJ7xPQtX4RyChOJ6kApdNCEC7AMLjHf'
const url = 'https://api.nasa.gov/planetary/apod?'

function App() {
  const searchRef = useRef(null)
  const [ consulta, setConsul ] = useState(null)
  
  const getImage = async (query = '2022-05-07') => {
    //const req = await axios.get("https://api.nasa.gov/planetary/apod?date=2022-06-15&api_key=9IxjfqCCFeJ7xPQtX4RyChOJ6kApdNCEC7AMLjHf")
    //console.log("hizo la peticion")
    return await axios.get(`${url}date=${query}&api_key=${key}`)
  }

  const getData = async () => {
    try {
      const { data } = await getImage()
      setConsul(data)
    }
    catch (error){
      console.log('ocurrio un error',error.response.status)
  }
  }

  useEffect(() => {
    getData()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data } = await getImage(searchRef.current.value)
    setConsul(data)
    e.target.reset()
  }

  console.log("el valor de inicio de consulta es: ", consulta)

  return (
    <div>
      <Navbar/>
      <form onSubmit={handleSubmit}>
      <div className="container input-group mt-3 mb-3">
        <label className="input-group-text" htmlFor="search-date">Choose a date</label>
        <input ref={searchRef} className="form-control" type="date"  id="search-date"/>
        <button className="btn btn-secondary" type="submit">Search</button>
      </div>
      </form>
      { consulta == null ? <Loading /> : <ImgText data={ consulta }/> } 
    </div> 
  )
}

export default App
