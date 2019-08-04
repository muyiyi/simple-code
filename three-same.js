function threesame(arr1, arr2, arr3) {
    var keymap = {};
    var newarr = [];
    for (var i = 0; i < arr1.length; ++i) {
        if (!keymap[arr1[i]]) {
            keymap[arr1[i]] = 1;    
        }
    }
    for (var j = 0; j < arr2.length; ++j) {
        if (keymap[arr2[j]]) {
            keymap[arr2[j]] = 2;
        } else {
            keymap[arr2[j]] = 1; 
        }
    }
    for (var s = 0; s < arr3.length; ++s) {
        if (keymap[arr3[s]] == 2) {
            newarr.push(arr3[s]);
        }
    }
    return newarr;
}
threesame([1, 22, 45, 22, 1, 22, 33, 4, 4],[2, 7, 45, 22, 4, 9],[3, 45, 3, 4, 33])