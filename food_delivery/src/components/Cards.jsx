import React from 'react'

const Cards = () => {
  return (
    <div><div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
    <img src="https://media.istockphoto.com/photos/chilli-paneer-tikka-on-paneer-kebab-picture-id629423010?k=20&m=629423010&s=612x612&w=0&h=X-OBInchHjNFqxGfQuQHWrYHi2GcUw-jn7kqqZpHSw8="
 className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        This is important text
      </p>
      <div>
        <p className="text">This is some important text.</p>
        <div className="container w-100">
          <select className="m-2 h-100  bg-success">
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}> {i + 1} </option>
              );
            })}
          </select>
          <select className='m-2 h-100 bg-success rounded'>
            <option value="half">Half</option>
            <option value="full">Full</option>
          </select>
          <div className='d-inline h-100 fs-5'>
            Total Price
          </div>

        </div>
      </div>

    </div>
  </div></div>
  )
}

export default Cards
