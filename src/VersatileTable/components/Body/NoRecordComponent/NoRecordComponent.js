import React, { useEffect, useState } from "react";
import NoRecordMsgComponent from "./NoRecordMsgComponent/NoRecordMsgComponent";
import LoaderComponent from "./LoaderComponent/LoaderComponent";

function NoRecordComponent({ data = [], options = {}, subComponents = {} }) {
  const [tableData, setTableData] = useState(data);

  const [isLoading, setIsLoading] = useState(
    options && options.defaultLoader ? true : false
  );

  const [loaderTimeout, setLoaderTimeout] = useState(
    options && options.defaultLoader && options.defaultLoader.loaderTimeout
      ? options.defaultLoader.loaderTimeout
      : 3000
  );

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setTableData(tableData);
        setIsLoading(false);
      }, loaderTimeout);
    } else {
      setTableData(tableData);
    }
  }, [tableData, isLoading]);

  if (!tableData || tableData.length === 0) {
    if (isLoading) {
      return subComponents.LoaderComponent ? (
        <subComponents.LoaderComponent />
      ) : (
        <LoaderComponent />
      );
    } else {
      return subComponents.NoRecordComponent ? (
        <subComponents.NoRecordComponent />
      ) : (
        <NoRecordMsgComponent />
      );
    }
  }

  // return (
  //   <>
  //     {(!tableData || tableData.length === 0) &&
  //       (subComponents.NoRecordComponent ? (
  //         <subComponents.NoRecordComponent />
  //       ) : (
  //         <NoRecordMsgComponent />
  //       ))}
  //   </>
  // );
}

export default NoRecordComponent;
