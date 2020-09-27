import React from "react";
import "./App.css";
import {
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
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
            height: "auto",
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

            zIndex: 3,
            marginTop: 100,
            right: 20,
          }}
        >
          <br />
          <h3>Rotas - 27/09/20 </h3>
          <Row>
            <Col style={{ padding: 40 }}>
              <InputGroup>
                <Input
                  style={{ marginTop: 6, marginRight: 10 }}
                  addon
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
                <p>Rota Santarem - Calado 12</p>
              </InputGroup>
              <br />
              <InputGroup>
                <Input
                  style={{ marginTop: 6, marginRight: 10 }}
                  addon
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
                <p>Rota Santarem - Calado 12</p>
              </InputGroup>
              <br />
              <InputGroup>
                <Input
                  style={{ marginTop: 6, marginRight: 10 }}
                  addon
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
                <p>Rota Santarem - Calado 12</p>
              </InputGroup>
              <br />
              <InputGroup>
                <Input
                  style={{ marginTop: 6, marginRight: 10 }}
                  addon
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
                <p>Rota Santarem - Calado 12</p>
              </InputGroup>
              <br />
              <InputGroup>
                <Input
                  style={{ marginTop: 6, marginRight: 10 }}
                  addon
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
                <p>Rota Santarem - Calado 12</p>
              </InputGroup>
              <br />
            </Col>
          </Row>
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
