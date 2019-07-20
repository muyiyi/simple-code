function get_max(a, b, c) {
    var max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
}
get_max(13, 75, 37)