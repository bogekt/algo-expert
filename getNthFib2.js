// 0, 1, 2, 3, 4, 5, 6, 7, 8
// 0, 0, 1, 1, 2, 3, 5, 8, 13
function getNthFib(n, memoize = {0: 0, 1: 0, 2: 1}) {
    if (!(n in memoize))
        memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize)

    return memoize[n]
}

// Do not edit the line below.
exports.getNthFib = getNthFib;

const test = true
if (typeof test === 'boolean' && test) {
    const { expect } = require('../leet-code/utils.js');

    expect(getNthFib(0) /*?*/, 0) //?.s $
    expect(getNthFib(1) /*?*/, 0) //?.s $
    expect(getNthFib(2) /*?*/, 1) //?.s $
    expect(getNthFib(3) /*?*/, 1) //?.s $
    expect(getNthFib(4) /*?*/, 2) //?.s $
    expect(getNthFib(5) /*?*/, 3) //?.s $
    expect(getNthFib(6) /*?*/, 5) //?.s $
    expect(getNthFib(7) /*?*/, 8) //?.s $
    expect(getNthFib(8) /*?*/, 13) //?.s $
}