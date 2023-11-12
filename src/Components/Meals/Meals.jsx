import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

function Meals () {

  // async function renderMeals() {

    const {data}= useQuery(["meals"], ()=>{
      return axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=").then((res)=>res.data)
    })

    console.log(data);

    return (
      <>
      <div  className ="latestrecipe"id="latestrecipee">
      <div className="bestmeal" id="bestmeall">
        {data.map((meals)=>{
          return(
            <>
             <Link to={d}><img src={meals.strMealThumb}/></Link>
            <h6>{meals.strMeal}</h6>
            </>
          )  
        })}
    
      </div>
      </div>
    </>
    ) 
  //   const url = "https://www.themealdb.com/api/json/v1/1/search.php?s="
  //   const response = await fetch(url)
  //   // const data = await response.json()
  //   console.log(data);
  
  //   data.meals.forEach((meal) => {
  //     const mealDiv = document.createElement("div");
  //     const aTag = document.createElement("a");
  //     const imageTag = document.createElement("img");
  //     const hTag = document.createElement("h6");
  
  //     mealDiv.className = "bestmeal";
  //     mealDiv.id = "bestmeall";
  //     aTag.href = "./deatails.html";
  
  //     imageTag.src = `${meal.strMealThumb}`;
  //     imageTag.alt = "popular Meals";
  //     hTag.innerHTML = `${meal.strMeal}`;
  
  //     aTag.appendChild(imageTag);
  //     mealDiv.appendChild(aTag);
  //     mealDiv.appendChild(hTag);
  
  //     latestrec.appendChild(mealDiv);
  
  //     aTag.addEventListener("click", () => {
  //       sessionStorage.setItem("mealId", meal.idMeal);
  
  //       // sessionStorage.setItem("strCategory", meal.strCategory)
  //     })
  
  //     document.getElementById('bestmeall').addEventListener('click', () => {
  //       console.log("item name: ", meal.strMeal);
  //     })
  
  
  //   })
  
  
  // }
  
  
  
  // renderMeals()
}

export default Meals