import React, { useState } from "react";
import "./App.css";
import {
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  CardHeader,
  CardFooter,
  CardBody,
} from "reactstrap";
import classnames from "classnames";

import Map from "./components/Map";
import Chart1 from "./components/Chart";
import Chart2 from "./components/Chart";
import Chart3 from "./components/Chart";
import Chart4 from "./components/Chart";
import Chart5 from "./components/Chart";
import { routes } from "./mock";

function App() {
  const [currentRoute, setRoute] = useState();
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const handleRouteSelect = (e) => {
    const { id } = e.target;

    setRoute(id);

    // console.log(currentRoute)
  };

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
            borderRadius: 15,
            boxShadow: "10px 11px 70px 0px rgba(135,135,135,1)",
          }}
        >
          {currentRoute == 1 && <Chart1 />}
          {currentRoute == 2 && <Chart2 />}
          {currentRoute == 3 && <Chart3 />}
          {currentRoute == 4 && <Chart4 />}
          {currentRoute == 5 && <Chart5 />}
        </div>

        <div
          style={{
            height: "75%",
            width: 500,
            position: "absolute",
            backgroundColor: "white",
            boxShadow: "10px 11px 70px 0px rgba(135,135,135,1)",
            zIndex: 3,
            marginTop: 100,
            right: 20,
            borderRadius: 15,
          }}
        >
          <br />
          <h3>ANALISES EM TEMPO REAL </h3>
          <Row>
            <Col style={{ padding: 40 }}>
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "1" })}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    ROTA DESEJADA
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "2" })}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    EMBARCACAO
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <Row>
                    <Col sm="12" style={{ marginTop: 20 }}>
                      {routes.map((data) => (
                        <InputGroup key={data.id}>
                          <Input
                            id="1"
                            style={{ marginTop: 6, marginRight: 10 }}
                            addon
                            type="radio"
                            aria-label="Checkbox for following text input"
                            name="route"
                            onChange={handleRouteSelect}
                          />
                          <p>{data.name}</p>
                          <br />
                        </InputGroup>
                      ))}
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col sm="6">
                      <Card body>
                        <CardTitle>CALCULO TRIM</CardTitle>
                        <CardText>CALCULO REFERENTE A TRIM</CardText>
                      </Card>
                    </Col>
                    <Col sm="6">
                      <Card body>
                        <CardTitle>CALCULO SQUAT</CardTitle>
                        <CardText>CALCULO REFERENTE A SQUAT</CardText>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <Button
                        style={{
                          width: "100%",
                          marginTop: 40,
                          backgroundColor: "orange",
                        }}
                      >
                        EFETUAR CALCULO
                      </Button>{" "}
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </div>
      </Row>
    </div>
  );
}

export default App;
