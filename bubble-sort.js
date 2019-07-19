var a = [28, 23, 9, 27, 69, 34]
for (var i = a.length; i >= 0; --i) {
    for (var j = 0; j < a.length; ++j) {
        if (a[j] > a[j+1]) {
            var b = a[j];
            a[j] = a[j + 1];
            a[j + 1] = b;
        }
    }
}
console.log(a)