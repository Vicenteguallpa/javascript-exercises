const repeatString = function(str, repeat) {
    if (repeat < 0) {
        return "ERROR"
    }
    var toReturn = "";
    for (var i = 0; i  < repeat; i++) {
        toReturn += str;
    }
    return toReturn;
}

module.exports = repeatString
