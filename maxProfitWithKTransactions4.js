function maxProfitWithKTransactions(prices, k, debug) {
	if (!prices || prices.length < 2) return 0
	if (!k || k < 1) return 0

	const profits = [new Array(prices.length).fill(0)]
	for (let t = 1; t <= k; t++) {
		profits[t] = new Array(prices.length).fill(0)
		const sameProfitBound = (t - 1)*2 + 1

		let d = 0
		while (d < sameProfitBound)
			profits[t][d] = profits[t-1][d], d++

		let maxThusFar = -Infinity
		while (d < prices.length)
			maxThusFar = Math.max(
				profits[t - 1][d - 1] - prices[d - 1], 
				maxThusFar,
			),
			profits[t][d] = Math.max(
				prices[d] + maxThusFar, 
				profits[t][d - 1],
			),
			d++

		debug && console.log(t, profits[t])
		delete profits[t - 1] 
	}

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
	expect(maxProfitWithKTransactions([1, 10], k, 1) /*?*/, 9) //?. $
	expect(maxProfitWithKTransactions([5, 11, 3, 50, 60, 90], k) /*?*/, 93) //?. $
	k = 4
	expect(maxProfitWithKTransactions([1, 25, 24, 23, 12, 17, 36, 14, 40, 31, 41, 5], k
	) /*?*/, 84) //?.s $
}