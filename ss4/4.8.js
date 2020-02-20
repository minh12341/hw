let a = +prompt("Nhập số vào") ; 
let b = Math.floor(Math.sqrt(a)) ; 
if ( a== b*b) {
    console.log("Là sô chính phương") ; 
}
else {
    let b = 0 ; 
    for (let i=2 ; i<a ; i++ ) {
        if(a%i==0) b++ ; 
    } 
    if(b==0) console.log("Là số nguyên tố") ; 
    else {
        console.log("Là hợp số, các ước của nó là") ; 
        for ( let i=2 ; i<=a/2 ; i++ ) {
            if(a%i==0)  console.log(i) ; 
        }
    }
}
