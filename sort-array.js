var a = [1,87,24,23,45,2,35]
for (var i = a.length - 1;i >=0; --i) {
    for (var j = 0;j < i; ++j) {
        if (a[j] > a[j + 1]) {
            var b = a[j];
            a[j] = a[j+1];
            a[j+1] = b;
        }
    }
}
console.log(a)