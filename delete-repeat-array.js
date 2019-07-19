var b = [];
var a = [1,23,1,34,22,23,23,44]
for (var i = 0; i < a.length; ++i) {
       if (b.indexOf(a[i]) == -1) {
           b.push(a[i])
    }
} 
console.log(b)
