import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "@fontsource/poppins";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  margin: auto;
`;

const Layout = () => {
  return (
    <Container>
      <Header />
      <div className="max-w-[1440px] px-8 md:px-16 mx-auto py-24 ">
        <Outlet />
      </div>

      <Footer />
    </Container>
  );
};

export default Layout;
