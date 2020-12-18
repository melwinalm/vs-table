import React from "react";
import ___ from "../../utils/getter";
import "./NoRecordComponent.scss";

function NoRecordComponent({ data = [], options = {} }) {
  if (!data || data.length === 0) {
    if (
      options &&
      options.noRecordsMessageRenderer &&
      typeof options.noRecordsMessageRenderer === "string"
    ) {
      return (
        <div className="vt-body-col no-record">
          {options.noRecordsMessageRenderer}
        </div>
      );
    } else if (
      options &&
      options.noRecordsMessageRenderer &&
      typeof options.noRecordsMessageRenderer === "function"
    ) {
      return (
        <div className="vt-body-col no-record-renderer">
          {options.noRecordsMessageRenderer()}
        </div>
      );
    } else {
      return <div className="vt-body-col no-record">{___("No Records Found.")}</div>;
    }
  }

  return null;
}

export default NoRecordComponent;
