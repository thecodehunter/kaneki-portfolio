import styled from "styled-components";

const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

/*
const Button = (props) => {
    // const theme = props.theme || THEME.DARK
    return <ButtonWrapper theme={theme}/>
}
 */

const Button = styled.button`
  background: ${(props) => (props.theme === THEME.DARK ? "black" : "white")};
  color: ${(props) => (props.theme === THEME.DARK ? "white" : "black")};
  height: 44px;
  margin: 10px;
  font-size: 24px;
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
`;

export default Button;
