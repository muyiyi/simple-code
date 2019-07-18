var b = [];
var a = [1,23,1,34,22,23,23,44]
for (var i = 0; i < a.length; ++i) {
    for (var j = i + 1;j < a.length; ++j) {
       if (a[i] == a[j]) {
           j = ++ i;
       }
    } 
    b.push(a[i])
}
