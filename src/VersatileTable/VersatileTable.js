import React, { useState, useEffect } from "react";
import chevronUpIcon from "./assets/icons/chevron-up.svg";
import chevronDownIcon from "./assets/icons/chevron-down.svg";
import "./VersatileTable.scss";
import Sorting from "./utils/sorting";
import NoRecordComponent from "./components/NoRecordComponent/NoRecordComponent";
import { ValueTruncator } from "./utils/filters"
import PaginationComponent from "./components/PaginationComponent/PaginationComponent";

const tableStyles = (styleProp) => {
  if (styleProp) {
    return {
      width: styleProp.width ? styleProp.width : "auto",
      height: styleProp.height ? styleProp.height : "auto",
      maxWidth: styleProp.maxWidth ? styleProp.maxWidth : "fit-content",
      ...styleProp,
    };
  }

  return {};
};

const headerStyles = (styleProp) => {
  return {
    width: styleProp.width ? styleProp.width : "200px",
    ...styleProp.headerStyle,
  };
};

const columnStyles = (styleProp) => {
  return {
    width: styleProp.width ? styleProp.width : "200px",
    ...styleProp.columnStyle,
  };
};

const getClassNames = (classes) => {
  if (classes) {
    return `vt-table ${classes}`;
  }
  return "vt-table-basic";
};

function Versatiletable({
  data = [],
  columns = [],
  style = {},
  className = "",
  options = {},
  subComponents = {},
}) {
  const [sortOrder, setSortOrder] = useState(
    options && options.defaultSort && options.defaultSort.sortOrder
      ? options.defaultSort.sortOrder
      : "asc"
  );
  const [sortField, setSortField] = useState(
    options && options.defaultSort && options.defaultSort.sortField
      ? options.defaultSort.sortField
      : null
  );
  const [sortType, setSortType] = useState(
    options && options.defaultSort && options.defaultSort.sortType
      ? options.defaultSort.sortType
      : "string"
  );

  const [defaultPageSize, setDefaultPageSize] = useState(
    options && options.pagination && options.pagination.defaultPageSize
      ? options.pagination.defaultPageSize
      : 10
  );

  const [isPagination, setIsPagination] = useState(
    options && options.pagination
    ? true
    : false);

  const [currentPage, setCurrentPage] = useState(1);

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    let newData = [...data];
    if (sortOrder && sortField) {
      Sorting(sortType, newData, sortField, sortOrder);
    }
    setTableData(newData);
  }, [data, sortField, sortOrder, sortType]);

  const TableCell = (cell, row, tableData, rowIndex) => {
    if (cell && cell.cellRender) {
      return cell.cellRender(row[cell.key], row, tableData, cell.key, rowIndex)
    } else if (cell && cell.valueTruncate) {
      return ValueTruncator(row[cell.key], cell.valueTruncate.limit, cell.valueTruncate.truncateString);
    } else {
      return row[cell.key];
    }
  }
  
  const ChangePage = (count) => {
    setCurrentPage(currentPage + count);
  }

  return (
    <div className={getClassNames(className)} style={tableStyles(style)}>
      <div className="vt-header-row">
        {columns.map((header, headerIndex) => (
          <div
            className="vt-header-col"
            key={`${header.key}-${headerIndex}`}
            style={headerStyles(header)}
          >
            {header.customHeader
              ? header.customHeader(header.headerRender)
              : header.headerRender}
            {sortField && (
              <span>
                <img
                  className="sort-up-icon"
                  src={chevronUpIcon}
                  alt="chevron-up"
                  style={
                    header.key === sortField && sortOrder === "desc"
                      ? { opacity: 1 }
                      : { opacity: 0.2 }
                  }
                />
                <img
                  className="sort-down-icon"
                  src={chevronDownIcon}
                  alt="chevron-down"
                  style={
                    header.key === sortField && sortOrder === "asc"
                      ? { opacity: 1 }
                      : { opacity: 0.2 }
                  }
                />
              </span>
            )}
          </div>
        ))}
      </div>

      {tableData.filter((row, rowIndex) => (rowIndex >= (currentPage-1) * defaultPageSize) && rowIndex <= (currentPage * defaultPageSize) - 1).map((row, rowIndex) => (
        <div className="vt-body-row" key={`row-${rowIndex}`}>
          {columns.map((cell, cellIndex) => (
            <div
              className="vt-body-col"
              key={`${cell.key}-${cellIndex}`}
              style={columnStyles(cell)}
            >
              {TableCell(cell, row, tableData, rowIndex)}
            </div>
          ))}
        </div>
      ))}

      {(!data || data.length === 0) &&
        (subComponents.NoRecordComponent
          ? <subComponents.NoRecordComponent />
          : <NoRecordComponent />)
      }

      {isPagination && tableData && tableData.length> 0 && 
      (subComponents.PaginationComponent 
        ? <subComponents.PaginationComponent defaultPageSize={defaultPageSize} currentPage={currentPage} totalSize={tableData.length} ChangePage={ChangePage}/>
        : <PaginationComponent defaultPageSize={defaultPageSize} currentPage={currentPage} totalSize={tableData.length} ChangePage={ChangePage}/>)
      }
    </div>
  );
}

export default Versatiletable;
