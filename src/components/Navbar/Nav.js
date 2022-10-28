import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  
} from 'mdb-react-ui-kit';


import { Link } from 'react-router-dom';

function Navmain() {
  return (
        <MDBNavbar expand='lg' light bgColor='dark'>
        <MDBContainer >
        <MDBNavbarBrand href='#'>
          <Link to="/">
             <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtYEdCjcwu2floREjnnwKWW4G2NAzaENZAmw&usqp=CAU'
              height='30'
              alt=''
              loading='lazy'
          />
          </Link>
           
          </MDBNavbarBrand>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem >
                <MDBNavbarLink  ><Link style={{ textDecoration: 'none' }} className='text-info' to="weekDay" >WeekDay</Link></MDBNavbarLink>
              </MDBNavbarItem>
              
              <MDBNavbarItem>
                <MDBNavbarLink   ><Link style={{ textDecoration: 'none' }} className='text-info' to="revenue" >Revenue</Link></MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
         
        </MDBContainer>
      </MDBNavbar>


  );
}

export default Navmain;