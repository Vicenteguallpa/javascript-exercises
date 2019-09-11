const removeFromArray = function(arr) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        var remove = false;
        for (var j = 1; j < arguments.length; j++) {
            if (element == arguments[j]) {
                remove = true;
                break;
            }
        }
        if (!remove) {
            newArr.push(element);
        }
    }
    return newArr;
}

module.exports = removeFromArray
