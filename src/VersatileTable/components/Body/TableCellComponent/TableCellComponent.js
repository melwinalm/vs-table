import React from "react";
import CellTooltipComponent from "../CellTooltipComponent/CellTooltipComponent";
import "./TableCellComponent.scss";

function TableCell({ cell, row, tableData, rowIndex }) {
  if (cell && cell.cellRender) {
    return cell.cellRender(row[cell.key], row, tableData, cell.key, rowIndex);
  } else if (cell && cell.cellTooltipRender) {
    return (
      <CellTooltipComponent
        row={row}
        cell={cell}
        tableData={tableData}
        rowIndex={rowIndex}
      />
    );
  } else {
    return row[cell.key];
  }
}

export default TableCell;
