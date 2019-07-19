var a = [1, 23, 33, 45, 46, 67, 1100, 1233, 2312];
var target = 1233;
var left = 0;
var right = a.length - 1;
while (left <= right) {
    var mid = Math.floor((left + right) / 2);
    if (a[mid] == target) {
        console.log(mid);
        break;
    } else if (target > a[mid]) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}
