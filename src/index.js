module.exports = function towelSort (matrix) {
    if(!matrix || matrix.length == 0) return [];

    let result = []
    matrix.forEach((element, index) => {
        if (index != 0 && index % 2 != 0 ) {
            element.reverse().forEach(item => result.push(item))
        } else element.forEach(item => result.push(item));
    });
    return result;
}
