import { useQuery } from "@tanstack/react-query";
// import { Appcontextt } from "../../App"
// import Meals from "../Meals/Meals";
import axios from "axios";
import { useEffect, useState } from "react";

function Instruction() {
  let currentmeal;
  const getid = JSON.parse(localStorage.getItem("mealidd"));
  const [ingredients, setIngredients] = useState([]);


  const { data } = useQuery({
    queryKey: ["mealls"],
    queryFn: async () => {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${getid}`
      );

      return res.data.meals[0];
    },
  });

  //

  const createArrayFromObjectKeys = (obj, target_key) => {
    const target_legnth = target_key.length;
    const array_items = [];

    for (let key of Object.keys(obj)) {
      if (key.slice(0, target_legnth) === target_key && obj[key].trim() !== "") {
        array_items.push(obj[key]);
      }
    }

    return array_items;
  };

  useEffect(() => {
    if (data) {
      const arrStrIngds = createArrayFromObjectKeys(data, "strIngredient");
      setIngredients(arrStrIngds);
    }

    console.log(data);
  }, [data]);

  return (
    <>
      <div className="containersflex">
        <div className="twowrapper">
          <div className="ingredients">
            <h4 id="ingredients">Ingredients</h4>
            <div className="ul2">
              <h5>{data?.strArea}</h5>
              <ul type="circle" id="display-ingredients">
                {/* <li>{data?.strIngredient1}</li> */}
                {ingredients?.map((ingr) => (
                  <li>{ingr}</li>
                ))}
              </ul>
            </div>
          </div>

          <h4 id="instructions">Instructions</h4>
          <div className="instruc" id="instrucc">
            <p>{data?.strInstructions}</p>
          </div>
        </div>

        <div className="fourimage">
          <div className="nutrition">
            <h4 id="nutfact">Nutrition Facts</h4>
            <div className="calo">
              <span>Calories</span>
              <span>12kg</span>
            </div>
            <div className="calo">
              <span>Calories</span>
              <span>12kg</span>
            </div>
            <div className="calo">
              <span>Calories</span>
              <span>12kg</span>
            </div>
            <div className="calo">
              <span>Calories</span>
              <span>12kg</span>
            </div>
            <div className="calo">
              <span>Calories</span>
              <span>12kg</span>
            </div>
            <div className="calo">
              <span>Calories</span>
              <span>12kg</span>
            </div>
            <div className="calo" id="radiusb">
              <span>Calories</span>
              <span>12kg</span>
            </div>
          </div>
          <div className="fimages" id="cardd">
            <div className="envelop">
              <p id="freshh">Fresh Recipes</p>
              <div className="card">
                <div className="divcard"></div>
                <div className="text">
                  <div className="sta"></div>
                  <p id="caramel">Caramel Strawberry</p>
                </div>
              </div>
            </div>
          </div>

          <div class="formm"></div>

          <div class="alreadymade">
            <h3 id="txtcenter">Already made this ?</h3>
            <div class="btnmade">
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
