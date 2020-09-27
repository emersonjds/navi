import React from "react";
import "./App.css";
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

import Map from "./components/Map";
import Chart from "./components/Chart";

function App() {
  return (
    <div className="App">
      <h1>Na'vi - Painel Oceanografico Brasileiro</h1>
      <Row style={{ zIndex: 1 }}>
        <Col md={12}>
          <Map />
        </Col>

        <div
          style={{
            height: "75%",
            width: "60vw",
            position: "absolute",
            backgroundColor: "white",
            zIndex: 3,
            marginTop: 100,
            left: 50,
          }}
        >
          <Chart />
        </div>

        <div
          style={{
            height: "75%",
            width: 500,
            position: "absolute",
            backgroundColor: "white",
            opacity: 0.5,
            zIndex: 3,
            marginTop: 100,
            right: 20,
          }}
        >
          <p>Lama</p>
          <p>Barco</p>
        </div>
        {/* <Col md={4}>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </FormGroup>
          </Form>
        </Col> */}
      </Row>
    </div>
  );
}

export default App;
