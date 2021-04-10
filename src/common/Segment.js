import React from "react";
import { Collapse } from "antd";
import UseContextExample from "../context/UseContextExample";
import UseReducerExample from "../reducer/UseReducerExample";

const { Panel } = Collapse;

function Segment() {
  return (
    <Collapse defaultActiveKey={["1"]}>
      <Panel header="Reducer" key="1">
        <UseReducerExample />
      </Panel>
      <Panel header="Context" key="2">
        <UseContextExample />
      </Panel>
    </Collapse>
  );
}

export default Segment;
