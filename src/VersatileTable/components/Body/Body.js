import React, { useState, useEffect } from 'react';
import Sorting from '../../utils/sorting';
import NoRecordComponent from './NoRecordComponent/NoRecordComponent';
import TableCellComponent from './TableCellComponent/TableCellComponent';
import './Body.scss';

function Body({ data = [], columns = [], options = {}, subComponents = {} }) {
  const [sortOrder, setSortOrder] = useState(
    options && options.defaultSort && options.defaultSort.sortOrder
      ? options.defaultSort.sortOrder
      : 'asc'
  );
  const [sortField, setSortField] = useState(
    options && options.defaultSort && options.defaultSort.sortField
      ? options.defaultSort.sortField
      : null
  );
  const [sortType, setSortType] = useState(
    options && options.defaultSort && options.defaultSort.sortType
      ? options.defaultSort.sortType
      : 'string'
  );

  const [defaultPageSize, setDefaultPageSize] = useState(
    options && options.pagination && options.pagination.defaultPageSize
      ? options.pagination.defaultPageSize
      : 10
  );

  const [currentPage, setCurrentPage] = useState(1);

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    let newData = [...data];
    if (sortOrder && sortField) {
      Sorting(sortType, newData, sortField, sortOrder);
    }
    setTableData(newData);
  }, [data, sortField, sortOrder, sortType]);

  const columnStyles = (styleProp) => {
    return {
      width: styleProp.width ? styleProp.width : '200px',
      ...styleProp.columnStyle,
    };
  };

  return (
    <>
      {tableData
        .filter(
          (row, rowIndex) =>
            rowIndex >= (currentPage - 1) * defaultPageSize &&
            rowIndex <= currentPage * defaultPageSize - 1
        )
        .map((row, rowIndex) => (
          <div className="vt-body-row" key={`row-${rowIndex}`}>
            {columns.map((cell, cellIndex) => (
              <div
                className="vt-body-col"
                key={`${cell.key}-${cellIndex}`}
                style={columnStyles(cell)}
              >
                <TableCellComponent
                  cell={cell}
                  row={row}
                  tableData={tableData}
                  rowIndex={rowIndex}
                />
              </div>
            ))}
          </div>
        ))}

      {(!data || data.length === 0) && (
        <NoRecordComponent
          data={data}
          options={options}
          subComponents={subComponents}
        />
      )}

      {/* {(!data || data.length === 0) &&
        (subComponents.NoRecordComponent ? (
          <subComponents.NoRecordComponent />
        ) : (
          <NoRecordComponent />
        ))} */}
    </>
  );
}

export default Body;
