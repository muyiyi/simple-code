var a = "abcdefg";
var s ="";
for (var i = a.length - 1; i >= 0; --i) {
    s += a[i];
}
console.log(s)


var a = "abcdefg";
var b = a.split('');
for (var i = 0; i < (b.length - 1) / 2; ++i) {
    var temp = b[i];
    b[i] = b[b.length - 1 - i];
    b[b.length - 1 - i] = temp;
}
console.log(b.join(''))



var c = []
var b = "abcdefg";
var a = b.split('')
for (var i = 0; i < a.length; ++i) {
    c.unshift(a[i])
}
console.log(c.join(''))