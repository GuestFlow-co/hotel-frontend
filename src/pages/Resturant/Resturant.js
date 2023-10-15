import React from 'react'
import { useSelector } from 'react-redux';

export default function Resturant() {
    const resturants = useSelector((state) => state.resturants.resturants);
    console.log("Resturants",resturants)//resturants.food_id

  return (
    <div>
      
    </div>
  )
}
