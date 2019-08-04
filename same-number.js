function same(arr1,arr2) {
    var keymap = {};
    var newarr = [];
    for (var i = 0; i < arr1.length; ++i) {
        if (!keymap[arr1[i]]) {
            keymap[arr1[i]] = 1;
        }
    }
    for (var j = 0; j < arr2.length; ++j) {
        if (keymap[arr2[j]]) {
            newarr.push(arr2[j]);
        }
    }
    return newarr;
}
same([1, 22, 45, 22, 1, 22, 33, 4, 4],[2, 7, 45, 22, 4, 9])
