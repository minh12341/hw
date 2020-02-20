let a = +prompt("Nhập tháng vào") ; 
if(a>=2 && a <=4 ) {
    console.log("Mùa xuân") ; 
} 
else if (a>=5 && a<=7) {
    console.log("Mùa hè") ; 
}
else if (a>=8 && a<=10) {
    console.log("Mùa thu") ; 
}
else if (a===11 || a ===12 || a===1 ) {
    console.log("Mùa đông") ; 
}
else {
    console.log("Invalid") ; 
}