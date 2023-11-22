import React from 'react'
import Rating from '@mui/material/Rating';
import {Datas} from'./SharedItem'
import '../../assert/MainContent.css'
import NavBar from '../NavBar';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../Main/Main.css';
import { NavLink,Link } from 'react-router-dom';
const MainContent=()=> {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        centerPadding: "10px",
        
        width: 600
      };

  return (
    <>
    
    <NavBar />
    <Slider {...settings}>
    {
        Datas.map((item,index)=>
        {
       return(     
    <div className='card-container' >
        <div className="image-container">
            <img src={item.img} alt=''/>
        </div>
        <div className="card-content">
            <div className="card-title">
                <h3>{item.name}</h3>
            </div>
            <div className="card-body">
                <p>{item.author}</p>
            </div>
            </div>
        
        <div className="btn">
            <div>
           <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
        </div>
             <button> 
                <NavLink to='/maindetails'> 
                    view more
                 </NavLink> 
             </button> 
        </div> 
        </div>
         ) })
        }
        </Slider>
     
        </>
  )
}

export default MainContent;