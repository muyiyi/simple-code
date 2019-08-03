var c = 22;
var b = 0;
var a = [1, 22, 45, 22, 1, 22, 33, 4, 4];
for (var i = 0; i < a.length; ++i) {
    if (a[i] == c) {
        b += 1
    }
}
console.log(b)


function repeat() {
    var keymap = {};
    for (var i = 0; i < a.length; ++i) {
        if (keymap[a[i]]) {
            keymap[a[i]] += 1;
        } else {
            keymap[a[i]] = 1;
        }
    }
    var b = Object.getOwnPropertyNames(keymap);
    var c = b.map(Number);
    return c
}
repeat([1, 22, 45, 22, 1, 22, 33, 4, 4])
