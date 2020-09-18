// [
//  [0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0] k = 0
//  [0,   24,   24,   24,   24,   24,   35,   35,   39,   39,   40,   40] k = 1
//  [0,   24,   24,   24,   24,   29,   48,   48,   61,   61,   62,   62] k = 2
//  [0,   24,   24,   24,   24,   29,   48,   48,   74,   74,   75,   75] k = 3
//  [0,   24,   24,   24,   24,   29,   48,   48,   74,   74,   84,   84] k = 4
// ]
//      25-1;  max   max   max   max  36-1   max  40-1   max  41-1   max k = 1
//            <k*2   max   max  24+5 24+24   max 35+26   max 35+27   max k = 2
//                        <k*3       35+26   max 48+26   max 48+27   max k = 3
//                                    <k*4             74+10   max       k = 4
//  prices[j] + max(prices((i - 1)*2, j) => profits[i - 1][index(p)] - p), 
//  profits[i][j - 1],
//  profits[i - 1][j],
// ) = max(90 - 3 + 6, 63) = 93
// where prices(i, j) = sliced i..j prices array
// where index = index of min value
function maxProfitWithKTransactions(prices, k) {
	if (!prices || prices.length < 2) return 0
	if (!k || k < 1) return 0

	const profits = new Array(k + 1).fill().map(() => new Array(prices.length).fill(0))
	for (let i = 1; i <= k; i++)
		for (let j = 1; j < prices.length; j++)
			profits[i][j] = Math.max(
				prices[j] + Math.max(
					...prices
						.slice((i - 1)*2, j)
						.map((p, l) => profits[i - 1][l + (i - 1)*2] - p)
				), 
				profits[i][j - 1],
				profits[i - 1][j],
			)
			

	return profits[k][prices.length - 1]
}

// Do not edit the line below.
exports.maxProfitWithKTransactions = maxProfitWithKTransactions;

const test = true
if (typeof test === 'boolean' && test) {
	const { expect } = require('../leetCode/utils.js');
	let k
	expect(maxProfitWithKTransactions([]) /*?*/, 0) //?. $
	expect(maxProfitWithKTransactions([5, 7]) /*?*/, 0) //?. $
	k = 1
	expect(maxProfitWithKTransactions([5], k) /*?*/, 0) //?
	expect(maxProfitWithKTransactions([5, 3], k) /*?*/, 0) //?. $
	expect(maxProfitWithKTransactions([5, 11, 3, 50, 60, 90], k) /*?*/, 87) //?. $
	expect(maxProfitWithKTransactions([3, 2, 5, 7, 1, 3, 7], k) /*?*/, 6) //?. $
	expect(maxProfitWithKTransactions([1, 25, 24, 23, 12, 17, 36, 14, 40, 31, 41, 5], k) /*?*/, 40) //?. $
	k = 2
	expect(maxProfitWithKTransactions([5, 11, 3, 50, 60, 90], k) /*?*/, 93) //?. $
	expect(maxProfitWithKTransactions([1, 25, 24, 23, 12, 17, 36, 14, 40, 31, 41, 5], k) /*?*/, 62) //?.s $
	k = 3
	expect(maxProfitWithKTransactions([5, 11, 3, 50, 60, 90], k) /*?*/, 93) //?. $
	k = 4
	expect(maxProfitWithKTransactions([1, 25, 24, 23, 12, 17, 36, 14, 40, 31, 41, 5], k) /*?*/, 84) //?.s $
}
