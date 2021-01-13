import Card from "../components/Card";
import Kaneki from "../assets/kaneki1.jpg";
import Col from "../components/Col";

const TechnologySection = () => (
    <Card>
        <Col>
            <img alt={"Kaneki"} src={Kaneki} style={styles.portrait} />
        </Col>
        <Col>
            <h1>Technology</h1>
            <ul>
                <li>
                    React
                </li>
                <li>
                    Javascript
                </li>
                <li>
                    NodeJS
                </li>
                <li>
                    Sales
                </li>
            </ul>
        </Col>
    </Card>
)

const styles = {
    portrait: {
        objectFit: "contain",
        maxHeight: 500
    }
}

export default TechnologySection