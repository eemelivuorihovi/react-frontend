import './App.css';
import Time from "./components/Time";
import {Col, Row} from "react-bootstrap";
import Metrics from "./components/Metrics";

const App = () => {
  return (
    <div className="App">
        <Row>
            <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                <Time />
            </Col>
            <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                <Metrics />
            </Col>
        </Row>
    </div>
  );
};

export default App;
