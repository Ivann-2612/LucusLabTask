import { useState,useEffect } from "react"
import { getData } from "./service";

const PageOne = () => {
const [data,setData] = useState([])    

useEffect(() => {
    getData().then(res => {
        //console.log(res.data.articles[0])
        setData(res.data)
    })
},[])

  
  
    return (
      <div>
     {
         data.map(item => 
             
               <div key={item.id}>
                   <p>{item.userId}</p>
                   <p>{item.title}</p>
                   <p>{item.body}</p>
             </div>  
             )
     }
      </div>
    )
  }
  export default PageOne