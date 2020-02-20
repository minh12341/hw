let a = +prompt("Nhập cạnh thứ 1 " ) ; 
let b = +prompt("Nhập cạnh thứ 2") ; 
let c = +prompt("Nhập cạnh thứ 3 ") ; 
if ( a==b && b==c) {
    console.log("Tam giác đều") ;  
}
else if (a==b || a==c || b==c ) {
    console.log("Tam giác cân") ; 
}
else if (a*a+b*b==c*c || b*b+c*c==a*a || a*a+c*c==b*b) {
    console.log("Tam giác vuông") ; 
}
else if (a+b>c && a+c>b && b+c>a) {
    console.log("Lập thành 1 tam giác") ; 
}
else {
    console.log("K thành tam giác") ; 
}