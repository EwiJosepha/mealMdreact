
export async function relatedcategory({actualll}) {
    const catapi = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${actualll}`;
    const res = await fetch(catapi);
    const dataa = await res.json();
    console.log(dataa);
    const dat = dataa.meals.slice(0, 4);
    console.log(dat);

    return (
     <>
        {dat?.map((item)=>{ 
    
    <div className="divcard">
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
    console.log(dat);
  } )};
  </>
    )
    
}
