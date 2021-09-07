import React, { useState, useEffect } from 'react';
import Sorting from '../../utils/sorting';
import PaginationComponent from './PaginationComponent/PaginationComponent';

function Footer({ data = [], options = {}, subComponents = {} }) {
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

  const [isPagination, setIsPagination] = useState(
    options && options.pagination ? true : false
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

  const ChangePage = (count) => {
    setCurrentPage(currentPage + count);
  };

  return (
    <>
      {isPagination &&
        tableData &&
        tableData.length > 0 &&
        (subComponents.PaginationComponent ? (
          <subComponents.PaginationComponent
            defaultPageSize={defaultPageSize}
            currentPage={currentPage}
            totalSize={tableData.length}
            ChangePage={ChangePage}
          />
        ) : (
          <PaginationComponent
            defaultPageSize={defaultPageSize}
            currentPage={currentPage}
            totalSize={tableData.length}
            ChangePage={ChangePage}
          />
        ))}
    </>
  );
}

export default Footer;
