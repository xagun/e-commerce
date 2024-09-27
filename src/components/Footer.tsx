import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  background-color: var(--primary);
  border-top: 2px solid;
  position: relative;
  z-index: 40;
`;

const FooterContent = styled.div`
  padding: 80px;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 40px;
  }
`;

const FooterSection = styled.div`
  display: flex;
  gap: 38px;
  padding-bottom: 40px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const FooterNavigationColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 305px;
`;

const FooterNavigationHeader = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;

const FooterLink = styled.h2`
  font-size: 16px;
`;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 24px;
  font-weight: 700;
`;

const FooterIcons = styled.div`
  display: flex;
  gap: 6px;
  padding: 20px 0;
  color: black;
  font-size:24px;
  font-weight:700;
`;

// Footer Component
const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterNavigationColumn>
            <FooterNavigationHeader>Navigate</FooterNavigationHeader>
            <FooterLink>Home</FooterLink>
            <FooterLink>About</FooterLink>
            <FooterLink>Services</FooterLink>
            <FooterLink>Terms & Conditions</FooterLink>
            <FooterLink>Contact</FooterLink>
          </FooterNavigationColumn>

          <FooterNavigationColumn>
            <FooterNavigationHeader>Shop</FooterNavigationHeader>
            <FooterLink>Women</FooterLink>
            <FooterLink>Men</FooterLink>
            <FooterLink>Jackets</FooterLink>
            <FooterLink>New Arrivals</FooterLink>
            <FooterLink>Hot Picks</FooterLink>
          </FooterNavigationColumn>

          <FooterNavigationColumn>
            <FooterNavigationHeader>Explore</FooterNavigationHeader>
            <FooterLink>T-Shirts</FooterLink>
            <FooterLink>My Orders</FooterLink>
            <FooterLink>Wishlist</FooterLink>
            <FooterLink>Coats</FooterLink>
          </FooterNavigationColumn>

          <FooterNavigationColumn>
            <FooterLogo>
              E-Commerce
            </FooterLogo>
            <div className="flex flex-col">
              <h2 className="text-[16px]">Address Place, Bhaktapur</h2>
              <h2 className="text-[16px]">+977 98123123123</h2>
              <h2 className="text-[16px]">sagun@gmail.com</h2>
              <FooterIcons>
                <FaFacebook />
                <FaYoutube />
                <FaWhatsapp />
                <FaInstagram />
              </FooterIcons>
            </div>
          </FooterNavigationColumn>
        </FooterSection>
        <div className="flex justify-center py-10 border-t-gray-600 border-t">
          Copyright © 2024 . All Rights Reserved.
        </div>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
