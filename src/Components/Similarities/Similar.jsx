import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import axios from "axios";

function Similar () {
  const getsimilar= JSON.parse(localStorage.getItem("mealidd"));

  
  const { data } = useQuery({
    queryKey: ["mealls"],
    queryFn: async () => {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${getsimilar}`
      );

      return res.data.meals
    },
  });

  useEffect(()=>{
    console.log(data);

  },[])

  console.log(data);
  return (
    <>
         <div className="fimages" id="cardd">
            <div className="envelop">
              <p id="freshh">Fresh Recipes</p>
              <div className="card">
                <div className="divcard">
                  <img src={data?.strMealThumb} />
                </div>
                <div className="text">
                  <div className="sta">
                   
                  </div>
                  <p id="caramel">Caramel Strawberry</p>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Similar