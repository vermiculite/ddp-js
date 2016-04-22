var i = 0;
exports.uniqueId = function uniqueId () {
    return (i++).toString();
}

exports.contains = function contains (array, element) {
    return array.indexOf(element) !== -1;
}
