import React, { Component } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  ReferenceLine,
  ReferenceArea,
  ReferenceDot,
  Tooltip,
  CartesianGrid,
  Legend,
  Brush,
  ErrorBar,
  AreaChart,
  Area,
  Label,
  LabelList,
} from "recharts";
import { scalePow, scaleLog } from "d3-scale";
import { changeNumberOfData } from "./utils";
import CustomLineDot from "./CustomLineDot";

function Hello() {
  return <div>Hello</div>;
}

const data = [
  { name: "Page A", uv: 1000, pv: 2400, amt: 2400, uvError: [75, 20] },
  { name: "Page B", uv: 300, pv: 4567, amt: 2400, uvError: [90, 40] },
  { name: "Page C", uv: 280, pv: 1398, amt: 2400, uvError: 40 },
  { name: "Page D", uv: 200, pv: 9800, amt: 2400, uvError: 20 },
  { name: "Page E", uv: 278, pv: null, amt: 2400, uvError: 28 },
  { name: "Page F", uv: 189, pv: 4800, amt: 2400, uvError: [90, 20] },
  { name: "Page G", uv: 189, pv: 4800, amt: 2400, uvError: [28, 40] },
  { name: "Page H", uv: 189, pv: 4800, amt: 2400, uvError: 28 },
  { name: "Page I", uv: 189, pv: 4800, amt: 2400, uvError: 28 },
  { name: "Page J", uv: 189, pv: 4800, amt: 2400, uvError: [15, 60] },
];

const data01 = [
  { day: "05-01", weather: "sunny" },
  { day: "05-02", weather: "sunny" },
  { day: "05-03", weather: "cloudy" },
  { day: "05-04", weather: "rain" },
  { day: "05-05", weather: "rain" },
  { day: "05-06", weather: "cloudy" },
  { day: "05-07", weather: "cloudy" },
  { day: "05-08", weather: "sunny" },
  { day: "05-09", weather: "sunny" },
];

const data02 = [
  { name: "Page A", uv: 300, pv: 2600, amt: 3400 },
  { name: "Page B", uv: 400, pv: 4367, amt: 6400 },
  { name: "Page C", uv: 300, pv: 1398, amt: 2400 },
  { name: "Page D", uv: 200, pv: 9800, amt: 2400 },
  { name: "Page E", uv: 278, pv: 3908, amt: 2400 },
  { name: "Page F", uv: 189, pv: 4800, amt: 2400 },
  { name: "Page G", uv: 189, pv: 4800, amt: 2400 },
];

const series = [
  {
    name: "Series 1",
    data: [
      { category: "A", value: Math.random() },
      { category: "B", value: Math.random() },
      { category: "C", value: Math.random() },
    ],
  },
  {
    name: "Series 2",
    data: [
      { category: "B", value: Math.random() },
      { category: "C", value: Math.random() },
      { category: "D", value: Math.random() },
    ],
  },
  {
    name: "Series 3",
    data: [
      { category: "C", value: Math.random() },
      { category: "D", value: Math.random() },
      { category: "E", value: Math.random() },
    ],
  },
];

const initialState = {
  data,
  data01,
  data02,
  opacity: 1,
  anotherState: false,
};

const renderSpecialDot = (props) => {
  const { cx, cy, stroke, key } = props;

  if (cx === +cx && cy === +cy) {
    return <path d={`M${cx - 2},${cy - 2}h4v4h-4Z`} fill={stroke} key={key} />;
  }

  return null;
};

const renderLabel = (props) => {
  const { x, y, textAnchor, key, value } = props;

  if (x === +x && y === +y) {
    return (
      <text x={x} y={y} dy={-10} textAnchor={textAnchor} key={key}>
        {value}
      </text>
    );
  }

  return null;
};

const scale = scaleLog().base(10).nice();
const specifiedDomain = [0.01, "auto"];
const specifiedTicks = [0.01, 0.1, 1, 10, 100, 1000];
const specifiedMargin = { top: 20, right: 20, bottom: 20, left: 20 };

export default class Chart extends Component {
  static displayName = "LineChartDemo";

  state = initialState;

  handleClick = (data, e) => {
    console.log(data);
  };

  handleLineClick = (data, e) => {
    console.log("callback", data, e);
  };

  handleLegendMouseEnter = () => {
    this.setState({
      opacity: 0.5,
    });
  };

  handleClickDot = (data, e) => {
    console.log("dot click", data, e);
  };

  handleLegendMouseLeave = () => {
    this.setState({
      opacity: 1,
    });
  };

  handleChangeAnotherState = () => {
    this.setState({
      anotherState: !this.state.anotherState,
    });
  };

  render() {
    const { data, data01, data02, opacity } = this.state;

    return (
      <div className="line-charts">
        <br />

        <p>LineChart repeats categories on x axis</p>
        <div className="line-chart-wrapper">
          <LineChart width={900} height={300}>
            <XAxis
              dataKey="category"
              type="category"
              allowDuplicatedCategory={false}
            />
            <YAxis dataKey="value" />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            {series.map((s) => (
              <Line dataKey="value" data={s.data} name={s.name} key={s.name} />
            ))}
          </LineChart>
          <br />
        </div>

        <div className="line-chart-wrapper">
          <LineChart
            width={900}
            height={400}
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            syncId="test"
          >
            <CartesianGrid
              stroke="#f5f5f5"
              verticalFill={["rgba(0, 0, 0, 0.2)", "rgba(255, 255, 255, 0.3)"]}
              horizontalFill={["#ccc", "#fff"]}
            />
            <Legend />
            <XAxis dataKey="name" axisLine={{ stroke: "red" }} />
            <YAxis
              scale={scale}
              domain={[0.01, "auto"]}
              ticks={[0.01, 0.1, 1, 10, 100, 1000]}
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="uv"
              dot={<CustomLineDot />}
              stroke="#ff7300"
            />
          </LineChart>
        </div>
      </div>
    );
  }
}
