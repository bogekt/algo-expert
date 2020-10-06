function riverSizes(matrix) {
    const riversSizes = [];
    const m = matrix.length
    const n = matrix[0].length
    const notVisited = new Array(m*n).fill(1)
    const context = { 
        m,
        n,
        visit: (i, j) => notVisited[i*n + j] = 0,
        isNotVisited: (i, j) => notVisited[i*n + j],
        isValidRiver: ([i, j]) => context.isNotVisited(i, j) && matrix[i][j],
    }

    for (let i = 0; i < matrix.length; i++)
        for (let j = 0; j < matrix[i].length; j++)
            if (context.isValidRiver([i, j]))
                riversSizes.push(traverse(context, [i, j], 1))

    return riversSizes
}

function traverse(context, [i, j], length) {
    context.visit(i, j)
    const { m, n, isValidRiver } = context

    if (j - 1 >= 0 && isValidRiver([i, j - 1])) length = traverse(context, [i, j - 1], length + 1)
    if (j + 1 < n  && isValidRiver([i, j + 1])) length = traverse(context, [i, j + 1], length + 1)
    if (i - 1 >= 0 && isValidRiver([i - 1, j])) length = traverse(context, [i - 1, j], length + 1)
    if (i + 1 < m  && isValidRiver([i + 1, j])) length = traverse(context, [i + 1, j], length + 1)
    
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
