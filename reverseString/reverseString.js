const reverseString = function(str) {
    var toReturn = "";
    for (var i = str.length - 1; i >= 0; i--) {
        toReturn += str.charAt(i);
    }
    return toReturn;
}

module.exports = reverseString
