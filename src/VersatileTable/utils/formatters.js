const Currency = (val, currencyField = '$') => {
	return currencyField + val;
}

export { Currency };