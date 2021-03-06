class Sorter {
  constructor() {
    this.array = [];
    this.compareFunction = (a, b) => a - b;
  }

  add(element) {
    this.array.push(element)
  }

  at(index) {
    return this.array[index]
  }

  get length() {
    return this.array.length
  }

  toArray() {
    return this.array.slice()
  }

  sort(indices) {
    let arrayToSort = []

    indices.sort()
    indices.forEach(i => arrayToSort.push(this.array[i]))

    arrayToSort.sort(this.compareFunction)

    indices.forEach((ind, i) => this.array.splice(ind, 1, arrayToSort[i]))
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;