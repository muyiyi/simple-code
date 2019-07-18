var b;
var a = [1,87,24,23,45,2,35]
for (var i = 0; i < a.length; ++i) {
    for (var j = i;j > 0; --j) {
        if (a[j] < a[j - 1]) {
            b = a[j];
            a[j] = a[j-1];
            a[j-1] = b;
        }
    }
}