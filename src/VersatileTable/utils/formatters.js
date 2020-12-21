class Formatters{
	constructor(val){
		this.value = val;
	}

	Currency(currencyType = '$'){
		this.value = currencyType + this.value;
		return this.value;
	}
}

export default Formatters;