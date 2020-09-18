function largestRange(array) {
	// Write your code here.
	const explored = array.reduce((acc, v) => (acc[v] = true, acc), {})
	let start = -1
	let end = -1
	let bestLength = 0

	for (let i = 0; i < array.length; i++) {
		// is already explored
		if (!explored[array[i]]) continue;
		// find range for an item
		let testStart = array[i]
		let testEnd = array[i]
		let testLength = 1
		while (testStart - 1 in explored)
			explored[--testStart] = false, testLength++
		while (testEnd + 1 in explored)
			explored[++testEnd] = false, testLength++
		// is array an all range
		if (testLength === Object.keys(explored).length)
			return [testStart, testEnd]
		// is new length is the best
		if (testLength > bestLength) {
			bestLength = testLength
			start = testStart
			end = testEnd
		}
	}

	return [start, end]
}

const test = true
if (typeof test === 'boolean' && test) {
	const { expect } = require('../leetCode/utils.js');
	expect(largestRange([1]) /*?*/, [1, 1]) //?. $
	expect(largestRange([1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]) /*?*/, [0, 7]) //?. $
	expect(largestRange([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) /*?*/, [0, 9]) //?. $
	expect(largestRange([1, 1, 1, 3, 4], [3, 4]) /*?*/, [3, 4]) //?. $
}
