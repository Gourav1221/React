import axios from "axios";
import { useState,useEffect } from "react";

export const Home = () => {
 const [data,setdata] = useState([]);
 useEffect(() =>{
   
  getdata()
    
 },[])

 async function getdata(){
     let data =  await axios.get("https://github.com/typicode/json-server");
     console.log(data)
 }
    return (
        <div>
           
        </div>
    )
}