var max = a[0];
var min = a[0];
var a = [23, 98, 74, 35, 49];
for (var i = 0; i < a.length; ++i) {
    if (a[i] % 2 == 0) {
        if (!max || max < a[i]) {
            max = a[i];
        } else {
            // nothing;
        }
        if (!min || min > a[i]) {
            min = a[i];
        } else {
            // noting;
        }
    }
}
console.log(max - min)