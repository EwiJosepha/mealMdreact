import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import axios from "axios";
import { relatedcategory } from "./Manysimilarities";

function Similar () {
  const getsimilar= JSON.parse(localStorage.getItem("mealidd"));
  
  const { data } = useQuery({
    queryKey: ["similar"],
    queryFn: async () => {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${getsimilar}`
      );
      return res.data.meals
    },
  });

  useEffect(()=>{
    // console.log(similarmeals);

  },[])

  // const similarmeals =  relatedcategory(data)
 console.log(data);
  return (
    <>
         {data?.map((item)=>{ 
    
    return <div className="divcard">
    <img src={item.strMealThumb} />
        
    <div className="text">
          <div className="sta">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
    <p id="caramel">{item.strMeal}</p>

  </div>
  </div>
  } )}
    </>
  )
}

export default Similar