function big_max(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] % 2 == 0) {
            if (max < arr[i]) {
                max = arr[i];
            }
        }
    }
    return max;
}
big_max([37, 40, 28, 41, 25])


function big_max(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] % 2 == 0 && max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}