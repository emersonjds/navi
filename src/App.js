import React , {useState} from "react";
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
import Chart1 from "./components/Chart";
import Chart2 from "./components/Chart";
import Chart3 from "./components/Chart";
import Chart4 from "./components/Chart";
import Chart5 from "./components/Chart";

function App() {

  const [currentRoute, setRoute] = useState()

  const handleRouteSelect = (e) => {
    const {id} = e.target
    
    setRoute(id)

    // console.log(currentRoute)
  }

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
          {currentRoute==1 && <Chart1 />}
          {currentRoute==2 && <Chart2 />}
          {currentRoute==3 && <Chart3 />}
          {currentRoute==4 && <Chart4/>}
          {currentRoute==5 && <Chart5 />}
          
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
                  id="1"
                  style={{ marginTop: 6, marginRight: 10 }}
                  addon
                  type="radio"
                  aria-label="Checkbox for following text input"
                  name="route"
                  onChange={handleRouteSelect}
                />
                <p>Rota Santarem - Calado 12</p>
              </InputGroup>
              <br />
              <InputGroup >
                <Input
                  id="2"
                  style={{ marginTop: 6, marginRight: 10 }}
                  addon
                  type="radio"
                  aria-label="Checkbox for following text input"
                  name="route"
                  onChange={handleRouteSelect}
                />
                <p>Rota Santarem - Calado 12</p>
              </InputGroup>
              <br />
              <InputGroup>
                <Input
                  id="3"
                  style={{ marginTop: 6, marginRight: 10 }}
                  addon
                  type="radio"
                  aria-label="Checkbox for following text input"
                  name="route"
                  onChange={handleRouteSelect}
                />
                <p>Rota Santarem - Calado 12</p>
              </InputGroup>
              <br />
              <InputGroup>
                <Input
                  id="4"
                  style={{ marginTop: 6, marginRight: 10 }}
                  addon
                  type="radio"
                  aria-label="Checkbox for following text input"
                  name="route"
                  onChange={handleRouteSelect}
                />
                <p>Rota Santarem - Calado 12</p>
              </InputGroup>
              <br />
              <InputGroup>
                <Input
                  id="5"
                  style={{ marginTop: 6, marginRight: 10 }}
                  addon
                  type="radio"
                  aria-label="Checkbox for following text input"
                  name="route"
                  onChange={handleRouteSelect}
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
