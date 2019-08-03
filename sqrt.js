function sqrt(arr) {
    var r = arr.map(function(item, index){
        return Math.sqrt(item)
    }); 
    return r;
}
sqrt([2, 8, 5, 9, 7])
