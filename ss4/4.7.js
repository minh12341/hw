let height = +prompt("Nhập chiều cao vào") ; 
let weight = +prompt("Nhập cân nặng vào") ; 
let bmi = weight / Math.pow(height,2) ; 
if(bmi<18.5) {
    console.log("Dưới chuẩn") ; 
}
else if (bmi>=18.5 && bmi<25) {
    console.log("Bình thường")  ;
}
else if ( bmi>=25 && bmi<30) {
    console.log("Thừa cân") ; 
}
else if (bmi>=30 && bmi<35) {
    console.log("Béo phì cấp 1" ) ; 
}
else if (bmi>=35 && bmi<40) {
    console.log("Béo phì cấp 2") ; 
}
else {
    console.log("Béo phì cấp 3") ; 
}
