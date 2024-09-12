import React, { Fragment, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Logo from "/public/images/logo-2.svg";
import Phone from "/public/images/telephone.svg";
import Footer from "../../components/footer/Footer";
import PageTitle from "../../components/pagetitle/PageTitle";
import ContactUsContainer from "./contact-us-container";
import { useRouter } from "next/router";
import axios from "axios";

const ContactDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [contactData, setContactData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return
    }
    else{

    const getContactData = async () => {
      try {
        const response = await axios.get(`/api/contact-us/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setContactData({
          ...contactData,
          name: response.data?.data[0]?.name,
          email: response.data?.data[0]?.email,
          message: response.data?.data[0]?.message,
          services: response.data?.data[0]?.services,
          number: response.data?.data[0]?.number,
        });
      } catch (error) {
        if(error.response.status===401){
          router.push('/login');
         }
      }
    };
    getContactData();
  }
  }, [id]);
  
  return (
    <Fragment>
      <Navbar Logo={Logo} hclass={"wpo-site-header s3"} telephone={Phone} />
      <PageTitle pageTitle="Contact Us" />
      <ContactUsContainer
        name={contactData.name}
        email={contactData.email}
        message={contactData.message}
        services={contactData.services}
        number={contactData.number}
      />
      <Footer />
    </Fragment>
  );
};

export default ContactDetail;
