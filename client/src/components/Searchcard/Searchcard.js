import React from 'react'
import './Searchcard.css'

const Searchcard = () =>{
  const divStyle = {
    backgroundImage: 'url(https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)',
  }
return(
<>
  <div className="searchSection">

    <div style={divStyle} className="background" />

    <div className="searchbar">
      <div className="search">
        <input type="search" placeholder="Job/Position" />
          <button className="btn"><i className="material-icons">search</i></button>
      </div>
      <div className="search">
        <input type="search" placeholder="Location" />
          <button className="btn"><i className="material-icons">place</i></button> 
      </div>
    </div>
  </div>
  </>
)
}

export default Searchcard