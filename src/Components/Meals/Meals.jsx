import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Landingimage from "../Landingpage/Landingimage";
import Popularcat from "../PopularCategory/Popularcategory";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Navbar from "../Navbar/Navbar";
import Choosefav from "../Choosefav/Choosefav";
function Meals() {
  const navigate = useNavigate();
  // async function renderMeals() {

  const { data, isLoading, error } = useQuery({
    queryKey: ["meals"],
    queryFn: async () => {
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      return res?.data;
    },
  });
  console.log(data?.meals);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Sorry an error occured</h1>;
  }

  return (
    <>
      <Navbar />
      <Landingimage />
      <Popularcat />
      <Choosefav/>

      <div className="latest" id="latestt">
        <h1 id="recipe">All Meals</h1>
        <div className="latestrecipe" id="latestrecipee">
          {data.meals.map((meals) => {
            return (
              <>
                {/* <div className="bestmeal" id="bestmeall">
                <Link to="/details"><img src={meals.strMealThumb} /></Link>
                <h5 id="popcatt">{meals.strMeal}</h5>
              </div> */}

                <div
                  onClick={() => navigate("/details")}
                  className="bestmeal"
                  id="bestmeall"
                >
                  <img src={meals.strMealThumb} />

                  <h5 id="popcatt">{meals.strMeal}</h5>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <Form />
      <Footer />
    </>
  );
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

export default Meals;
