import React, { useState, useEffect } from "react";
import "./VersatileTable.css";

const headerStyles = (styleProp) => {
  return {
    width: styleProp.width ? styleProp.width : "200px",
    ...styleProp.headerStyle
  }
}

const rowStyles = (styleProp) => {
  return {
    ...styleProp.rowStyle
  }
}

const cellStyles = (styleProp) => {
  return {
    width: styleProp.width ? styleProp.width : "200px",
    ...styleProp.cellStyle
  }
}

function Versatiletable({ data, columns }) {
  return (
    <div>
      {columns.map((header) => (
        <div
          className="vt-header"
          style={headerStyles(header)}
        >
          {header.customHeader ? header.customHeader(header.headerTitle) : header.headerTitle}
        </div>
      ))}

      {data.map((row) => (
        <div className="vt-row" style={rowStyles(row)}>
          {columns.map((cell) => (
            <div
              className="vt-col"
              style={cellStyles(cell)}
            >
              {cell.cell ? cell.cell(row[cell.key]) : row[cell.key]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Versatiletable;
