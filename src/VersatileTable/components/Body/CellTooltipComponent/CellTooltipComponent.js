import React, { useState } from 'react';
import { TOOLTIP_POSITIONS } from '../../../utils/enums';
import './CellTooltipComponent.scss';

function CellTooltipComponent({ row, cell, tableData, rowIndex }) {
  const [tooltipPosition, setTooltipPosition] = useState(
    cell.cellTooltipPosition
      ? cell.cellTooltipPosition
      : TOOLTIP_POSITIONS.RIGHT
  );

  const [tooltipClasses, setTooltipClasses] = useState(
    `vt-tooltip-content vt-tooltip-${tooltipPosition}`
  );

  if (
    cell &&
    cell.cellTooltipRender &&
    typeof cell.cellTooltipRender === 'boolean'
  ) {
    return (
      <div className="vt-tooltip">
        {row[cell.key]}
        <span className={tooltipClasses}>{row[cell.key]}</span>
      </div>
    );
  } else if (
    cell &&
    cell.cellTooltipRender &&
    typeof cell.cellTooltipRender === 'function'
  ) {
    return (
      <div className="vt-tooltip">
        {row[cell.key]}
        <span className={tooltipClasses}>
          {cell.cellTooltipRender(
            row[cell.key],
            row,
            tableData,
            cell.key,
            rowIndex
          )}
        </span>
      </div>
    );
  } else {
    return row[cell.key] || null;
  }
}

export default CellTooltipComponent;
