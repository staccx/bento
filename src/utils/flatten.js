/**
 * Flatten array of arrays to single array
 * @param listOfArrays
 * @returns {*[]}
 */
export const flatten = listOfArrays => [].concat.apply([], listOfArrays)
