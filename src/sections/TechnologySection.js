import Card from "../components/Card";
import Kaneki from "../assets/kaneki1.jpg";
import Col from "../components/Col";

const TechnologySection = () => (
  <Card>
    <Col>
      <img alt={"Kaneki"} src={Kaneki} style={styles.portrait} />
    </Col>
    <Col>
      <h1>Skills & Technology</h1>
      <ul>
        <li>Text</li>
        <li>Text</li>
        <li>Text</li>
        <li>Text</li>
      </ul>
    </Col>
  </Card>
);

const styles = {
  portrait: {
    objectFit: "contain",
    width: "1500px",
    height: "700px",
  },
};

export default TechnologySection;
