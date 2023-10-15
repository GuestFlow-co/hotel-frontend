import React from 'react'
import {
    MDBCol,
    MDBRow,
    MDBCardText,
    MDBCardBody,
    
  } from "mdb-react-ui-kit";
  import cookie from "react-cookies";

export default function UserCardInfo() {
  return (
    <MDBCardBody style={{ backgroundColor: "#fff",}}>
    <MDBRow>
      <MDBCol sm="3">
        <MDBCardText>First Name</MDBCardText>
      </MDBCol>
      <MDBCol sm="9">
        <MDBCardText className="text-muted">
        <div id='First Name'> {cookie.load('user')?.firstName} </div>
        </MDBCardText>
      </MDBCol>
    </MDBRow>
    <hr/>
    <MDBRow>
    <MDBCol sm="3">
        <MDBCardText>Last Name</MDBCardText>
      </MDBCol>
      <MDBCol sm="9">
        <MDBCardText className="text-muted">
        <div id='LastName'> {cookie.load('user')?.lastName} </div>
        </MDBCardText>
      </MDBCol>
      </MDBRow>
    <hr />
    <MDBRow>
      <MDBCol sm="3">
        <MDBCardText>Email</MDBCardText>
      </MDBCol>
      <MDBCol sm="9">
        <MDBCardText className="text-muted">
        <div id='email'> {cookie.load('user')?.email} </div>
        </MDBCardText>
      </MDBCol>
    </MDBRow>
    <hr />
    <MDBRow>
      <MDBCol sm="3">
        <MDBCardText>Phone</MDBCardText>
      </MDBCol>
      <MDBCol sm="9">
        <MDBCardText className="text-muted">
        <div id='phoneNumber'> {cookie.load('user')?.phoneNumber} </div>
        </MDBCardText>
      </MDBCol>
    </MDBRow>
    <hr />
    <MDBRow>
    </MDBRow>
    <hr />
    <MDBRow>         
    </MDBRow>
  </MDBCardBody>
  )
}
