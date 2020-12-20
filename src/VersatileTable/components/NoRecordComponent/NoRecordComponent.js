import React from "react";
import ___ from "../../utils/getter";
import "./NoRecordComponent.scss";

function NoRecordComponent(){
  return <div className="vt-body-col no-record">{___("No Records Found.")}</div>;
}

export default NoRecordComponent;
