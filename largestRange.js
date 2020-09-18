function largestRange(array) {
  // Write your code here.
	const set = new Set(array)
	let i = 0
	let start = -1;
	let end = -1;
	let totalLength = 0
	let length = 0
	
	while (totalLength < set.size || i < array.length) {
		if (
			start === end
			||
			array[i] < start && array[i] > end
		) {
			let testStart = array[i]
			let testEnd = array[i]
			while (set.has(testStart - 1)) testStart--
			while (set.has(testEnd + 1)) testEnd++
			if (testEnd - testStart + 1 === set.size)
				return [testStart, testEnd]
			if (length < testEnd - testStart + 1) {
				length = testEnd - testStart + 1
				start = testStart
				end = testEnd
			}
			totalLength += end - start + 1
		} else {
			totalLength++
		}
		i++
	}
		
	return [start, end]
}


const test = true
if (typeof test === 'boolean' && test) {
	const { expect } = require('../leetCode/utils.js');
	expect(largestRange([1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]) /*?*/, [0,7]) //?. $
	expect(largestRange([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) /*?*/, [0,9]) //?. $
	expect(largestRange([1, 1, 1, 3, 4], [3,4]) /*?*/, [3,4]) //?. $
}
