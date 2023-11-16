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
    // const similarmeals =  relatedcategory(data)
    // console.log(similarmeals);

  },[])



  console.log(data);
  return (
    <>

    </>
  )
}

export default Similar