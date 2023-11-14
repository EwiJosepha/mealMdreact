import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function Video () {
  const [video, setVideo] = useState("video")
  const videoNewkey = JSON.parse(localStorage.getItem("mealidd"));


  // const [video, setVideo]= useState('')

   const { data } = useQuery({
    queryKey: ["meallls"],
    queryFn: async () => {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${videoNewkey}`
      );

      return res.data.meals
    },
  });

  console.log(data);

   function displayvideo (obj, vido) {

    for (let value of Object.values(obj)) {
      if (value === vido) {
        vido.split("V=")
        const indexofsplitted =vido[1]
        // return indexofsplitted
      }
    }
   
  }
    useEffect(()=>{

    if(data){
     const gottenvideo = displayvideo (data, 
      "https://www.youtube.com/watch?v=ub68OxEypaY")
      setVideo(gottenvideo)
   }

  //  const videokey = JSON.parse(localStorage.getItem("mealidd"));
  },[data])

  // console.log(video);
  console.log(data);

  console.log(video);


  return (
    <>
    <p id="tpp">One thing i learn in the Carnasei section of Broklyn NyY was how to cook a good italian meal here is
      aresume of the recipe i created afterhaving this dish in a restaurant. Enjoy!</p>

    <div className="backgr">

      <iframe width="100%" height="480" src={video}
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>

    <div className="prep">
      <div className="time">
        <p id="prep">Prep-Time</p>
        <h6 id="time">15</h6>
      </div>
      <div className="time">
        <p id="prep">Prep-Time</p>
        <h6 id="time">15</h6>
      </div>
      <div className="time">
        <p id="prep">Servings</p>
        <h6 id="time">15</h6>
      </div>
    </div>

    </>
  )
} 

export default Video