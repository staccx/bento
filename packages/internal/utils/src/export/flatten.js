/**
 * Flatten array of arrays to single array
 * @param listOfArrays
 * @returns {*[]}
 */
export default listOfArrays => [].concat.apply([], listOfArrays)
