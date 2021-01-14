import styled from "styled-components";

const Footer = () => (
  <FooterWrapper>
    <FooterItemWrapper>
      <FooterItemColumn>
        <Title>About Us</Title>
        <FooterItem href={""}>Text</FooterItem>
        <FooterItem href={""}>Text</FooterItem>
        <FooterItem href={""}>Text</FooterItem>
        <FooterItem href={""}>Text</FooterItem>
        <FooterItem href={""}>Text</FooterItem>
      </FooterItemColumn>
      <FooterItemColumn>
        <Title>Contact Me</Title>
        <FooterItem href={""}>Text</FooterItem>
        <FooterItem href={""}>Text</FooterItem>
        <FooterItem href={""}>Text</FooterItem>
        <FooterItem href={""}>Text</FooterItem>
        <FooterItem href={""}>Text</FooterItem>
      </FooterItemColumn>
      <FooterItemColumn>
        <Title>Videos</Title>
        <FooterItem href={""}>Text</FooterItem>
        <FooterItem href={""}>Text</FooterItem>
        <FooterItem href={""}>Text</FooterItem>
        <FooterItem href={""}>Text</FooterItem>
        <FooterItem href={""}>Text</FooterItem>
      </FooterItemColumn>
      <FooterItemColumn>
        <Title>Social Media</Title>
        <FooterItem href={""}>Text</FooterItem>
        <FooterItem href={""}>Text</FooterItem>
        <FooterItem href={""}>Text</FooterItem>
        <FooterItem href={""}>Text</FooterItem>
        <FooterItem href={""}>Text</FooterItem>
      </FooterItemColumn>
    </FooterItemWrapper>
    <Reserved>Created by Kaneki Ramos C All Rights Reserved 2021</Reserved>
  </FooterWrapper>
);

const Reserved = styled.div`
  border-style: solid;
  padding: 8px 800px 8px 800px;
  border-color: white;
  font-size: 12px;
  margin-bottom: 24px;
`;

const FooterWrapper = styled.div`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterItemWrapper = styled.div`
  display: flex;
  margin: 16px;
`;

const FooterItemColumn = styled.div`
  margin: 54px;
`;

const FooterItem = styled.a`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  text-decoration: none;
  color: white;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 18px;
`;

export default Footer;
