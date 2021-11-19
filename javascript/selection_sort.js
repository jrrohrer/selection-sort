function selectionSort(arr) {
	const sortedArr = []
	while (arr.length > 0) {
		const min = Math.min(...arr)
		const index = arr.indexOf(min)
		sortedArr.push(min)
		arr.splice(index, 1)
	}
	return sortedArr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

  const startTime = Date.now();

  for (let i = 0; i < 1000; ++i) {
    selectionSort([2, 1]);
    selectionSort(longInput);
  }

  const avgTime = (Date.now() - startTime) / 2000;

  console.log(avgTime);
}

module.exports = selectionSort;

// Please add your pseudocode to this file
  /**************************************
   * declare an empty array called sortedArr
   * loop over arr while arr has elements
   *  find minimum value
   *  push it to sortedArr
   *  splice it from the original arr
   * return sortedArr
   */
// And a written explanation of your solution
