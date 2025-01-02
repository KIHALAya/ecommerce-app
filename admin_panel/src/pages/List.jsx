import React, { useEffect } from 'react'
import { assets } from '../assets/admin_assets/assets'
import { useState } from 'react'  
import { backendURL } from '../App'


const List = () => {
  const [list, setList] = useState([])  



  const fetchList = async () => { 
    try{

      const response = await axios.get(backendURL + "/api/product/getProducts")  
      console.log(response.data);

    }catch(error){

    }

  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default List
