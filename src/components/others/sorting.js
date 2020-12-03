import {SORTING_TYPES} from './enums';

const NumericSorting = (data, sortField, sortOrder) => {
	if(sortOrder == SORTING_TYPES.ASCENDING){
		data.sort((a, b) => a[sortField] - b[sortField])
	}
	else {
		data.sort((a, b) => b[sortField] - a[sortField]);
	}
}

const StringSorting = (data, sortField, sortOrder) => {
	if(sortOrder == SORTING_TYPES.ASCENDING){
		data.sort((a, b) => (a[sortField] < b[sortField] ? -1 : 1));
	}
	else {
		data.sort((a, b) => (a[sortField] > b[sortField] ? -1 : 1));
	}
}

const DateSorting = (data, sortField, sortOrder) => {

}

export {NumericSorting, StringSorting, DateSorting};