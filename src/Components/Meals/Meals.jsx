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
  // const {mealid} = useContext(Appcontextt)

  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery({
    queryKey: ["mealss"],
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
          {data.meals.slice(0,24).map((meals) => {
            return (
              <>

                <div
                  onClick={() =>{navigate("/details")
                  JSON.stringify(localStorage.setItem("mealidd", meals.idMeal));
                 console.log(meals.idMeal);
               } }
                  className="bestmeal"
                  id="bestmeall"
                >
                  <img src={meals.strMealThumb} />

                  <div className="area">
                  <h5 id="popcatt">{meals.strMeal}</h5>
                    <h5 id="area">{meals.strArea}</h5>
                  </div>
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
 
}

export default Meals;
