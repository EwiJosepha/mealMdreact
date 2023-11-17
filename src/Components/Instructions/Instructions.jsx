import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import Similar from "../Similarities/Similar";
import "./Instruction.css"

function Instruction() {
  let currentmeal;
  const getid = JSON.parse(localStorage.getItem("mealidd"));
  const [ingredients, setIngredients] = useState([]);

  const { data } = useQuery({
    queryKey: ["instuandingrs"],
    queryFn: async () => {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${getid}`
      );

      return res.data.meals;
    },
  });

  const createArrayFromObjectKeys = (obj, target_key) => {
    const target_legnth = target_key.length;
    const array_items = [];

    for (let key of Object.keys(obj)) {
      if (
        key.slice(0, target_legnth) === target_key &&
        obj[key].trim() !== ""
      ) {
        array_items.push(obj[key]);
      }
    }

    return array_items;
  };

  useEffect(() => {
    if (data) {
      const res = data[0];
      const arrStrIngds = createArrayFromObjectKeys(res, "strIngredient");
      setIngredients(arrStrIngds);
    }

    console.log({ data });
  }, [data]);

  return (
    <>
      <div className="containersflex">
        <div className="twowrapper">
          <div className="ingredients">
            <h4 id="ingredients">Ingredients</h4>
            <div className="ul2">
              <h5></h5>
              <ul type="circle" id="display-ingredients">
                {ingredients?.map((ingr, index) => (
                  <li key={index}>{ingr}</li>
                ))}
              </ul>
            </div>
          </div>

          <h4 id="instructions">Instructions</h4>
          <div className="instruc" id="instrucc">
           {data?.map((instrutions)=>{
              return <p>{instrutions.strInstructions}</p>
            })}
          </div>
        </div>

        <div className="fourimage">
        <div class="card">
          {data?.map((measurements)=>{
            return <p>{measurements.strMeasurements}</p>
          })}
      <div class="container">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
  </div>
</div>
          <Similar />
          <div className="formm"></div>

          <div className="alreadymade">
            <h3 id="txtcenter">Already made this ?</h3>
            <div className="btnmade">
              <button id="already">Share Your Feedback</button>
              <div id="orangg"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Instruction;
