import styled from "styled-components";
import homeVideo from "../assets/home.mp4";
import Button from "../components/Button";

const MainSection = () => (
  <SectionContainer>
    <video
      style={styles.video}
      src={homeVideo}
      autoPlay={true}
      loop={true}
      muted={true}
    />
    <OverlayContent>
      <Title>KANEKI RAMOS</Title>
      <Details>
        Full Stack Developer / Game Designer / Software Engineer
      </Details>
      <ButtonWrapper>
        <Button style={styles.Button}>Check me out</Button>
        <Button style={styles.Button}>Get in contact</Button>
      </ButtonWrapper>
    </OverlayContent>
  </SectionContainer>
);

const styles = {
  video: {
    objectFit: "cover",
    height: "100vh",
    width: "100vw",
  },

  Button: {
    border: "2px solid",
    padding: "5px 24px 16px 24px",
    backgroundColor: "transparent",
    borderRadius: "5px",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease-out",
  },
};

const Title = styled.h1`
  font-size: 105px;
  margin-top: -250px;
`;

const Details = styled.h2`
  font-size: 45px;
  margin-top: -60px;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const OverlayContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const SectionContainer = styled.div`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export default MainSection;
