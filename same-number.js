var a = [1, 22, 45, 22, 1, 22, 33, 4, 4];
var b = [2, 7, 45, 22, 4, 9];
var c = {};
var d = [];
for (var i = 0; i < a.length; ++i) {
    if (d.indexOf(a[i]) == -1) {
        d.push(a[i]);
    } 
}
var e = b.concat(d);
function same(e) {
    for (var j = 0; j < e.length; ++j) {
        if (c[e[j]]) {
            c[e[j]] += 1;
        } else {
            c[e[j]] = 1;
        }
    }
    var s = [];
    for (var k in c) {
        if (c[k] !== 1) {
            s.push(k);
        }
    }
    var z = s.map(Number);
    return z;
}
same(e)
