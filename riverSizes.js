function riverSizes(matrix) {
    const riversSizes = [];
    const notVisited = new Array(matrix.length).fill(null)
        .map((x, i) => new Array(matrix[i].length).fill(1))
    const context = { 
        m: matrix.length,
        n: matrix[0].length,
        visit: (i, j) => notVisited[i][j] = 0,
        validRiver: ([i, j]) => notVisited[i][j] && matrix[i][j],
    }

    for (let i = 0; i < matrix.length; i++)
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0 || !notVisited[i][j]) continue
            riversSizes.push(traverse(context, [i, j], 1))
        }

    return riversSizes
}

function traverse(context, [i, j], length) {
    context.visit(i, j)
    const { m, n, validRiver } = context

    if (j - 1 >= 0 && validRiver([i, j - 1])) length = traverse(context, [i, j - 1], length + 1)
    if (j + 1 < n  && validRiver([i, j + 1])) length = traverse(context, [i, j + 1], length + 1)
    if (i - 1 >= 0 && validRiver([i - 1, j])) length = traverse(context, [i - 1, j], length + 1)
    if (i + 1 < m  && validRiver([i + 1, j])) length = traverse(context, [i + 1, j], length + 1)
    
    return length
}

// Do not edit the line below.
exports.riverSizes = riverSizes;
const test = true
if (typeof test === 'boolean' && test) {
    const { expect } = require('../leet-code/utils.js');
    console.clear()
    expect(riverSizes([
        [0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
        [1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1],
    ]) /*?*/, [4, 18]) //?.s $
    expect(riverSizes([
        [0, 1, 0, 1, 1],
        [1, 1, 1, 0, 0],
        [1, 1, 0, 0, 1],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 0, 0],
    ]) /*?*/, [14,2]) //?.s $
    expect(riverSizes([
        [1, 0, 0, 0, 0, 0, 1],
        [0, 1, 0, 0, 0, 1, 0],
        [0, 0, 1, 0, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 0, 0, 1, 0],
        [1, 0, 0, 0, 0, 0, 1]
      ]) /*?*/, [1, 1, 1, 1, 7, 1, 1, 1, 1]) //?.s $
}
