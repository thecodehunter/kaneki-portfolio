import styled from "styled-components";
import { SiRiotgames } from "react-icons/si";

const Navbar = () => (
  <NavbarWrapper>
    <NavLogoContainer>
      <a href={""}>
        <Logo />
      </a>
    </NavLogoContainer>
    <NavItemsContainer>
      <NavItem>
        <NavLink href={""}>Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href={""}>About</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href={""}>Products</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href={""}>Contact</NavLink>
      </NavItem>
    </NavItemsContainer>
    <NavItem>
      <Button href={""}>Sign Up</Button>
    </NavItem>
  </NavbarWrapper>
);

const Button = styled.button`
  border: 2px solid;
  font-size: 22px;
  padding: 10px;
  margin-top: 15px;
  background-color: transparent;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-out;
`;

const NavLogoContainer = styled.div`
  align-items: center;
  display: flex;
`;

const Logo = styled(SiRiotgames)`
  color: white;
  font-size: 54px;
  border-style: solid;
  border-color: white;
  padding: 8px;
  margin-left: 10px;
`;

const NavItem = styled.div`
  margin: 0px 10px 0px 10px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
`;

const NavbarWrapper = styled.div`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  display: flex;
  font-size: 26px;
  background-color: black;
  height: 80px;
  display: flex;
  padding: 10px;
  width: 100%;
  justify-content: space-between;
`;

const NavItemsContainer = styled.div`
  display: flex;
  min-width: 200px;
  align-items: center;
  margin-right: 20px;
`;

export default Navbar;
