import React, { useState } from "react";
import chevronUpIcon from "./assets/icons/chevron-up.svg";
import chevronDownIcon from "./assets/icons/chevron-down.svg";
import "./VersatileTable.scss";

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

  const [sortOrder, setSortOrder] = useState(options && options.defaultSort && options.defaultSort.sortOrder ? options.defaultSort.sortOrder : null);
  const [sortField, setSortField] = useState(options && options.defaultSort && options.defaultSort.sortField ? options.defaultSort.sortField : null);

  const sortFunction = (data, options) => {

    if (options && options.defaultSort) {

      if (options.defaultSort.numericSort) {

        let sortedData = null;

        if (sortOrder && sortOrder.toLowerCase() === 'asc' && sortField) {
          sortedData = data.sort((a, b) => a[sortField] - b[sortField]);
          return sortedData;
        } else if (sortOrder && sortOrder.toLowerCase() === 'desc' && sortField) {
          sortedData = data.sort((a, b) => b[sortField] - a[sortField]);
          return sortedData;
        }
      } else {

        let sortedData = null;

        if (sortOrder && sortOrder.toLowerCase() === 'asc' && sortField) {
          sortedData = data.sort((a, b) => (a[sortField] < b[sortField] ? -1 : 1));
          return sortedData;
        } else if (sortOrder && sortOrder.toLowerCase() === 'desc' && sortField) {
          sortedData = data.sort((a, b) => (a[sortField] > b[sortField] ? -1 : 1));
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
            <img 
              className="sort-up-icon" 
              src={chevronUpIcon} 
              alt="chevron-up"
              style={header.key === sortField && sortOrder === "desc" ? { opacity: 1 } : { opacity: 0.2 }} />
            <img 
              className="sort-down-icon" 
              src={chevronDownIcon} 
              alt="chevron-down" 
              style={header.key === sortField && sortOrder === "asc" ? { opacity: 1 } : { opacity: 0.2 }} />
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
