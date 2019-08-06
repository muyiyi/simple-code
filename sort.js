function sort(str) {
    var a = str.split('').map(Number);
    for (var i = a.length; i >= 0; --i) {
        for (var j = 0; j < a.length; ++j) {
            if (a[j] > a[j+1]) {
                var b = a[j];
                a[j] = a[j + 1];
                a[j + 1] = b;
            }
        }
    }
    return a;
}
sort('5314782')