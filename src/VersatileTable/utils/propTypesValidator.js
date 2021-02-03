import PropTypes from 'prop-types';
import {
  TOOLTIP_POSITIONS_LIST,
  SORTING_TYPES_LIST,
  SORTING_DATA_LIST,
} from '../utils/enums';

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
      cellTooltipPosition: PropTypes.oneOf(TOOLTIP_POSITIONS_LIST),
      headerTooltipRender: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.func,
        PropTypes.elementType,
      ]),
      headerTooltipPosition: PropTypes.oneOf(TOOLTIP_POSITIONS_LIST),
    })
  ).isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
  options: PropTypes.shape({
    defaultSort: PropTypes.shape({
      sortOrder: PropTypes.oneOf(SORTING_TYPES_LIST),
      sortField: PropTypes.string,
      sortType: PropTypes.oneOf(SORTING_DATA_LIST),
    }),
    pagination: PropTypes.oneOfType([
      PropTypes.shape({
        defaultPageSize: PropTypes.number,
      }),
      PropTypes.bool,
    ]),
    defaultLoader: PropTypes.oneOfType([
      PropTypes.shape({
        loaderTimeout: PropTypes.number,
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
    LoaderComponent: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.elementType,
    ]),
  }),
};
