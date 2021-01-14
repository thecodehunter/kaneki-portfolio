import Button from "../components/Button";
import Card from "../components/Card";
import Col from "../components/Col";
import Kaneki3 from "../assets/kaneki3.jpg";

const BlogSection = () => (
  <Card>
    <Col style={{ alignItems: "center" }}>
      <h1>Live Stream Coding</h1>
      <p>Text</p>
      <p>Text</p>
      <p>Text</p>
      <p>Text</p>
      <p>Text</p>
      <p>Text</p>
      <p>Text</p>
      <p>Text</p>
      <Button width={300}>Let's Go</Button>
    </Col>
    <Col>
      <img src={Kaneki3} alt={"filler"} style={styles.portrait} />
    </Col>
  </Card>
);

const styles = {
  portrait: {
    objectFit: "contain",
    width: "850px",
  },
};

export default BlogSection;
