import styled from "styled-components"
import homeVideo from "../assets/home.mp4"
import Button from "../components/Button";

const MainSection = () => (
    <SectionContainer>
        <video style={styles.video} src={homeVideo} autoPlay={true} loop={true} muted={true} />
        <OverlayContent>
            <h1>KANEKI RAMOS</h1>
            <Details>
                Full Stack Developer / Game Designer / Software Engineer
            </Details>
            <div>
                <Button theme={"dark"}>Check me out</Button>
                <Button theme={"dark"}>Get in contact</Button>
            </div>
        </OverlayContent>
    </SectionContainer>
)

const styles = {
    video: {
        objectFit: "fill",
        height: "400px",
        width: "100%"
    }
}

const Details = styled.p`
    display: flex;
    font-size: 12px;
`

const OverlayContent = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
`

const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
`

export default MainSection