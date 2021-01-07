import styled from "styled-components"

const Navbar = () => (
    <NavbarWrapper>
        <Logo />
        <NavItemsContainer>
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
        </NavItemsContainer>
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

const NavItemsContainer = styled.div`
    display: flex;
    min-width: 200px;
    align-items: center;
    margin-right: 20px;
`


export default Navbar