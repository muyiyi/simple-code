function del(a) {
    var b = new Array();
    for (var i = 0; i < a.length; ++i) {
        if (b.indexOf(a[i]) == -1) {
            b.push(a[i]);
        }
    }
    return b
}
del([12,34, 75, 34, 87, 34])
