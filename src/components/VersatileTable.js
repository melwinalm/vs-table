import React from "react";
import "./VersatileTable.css";

const tableStyles = (styleProp) => {
  if (styleProp) {
    return {
      width: styleProp.width ? styleProp.width : "auto",
      height: styleProp.height ? styleProp.height : "auto",
      maxWidth: styleProp.maxWidth ? styleProp.maxWidth : "fit-content",
      ...styleProp
    }
  }

  return {};
}

const headerStyles = (styleProp) => {
  return {
    width: styleProp.width ? styleProp.width : "200px",
    ...styleProp.headerStyle
  }
}

const columnStyles = (styleProp) => {
  return {
    width: styleProp.width ? styleProp.width : "200px",
    ...styleProp.columnStyle
  }
}

const getClassNames = (classes) => {
  return `vt-table ${classes}`;
}

function Versatiletable({ data, columns, style, className }) {

  return (
    <div className={getClassNames(className)}
      style={tableStyles(style)}
    >
      {columns.map((header, headerIndex) => (
        <div
          className="vt-header"
          key={`${header.key}-${headerIndex}`}
          style={headerStyles(header)}
        >
          {header.customHeader ? header.customHeader(header.headerTitle) : header.headerTitle}
        </div>
      ))}

      {data.map((row, rowIndex) => (
        <div className="vt-row" key={`row-${rowIndex}`}>
          {columns.map((cell, cellIndex) => (
            <div
              className="vt-col"
              key={`${cell.key}-${cellIndex}`}
              style={columnStyles(cell)}
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
