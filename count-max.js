function findMaxCount(arr) {
    var keyMap = {};
    for (var i = 0; i < arr.length; ++i) {
        if (keyMap[arr[i]]) {
            keyMap[arr[i]] += 1;
        } else {
            keyMap[arr[i]] = 1; 
        }
    }
    var max = 0;
    var key = undefined;
    for (var k in keyMap) {
        if (keyMap[k] > max) {
            max = keyMap[k];
            key = k;
        }
    }
    return key
}
findMaxCount([1, 2, 3, 2, 3, 1, 4, 2]);