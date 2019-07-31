function sec(arr) {
    var min = arr[0];
    var sec = arr[1];
    if (min > sec) {
        min = arr[1];
        sec = arr[0];
    }
    for (var i = 2; i < arr.length; ++i) {
        if (arr[i] < min) {
            sec = min;
        } else if (arr[i] < sec) {
            sec = arr[i];
        }
    }
    return sec
}
sec([12, 7, 8, 32, 56, 30, 78])