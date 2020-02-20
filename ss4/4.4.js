let a = +prompt("Nhập số thứ 1") ; 
let b = +prompt("Nhập số thứ 2") ; 
let c = +prompt("Nhập số thứ 3") ; 
if (a<b) {
    [ a , b ] = [b , a] ;    
}
if (b<c) {
    [ b , c ] = [c , b ] ; 
}
if(a<b) {
    [ a , b ] = [b , a] ;    
}
let d = ` 3 số sau khi sắp xếp: ${c} , ${b} , ${a} `; 
console.log(d) ; 
