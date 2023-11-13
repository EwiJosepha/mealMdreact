
function Video () {
  return (
    <>
    <p id="tpp">One thing i learn in the Carnasei section of Broklyn NyY was how to cook a good italian meal here is
      aresume of the recipe i created afterhaving this dish in a restaurant. Enjoy!</p>

    <div className="backgr">
      {/* <img src="https://images.unsplash.com/photo-1605807646983-377bc5a76493?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNha2VzfGVufDB8fDB8fHww" />  */}

      <iframe width="100%" height="480" src="https://www.youtube.com/embed/xVWwDc5aNDM?si=tIdl2j96YxNPpaG0"
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