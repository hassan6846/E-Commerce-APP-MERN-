// imports css
import React from 'react'
import "./Catalogue.css";
import { Link } from 'react-router-dom'

const Catalogue = () => {
  return (
     
<div className='Catlogue_wrapper'>

    <div className='Catalogue_row' >
   <Link className='width_33_1' style={{backgroundImage: `url("./Men_Desktop.jpg")`}}></Link>
        <div  className='width_33_2  middle_column  ' > 
          <Link className='middle_child  middle_1'style={{backgroundImage:`url("./KidsCat.jpg")`}} ></Link> 
          <Link className='middle_child middle_2' style={{backgroundImage:`url(./trends.jpg)`}} ></Link>
          </div>
          <Link className='width_33_3' style={{backgroundImage: `url("./Women.jpg")`}}></Link>
    </div>
</div>
  )
}

export default Catalogue;

