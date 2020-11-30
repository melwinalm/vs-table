import React, { useState, useEffect } from "react";
import "./VersatileTable.css";

function Versatiletable({ data, columns }) {
  return (
    <div>
      {columns.map((header) => (
        <div className="vt-header" style={{width: header.width ? header.width : "200px"}}>{header.headerTitle}</div>
      ))}

      {data.map((row) => (
        <div className="vt-row">
          {columns.map((cell) => (
            <div className="vt-col" style={{width: cell.width ? cell.width : "200px"}}>{row[cell.key]}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Versatiletable;
