import Card from "../components/Card";
import Col from "../components/Col";
import Mail from "../assets/Envelope.jpg";

import {
  SiLinkedin,
  SiInstagram,
  SiFacebook,
  SiGithub,
  SiMonzo,
  SiTwitch,
  SiYoutube,
  SiRiotgames,
} from "react-icons/si";

const ContactSection = () => (
  <Card>
    <Col>
      <img src={Mail} alt={"filler"} style={styles.portrait} />
    </Col>
    <Col>
      <h1>Get In Contact</h1>
      <p>
        <SiMonzo />
        Email
      </p>
      <p>
        <SiLinkedin />
        Linkedin
      </p>
      <p>
        <SiInstagram />
        Instagram
      </p>
      <p>
        <SiFacebook />
        Facebook
      </p>
      <p>
        <SiGithub />
        Github
      </p>
      <p>
        <SiTwitch />
        Twitch
      </p>
      <p>
        <SiYoutube />
        Youtube
      </p>
      <p>
        <SiRiotgames />
        Summoner
      </p>
    </Col>
  </Card>
);

const styles = {
  portrait: {
    objectFit: "contain",
    maxHeight: 500,
  },
};

export default ContactSection;
