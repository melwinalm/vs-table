import React, { useState } from "react";
import chevronUpIcon from "../../../assets/icons/chevron-up.svg";
import chevronDownIcon from "../../../assets/icons/chevron-down.svg";
import { SORTING_TYPES } from "../../../utils/enums";
import "./SortIconComponent.scss";

function SortIconComponent({ header, options }) {
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

  return (
    <>
      {sortField && (
        <span>
          <img
            className="vt-sort-up-icon"
            src={chevronUpIcon}
            alt="chevron-up"
            style={
              header.key === sortField && sortOrder === SORTING_TYPES.DESCENDING
                ? { opacity: 1 }
                : { opacity: 0.2 }
            }
          />
          <img
            className="vt-sort-down-icon"
            src={chevronDownIcon}
            alt="chevron-down"
            style={
              header.key === sortField && sortOrder === SORTING_TYPES.ASCENDING
                ? { opacity: 1 }
                : { opacity: 0.2 }
            }
          />
        </span>
      )}
    </>
  );
}

export default SortIconComponent;
