function reverse(arr) {
    for (var i = 0; i < (arr.length - 1) / 2; ++i) {
        var b =  arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = b;
    }
    return arr;
}

reverse([1, 2, 3, 4, 5])


function reverse(arr) {
    var newarr = [];
    for (var i = arr.length - 1; i >= 0; --i) {
        newarr[newarr.length] = arr[i]
    }
    return newarr
}