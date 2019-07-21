function subscript(str) {
    var c = 'b';
    var arr = []
    var str = 'abcdabcdabcdefgabhigk';
    for (var i = 0; i < str.length; ++i) {
        if (str[i] == c) {
            arr.push(i)
        }
    }
    return arr
}
subscript(['abcdabcdabcdefgabhigk'])
