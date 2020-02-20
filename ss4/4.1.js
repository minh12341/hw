let a = +prompt("Nhập năm vào") ; 
    
     if ( (a%4==0 && a%100!=0) || a%400===0 ) {
         console.log("366 ngày") ; 
        }
         else {
             console.log("365 ngày") ; 
        }