import React from 'react'

const Carousal = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}
>
      <div className="carousel-inner">
      <div className="carousel-caption" style={{zIndex:"10"}}>
  <form className="d-flex">
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
    <button className="btn btn-outline-success text-white bg-sucess" type="submit">Search</button>
  </form>
</div>

        <div className="carousel-item active">
          <img src="https://source.unsplash.com/random/900x700/?burger"
            style={{ filter: "brightness(30%)" }}
            className="d-block w-100" alt="..." />

        </div>
        <div className="carousel-item">
          <img src="https://source.unsplash.com/random/900x700/?pastry"
            style={{ filter: "brightness(30%)" }}

            className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://source.unsplash.com/random/900x700/?barbeque"
            style={{ filter: "brightness(30%)" }}
            className="d-block w-100" alt="..." />

        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );

}

export default Carousal
