Object.assign is shallow copy

var obj2 = Object.assign({},obj1) shallow copy but when you change obj1 it not affect the obj2

2=='2' true but 2==='2' false

true=='true' false 

JSON.parse(JSON.stringify(obj)) deep copy

same for array's deepcpoy


Array.prototype.concat(), Array.prototype.slice(), Array.from(), Object.assign(), and Object.create()) do not create deep copies (instead, they create shallow copies).

// variables wont affect the original
var x = 10;
undefined
var y = x
undefined
y
10
x
10
y = 14
14
y
14
x
10


let q = 3;
undefined
let g = q
undefined
g
3
q
3
g = 6
6
g
6
q
3
q = 5
5
q
5
g
6
