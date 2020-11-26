import React, { useState, useEffect } from "react";
import "./VersatileTable.css";

function Versatiletable({ data, columns }) {
  return (
    <div>
      {columns.map((header) => (
        <div className="vt-header">{header.headerTitle}</div>
      ))}

      {data.map((row) => (
        <div className="vt-row">
          {columns.map((cell) => (
            <div className="vt-col">{row[cell.key]}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Versatiletable;
