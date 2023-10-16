import React from 'react'
import {
    MDBCol,
    MDBRow,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
  } from "mdb-react-ui-kit";
import { Link } from 'react-router-dom';
export default function UserNavInfo() {
  return (
    <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <Link to="/">Home</Link>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <Link to="/profile">User</Link>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>
  )
}
