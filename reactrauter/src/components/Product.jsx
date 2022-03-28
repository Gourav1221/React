import React from 'react'

export const Product = () => {
    const [data,setdata] = useState([]);
 useEffect(() =>{
   
  getdata()
    
 },[])

 async function getdata(){
     let data =  await axios.get("https://github.com/typicode/json-server");
     console.log(data)
 }
  return (
    <div>Product</div>
  )
}
