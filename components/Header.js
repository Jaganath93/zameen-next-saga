// import { useState } from "react";
"use client"
import { data } from "@/config/data";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Cards } from "./Cards";
import { getVillaFetchAction } from "@/redux/actionCreators";


const Header = ()=>{

    // const [getData,setGetData]=useState([]);
    
    const location = useSelector((state)=> state.location);
    const fetchVillasData = useSelector((state)=> state.villasData);
    const dispatch = useDispatch();
    console.log(fetchVillasData[0]?.data?.HouseAndVilla);
    const villas = fetchVillasData[0]?.data?.HouseAndVilla;

    console.log(villas);

  useEffect(()=>{
//   axios.post("https://zs-dev.firstfloor.site/api/home/fetch-home-related-property",{
//         location: {
//             type: "city",
//             city: "",
//             locality: []
//         }
    
//     }) .then((data)=> {setGetData(data.data.data.HouseAndVilla)})
      // console.log(getData)
     const fetchData = ()=>{
        dispatch(getVillaFetchAction());
     };
     fetchData();
    
  },[]);

//   const apartment = data[0].apartments;

  const responsive = {
    0: { items: 1 },
    568: { items: 1.5 },
    713: {items:2},
    1024: { items: 2.5 },
    1200: {items:3.5}
};

  const carouselData = villas?.map((apt,i)=> <Cards data={apt.property} key={i}/>)
    
    const items = carouselData? [...(carouselData)] : [];

    return(
        <div className="mt-5 pt-5">
        <div className="container-fluid">
            <div className="row mt-md-5 pt-5">
                <div className="col-12 col-sm-8 col-md-6 col-lg-5">
                <h3 className="fw-normal">Popular Apartment in {location}</h3>
                </div>
                {/* <div className="d-none d-sm-block col-4 col-md-6">
                    <button className={`border-0 rounded-2 ${all ? 'bhk-col' : ""}`} onClick={handleFilterAll}>All</button>
                    <button className={`ms-1 ms-md-3 border-0 rounded-2 ${twoBhk ? 'bhk-col' : ""}`} onClick={handleFilterTwo}>2 BHK</button>
                    <button className={`ms-1 ms-md-3 border-0 rounded-2 ${threeBhk ? 'bhk-col' : ""}`} onClick={handleFilterThree}>3 BHK</button>
                </div> */}
            </div>

            {/* Carousel */}
            <div className="row mt-5">      
                <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        disableDotsControls={true}
    />
            </div>

        </div>
        </div>
    );
};

export default Header