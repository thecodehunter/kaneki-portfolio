import styled from "styled-components"
// import homeVideo from "../assets/home.mp4"

const MainSection = () => (
    <SectionContainer>
        {/*<video style={{objectFit: "cover"}} src={homeVideo} autoPlay={true} loop={true} muted={true} />*/}
        <h1>KANEKI RAMOS</h1>
        <Details>
            Full Stack Developer / Game Designer / Software Engineer
        </Details>
        <div>
            <Button>Check me out</Button>
            <Button>Get in contact</Button>
        </div>
    </SectionContainer>
)

const Details = styled.p`
    display: flex;
    font-size: 12px;
`

const Button = styled.button`
    background: black;
    color: white;
    height: 44px;
    margin: 10px;
`

const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: yellow;
    height: 400px;
`

export default MainSection