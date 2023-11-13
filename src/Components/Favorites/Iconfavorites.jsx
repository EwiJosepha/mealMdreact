function Favorites () {
  return (
    <>
       <div className="wrapper">
      <div className="arrowlogo">
        <div className="arro">
          <i className="fa-solid fa-arrow-trend-up" id="gla"></i>
          <span id="gain">85% will make this gain</span>
        </div>
        <div className="favorit" id="favor">
          <i className="fa-solid fa-arrow-up-from-bracket" id="gla"></i>
          <i className="fa-solid fa-bookmark" id="glaa"></i>
        </div>
      </div>

      <div className="strmeal"></div>
      <h1 id="berry"></h1> 



      <div className="flexstar">
        <div className="smallimage">
          <img
            src="https://media.istockphoto.com/id/182924845/fr/photo/spaghetti-%C3%A0-la-bolognaise-avec-feuilles-de-basilic.webp?b=1&s=170667a&w=0&k=20&c=g60SDvd1ZYj4PScloP5L0LSowPAvE64ANLbFsych864="
            alt="popular Meals" />
          <span id="alb">Tricia Albert</span>
        </div>
        <div className="date">
          <div className="messag">
            <i className="fa-regular fa-message"></i>
            <p>Yesterday</p>
          </div>
          <div className="mes">
            <i className="fa-regular fa-calendar-minus"></i>
            <p>456</p>
          </div>
        </div>

        <div className="stars">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
      </div>
    </div>
    </>
  )
}

export default Favorites