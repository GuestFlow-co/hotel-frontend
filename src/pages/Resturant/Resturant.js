import React from 'react'
import { useSelector } from 'react-redux';
import ResturantCreate from './Create/ResturantCreate';
import ResturantList from './List/ResturantList';

export default function Resturant() {
    const resturants = useSelector((state) => state.resturants.resturants);
    console.log("Resturants",resturants)//resturants.food_id

  return (
    <div>
      <ResturantCreate/>
      <ResturantList/>
    </div>
  )
}
