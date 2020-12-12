import { SORTING_TYPES } from "./enums";

const Sorting = (sortType, data, sortField, sortOrder) => {
  switch (sortType) {
    case "number":
      NumericSorting(data, sortField, sortOrder);
      break;
    case "string":
      StringSorting(data, sortField, sortOrder);
      break;
    case "date":
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

const DateSorting = (data, sortField, sortOrder) => {};

export default Sorting;