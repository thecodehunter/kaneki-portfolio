import Card from "../components/Card";
import Kaneki from "../assets/kaneki1.jpg";

const styles = {
    column: {
        width: "50%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
    }
}

const TechnologySection = () => (
    <>
        <Card>
            <div style={styles.column}>
                <img src={Kaneki} style={{objectFit: "contain", maxHeight: 500}} />
            </div>
            <div style={styles.column}>
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
            </div>
        </Card>
    </>
)
export default TechnologySection