import React from "react";

function PaginationComponent({defaultPageSize, currentPage, totalSize, ChangePage }) {
  return (
		<div>
			<button onClick={() => ChangePage(-1)} disabled={currentPage <= 1}>Previous</button>|
			<span>Current Page: {currentPage}</span>|
			<span>Showing items from {((currentPage-1) * defaultPageSize) + 1} to {Math.min(currentPage * defaultPageSize, totalSize)}</span>|
			<button onClick={() => ChangePage(1)} disabled={currentPage >= Math.ceil(totalSize/defaultPageSize)}>Next</button>
		</div>
	)
}

export default PaginationComponent;
