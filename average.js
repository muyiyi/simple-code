function average(a) {
    var sum = 0;
    for (var i = 0; i < a.length; ++i) {
        sum += a[i]
    }
    return sum/a.length
}
 average([2, 3, 5, 6, 8,])