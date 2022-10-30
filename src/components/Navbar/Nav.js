import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
} from "mdb-react-ui-kit";

import { Link } from "react-router-dom";

function Navmain() {
  return (
    <MDBNavbar expand="lg" light bgColor="dark">
      <MDBContainer>
        <div style={{ margin: "1%" }}>
          <Link to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtYEdCjcwu2floREjnnwKWW4G2NAzaENZAmw&usqp=CAU"
              height="30"
              alt=""
              loading="lazy"
            />
          </Link>
        </div>

        <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
          <MDBNavbarItem style={{ margin: "1%" }}>
            <Link
              style={{ textDecoration: "none" }}
              className="text-info"
              to="weekDay"
            >
              WeekDay
            </Link>
          </MDBNavbarItem>

          <MDBNavbarItem style={{ margin: "1%" }}>
            <Link
              style={{ textDecoration: "none" }}
              className="text-info"
              to="revenue"
            >
              Revenue
            </Link>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Navmain;
