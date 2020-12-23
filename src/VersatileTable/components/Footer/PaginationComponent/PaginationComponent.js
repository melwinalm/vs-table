import React from "react";
import ___ from "../../../utils/getter";
import arrowLeft from "../../../assets/icons/arrow-left-circle.svg";
import arrowRight from "../../../assets/icons/arrow-right-circle.svg";
import "./PaginationComponent.scss";

function PaginationComponent({
  defaultPageSize,
  currentPage,
  totalSize,
  ChangePage,
}) {
  return (
    <div className="vt-pagination">
      <button
        className="vt-pagination-previous-btn"
        onClick={() => ChangePage(-1)}
        disabled={currentPage <= 1}
      >
        <img
          className="arrow-left-icon"
          src={arrowLeft}
          alt={___("Previous")}
        />{" "}
        {___("Previous")}
      </button>
      &nbsp;|&nbsp;
      <span className="vt-pagination-current-page">
        {___("Current Page:")} <strong>{currentPage}</strong>
      </span>
      &nbsp;|&nbsp;
      <span className="vt-pagination-total-pages">
        {___("Showing items")} {___("from")}{" "}
        {(currentPage - 1) * defaultPageSize + 1} {___("to")}{" "}
        {Math.min(currentPage * defaultPageSize, totalSize)}
      </span>
      &nbsp;|&nbsp;
      <button
        className="vt-pagination-next-btn"
        onClick={() => ChangePage(1)}
        disabled={currentPage >= Math.ceil(totalSize / defaultPageSize)}
      >
        {___("Next")}{" "}
        <img className="arrow-right-icon" src={arrowRight} alt={___("Next")} />
      </button>
    </div>
  );
}

export default PaginationComponent;
