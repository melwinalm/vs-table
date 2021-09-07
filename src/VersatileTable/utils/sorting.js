import { SORTING_TYPES, SORTING_DATA_TYPES } from './enums';

const Sorting = (sortType, data, sortField, sortOrder) => {
  switch (sortType) {
    case SORTING_DATA_TYPES.NUMBER:
      NumericSorting(data, sortField, sortOrder);
      break;
    case SORTING_DATA_TYPES.STRING:
      StringSorting(data, sortField, sortOrder);
      break;
    case SORTING_DATA_TYPES.DATE:
      DateSorting(data, sortField, sortOrder);
      break;
    default:
      StringSorting(data, sortField, sortOrder);
      break;
  }
};

const NumericSorting = (data, sortField, sortOrder) => {
  if (sortOrder === SORTING_TYPES.ASCENDING) {
    data.sort((a, b) => a[sortField] - b[sortField]);
  } else {
    data.sort((a, b) => b[sortField] - a[sortField]);
  }
};

const StringSorting = (data, sortField, sortOrder) => {
  if (sortOrder === SORTING_TYPES.ASCENDING) {
    data.sort((a, b) => (a[sortField] < b[sortField] ? -1 : 1));
  } else {
    data.sort((a, b) => (a[sortField] > b[sortField] ? -1 : 1));
  }
};

const DateSorting = (data, sortField, sortOrder) => {
  if (sortOrder === SORTING_TYPES.ASCENDING) {
    data.sort((a, b) =>
      new Date(a[sortField]).getTime() < new Date(b[sortField]).getTime()
        ? -1
        : 1
    );
  } else {
    data.sort((a, b) =>
      new Date(a[sortField]).getTime() > new Date(b[sortField]).getTime()
        ? -1
        : 1
    );
  }
};

export default Sorting;
