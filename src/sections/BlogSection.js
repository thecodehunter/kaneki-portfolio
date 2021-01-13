import Button from "../components/Button";
import Card from "../components/Card";
import Col from "../components/Col";
import Kaneki from "../assets/kaneki1.jpg";

const BlogSection = () => (
    <Card>
        <Col style={{alignItems: "center"}}>
            <h1>Live Stream Coding</h1>
            <p>
                If you enjoy dsjlfkdsjflksd sd fklsdfkl sdfkl sdjksdf sdklsdklf jsdlkf sdlkjsd lksdflk  schedule !
            </p>
            <Button width={300}>Let's Go</Button>
        </Col>
        <Col>
            <img src={Kaneki} style={styles.portrait} />
        </Col>

    </Card>
)

const styles = {
    portrait: {
        objectFit: "contain",
        maxHeight: 500
    }
}


export default BlogSection

