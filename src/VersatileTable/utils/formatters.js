class Formatters {
  constructor(val) {
    this.value = val;
  }

  Currency(currencyType = "$") {
    this.value = currencyType + this.value;
    return this;
  }

  Truncate(limit = 10, truncateString = "...") {
    if (this.value && this.value.length > limit) {
      this.value = this.value.slice(0, limit) + truncateString;
    }
    return this;
  }
}

export default Formatters;
