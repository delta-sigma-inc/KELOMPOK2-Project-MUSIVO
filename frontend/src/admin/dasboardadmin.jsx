import React, { useState } from "react";
import NavigationBar from "../components/layouts/navigationBar/navigationBar";
import Sidebar from "../components/layouts/sidebar/sidebaradmin";
import Navbar from "../admin components/navbar";
import Card from "../admin components/card";
import Profil from "../admin components/profil";

  const Dasboardadmin = () => {
    return (
        <React.Fragment>
        <Sidebar />
      <div>
        <NavigationBar />
          </div>
          <div>
          <Navbar />
          </div>
          <Card />   
          <div>
          <Profil />
        </div>
        </React.Fragment>
      );
    };
export default Dasboardadmin;