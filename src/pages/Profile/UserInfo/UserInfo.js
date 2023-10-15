import React from 'react'
import cookie from 'react-cookies';
export default function UserInfo() {
  return (
    <div className=''>
          <div id='phoneNumber'> {cookie.load('user')?.phoneNumber} </div>
          <div id='email'> {cookie.load('user')?.email} </div>
    </div>
  )
}
