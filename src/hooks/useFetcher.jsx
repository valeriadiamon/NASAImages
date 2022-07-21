import { useEffect, useState } from 'react'
import { getImage } from '../utils/getImage'

const useFetcher = (query = '2022-07-13') => {
  const [dataState, setDataState] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    const { data } = await getImage(query)
    if (data.Response !== 'False') {
      setDataState(data.Search)
    } else {
      setDataState([])
    }
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [query])

  return { dataState, loading }
}

export default useFetcher