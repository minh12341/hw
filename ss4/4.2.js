let a = +prompt("Nhập tháng vào") ; 
let b = +prompt("Nhập năm vào") ; 
if(a==2) {
    if((b%4==0 && b%100!=0) || b%400===0) console.log("Có 29 ngày") 
    else {
        console.log("Có 28 ngày") ; 
    }
}
else if ( a==1 || a==3 || a==5 || a==7 || a==8 || a==10 || a==12 ) {
    console.log("Có 31 ngày") ; 
}
else if( a==4 || a==6 || a== 9|| a==11 ) {
    console.log("Có 30 ngày") ;
}
