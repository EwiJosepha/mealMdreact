import { useQuery } from "@tanstack/react-query"
import axios from "axios"

 function Popularcat () {
  const {data, isLoading, error}= useQuery(["popularcategories"] , ()=>{
   return axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f=a").then((res)=>res.data)
   
  })
  console.log(data);
  if(isLoading){
     return <h1>Loading...</h1> 
  }

  if(error) {
    return <h1>Sorry an error occured</h1>
  }
  

  return (
    <>

   
  {data?.forEach((meal) => {

      <div className="imagetitle">
        <img
          src={meal.strMealThumb}
          alt="popular Meals" />
         
        <h5 id="popcatt">{meal.strMeal}</h5>
       
      </div>
  
  })}
    </>
  )

}

export default Popularcat 
