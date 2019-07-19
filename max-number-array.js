var max = 0;
var a = [1,2312,1,33,44,5,2,12,2]
for (var i = 0; i < a.length; ++i) {
    if (a[i] > max) {
        max = a[i]
    }
}
console.log(max)