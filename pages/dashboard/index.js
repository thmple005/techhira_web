import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Logo from '/public/images/logo-2.svg'
import Phone from '/public/images/telephone.svg'
import PageTitle from '../../components/pagetitle/PageTitle'
import TableIndex from "../../components/Table/tableIndex";

const DashboardIndex = () => {



  return (
    <Fragment>
      <Navbar Logo={Logo} hclass={"wpo-site-header s3"} telephone={Phone} />
      <PageTitle  />
       <TableIndex/>
      <Footer />
    </Fragment>
  );
};

export default DashboardIndex;
