import styled, { css } from "styled-components";

import { breakpoints } from "../../styles/breakpoints";
import { FooterCard } from "../FooterCard/FooterCard";
import { Logo } from "../Logo";
import googlePlayBanner from "../../assets/images/googleplay-banner.png";
import appStoreBanner from "../../assets/images/appstore-banner.png";
import { FooterContainer, FooterTop, FooterBottom } from "./Footer.styles";

export const Footer = () => {
  const navigationLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Categories",
      href: "/categories",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Login",
      href: "/login",
    },
  ];

  const socialMediaLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      external: true,
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      external: true,
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      external: true,
    },
  ];

  return (
    <FooterContainer>
      <div className="container">
        <FooterTop>
          <Logo large logoOnly />
          <FooterCard title="Discover Us" links={navigationLinks} />
          <FooterCard title="Our social media" links={socialMediaLinks} />
          <FooterCard title="Check our apps">
            <FooterBottom>
              <img
                alt="app store link"
                style={{ width: "120px", marginBottom: "0.5rem" }}
                src={appStoreBanner}
              />
              <img
                alt="google play link"
                style={{ width: "120px" }}
                src={googlePlayBanner}
              />
            </FooterBottom>
          </FooterCard>
        </FooterTop>
      </div>
    </FooterContainer>
  );
};
