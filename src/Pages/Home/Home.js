import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary/BusinessSummary";
import ContactUs from "./ContactUs/ContactUs";
import Feedback from "./Feedback/Feedback";
import Products from "./Products/Products";
import Faq from "./Faq/Faq";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <BusinessSummary></BusinessSummary>
      <Feedback></Feedback>
      <ContactUs></ContactUs>
      <Faq></Faq>
    </div>
  );
};

export default Home;
