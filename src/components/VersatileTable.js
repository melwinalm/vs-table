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

function Versatiletable({ data, columns, style, className, options }) {

  const sortFunction = (data, options) => {

    if (options && options.defaultSort) {

      if (options.defaultSort.numericSort) {

        let sortedData = null;

        if (options.defaultSort.sortOrder && options.defaultSort.sortOrder.toLowerCase() === 'asc' && options.defaultSort.sortField) {
          sortedData = data.sort((a, b) => a[options.defaultSort.sortField] - b[options.defaultSort.sortField]);
          return sortedData;
        } else if (options.defaultSort.sortOrder && options.defaultSort.sortOrder.toLowerCase() === 'desc' && options.defaultSort.sortField) {
          sortedData = data.sort((a, b) => b[options.defaultSort.sortField] - a[options.defaultSort.sortField]);
          return sortedData;
        }
      } else {

        let sortedData = null;

        if (options.defaultSort.sortOrder && options.defaultSort.sortOrder.toLowerCase() === 'asc' && options.defaultSort.sortField) {
          sortedData = data.sort((a, b) => (a[options.defaultSort.sortField] < b[options.defaultSort.sortField] ? -1 : 1));
          return sortedData;
        } else if (options.defaultSort.sortOrder && options.defaultSort.sortOrder.toLowerCase() === 'desc' && options.defaultSort.sortField) {
          sortedData = data.sort((a, b) => (a[options.defaultSort.sortField] > b[options.defaultSort.sortField] ? -1 : 1));
          return sortedData;
        }

      }

    }

    return data;
  }

  let tableData = sortFunction(data, options);

  return (
    <div className={getClassNames(className)} style={tableStyles(style)}>
      <div className="vt-header-row">
        {columns.map((header, headerIndex) => (
          <div
            className="vt-header-col"
            key={`${header.key}-${headerIndex}`}
            style={headerStyles(header)}
          >
            {header.customHeader ? header.customHeader(header.headerTitle) : header.headerTitle}
          </div>
        ))}
      </div>

      {tableData.map((row, rowIndex) => (
        <div className="vt-body-row" key={`row-${rowIndex}`}>
          {columns.map((cell, cellIndex) => (
            <div
              className="vt-body-col"
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
