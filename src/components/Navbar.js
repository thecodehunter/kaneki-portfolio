import styled from "styled-components"

const Navbar = () => (
    <NavbarWrapper>

       <NavLeftContainer>
           <Logo />
       </NavLeftContainer>

        <NavRightContainer>
            <NavItem>
                <NavLink>
                    Home
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink>
                    About
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink>
                    Contact
                </NavLink>
            </NavItem>
        </NavRightContainer>

    </NavbarWrapper>
)

const Logo = () => <div>👻</div>

const NavItem = styled.div`
    margin: 0px 10px 0px 10px;
`

const NavLink = styled.a`
    color: white;
`


const NavbarWrapper = styled.div`
    display: flex;
    background-color: black;
    padding: 10px;
    width: 100%;
    height: 24px;
    justify-content: space-between;
`
const NavLeftContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 24px;
`

const NavRightContainer = styled.div`
    display: flex;
    min-width: 200px;
    align-items: center;
    margin-right: 20px;
`


export default Navbar