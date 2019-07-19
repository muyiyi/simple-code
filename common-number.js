var c = [];
var a = [12, 46, 89, 95, 29, 372,];
var b = [88, 372, 12, 572, 93, 29, 100];
for (var i = 0; i < a.length; ++i) {
    if (b.indexOf(a[i]) == 1) {
        c.push(a[i])
    }
}
console.log(c)









var c = [];
var a = [12, 46, 89, 95, 29, 372, 12];
var b = [88, 372, 12, 572, 93, 29, 100, 88];
for (var i = 0; i < a.length; ++i) {
    if (b.indexOf(a[i]) == -1) {
        b.pop(a[i])
    }
}
console.log(b