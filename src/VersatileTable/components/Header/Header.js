import React, { useState } from "react";
import HeaderTooltipComponent from "./HeaderTooltipComponent/HeaderTooltipComponent";
import SortIconComponent from "./SortIconComponent/SortIconComponent";
import "./Header.scss";

function Header({
  columns = [],
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

  const headerStyles = (styleProp) => {
    return {
      width: styleProp.width ? styleProp.width : "200px",
      ...styleProp.headerStyle,
    };
  };

  return (
    <div className="vt-header-row">
      {columns.map((header, headerIndex) => (
        <div
          className="vt-header-col"
          key={`${header.key}-${headerIndex}`}
          style={headerStyles(header)}
        >
          {subComponents.HeaderCellComponent ? (
            <subComponents.HeaderCellComponent
              headerRender={header.headerRender}
              sortField={sortField}
              sortOrder={sortOrder}
              headerKey={header.key}
            />
          ) : (
            <>
              <HeaderTooltipComponent
                header={header}
                headerIndex={headerIndex}
              />
              <SortIconComponent header={header} options={options} />
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Header;
