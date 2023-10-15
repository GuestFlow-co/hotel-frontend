import React from 'react'
import { HiUserCircle } from 'react-icons/hi';
import cookie from 'react-cookies';
import './UserNameInfo.scss'

export default function UserNameInfo() {
  return (
    <div>
        <div className='Info'>
        <div id='leftside'>
          <HiUserCircle id='profileIcon' />
          <div className='username'>
            <div id='theName'> {cookie.load('user')?.username} </div>
            {/* <div id='theRole'> {cookie.load('user')?.role}</div> */}
          </div>
        </div> 
      </div>
    </div>
  )
}
