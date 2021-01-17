import PropTypes from "prop-types";

export const rootPropTypesObject = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      headerRender: PropTypes.string.isRequired,
      width: PropTypes.string,
      headerStyle: PropTypes.object,
      columnStyle: PropTypes.object,
      cellRender: PropTypes.oneOfType([PropTypes.func, PropTypes.elementType]),
      cellTooltipRender: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.func,
        PropTypes.elementType,
      ]),
      cellTooltipPosition: PropTypes.string,
      headerTooltipRender: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.func,
        PropTypes.elementType,
      ]),
      headerTooltipPosition: PropTypes.string,
    })
  ).isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
  options: PropTypes.shape({
    defaultSort: PropTypes.shape({
      sortOrder: PropTypes.string,
      sortField: PropTypes.string,
      sortType: PropTypes.string,
    }),
    pagination: PropTypes.oneOfType([
      PropTypes.shape({
        defaultPageSize: PropTypes.number,
      }),
      PropTypes.bool,
    ]),
  }),
  subComponents: PropTypes.shape({
    HeaderCellComponent: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.elementType,
    ]),
    NoRecordComponent: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.elementType,
    ]),
    PaginationComponent: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.elementType,
    ]),
  }),
};
