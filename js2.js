// let phoneInfo = {
//     name : "Bphone" ,
//     cost : 7900000 ,
//     brand : "BKAV" ,
// }
// for (const key in phoneInfo) {
//     if (phoneInfo.hasOwnProperty(key)) {
//         const element = phoneInfo[key];
//         console.log(key +  ":" +  element) ; 
//     }
// }
// phoneInfo.date = prompt("Nhap nam san xuat vao") ; 
// let a = +prompt("Nhap lai gia vao") ; 
// phoneInfo.cost = a ; 
// let b = prompt("Muon xoa cai gi") ; 
// delete phoneInfo[b] ; 
// for (const key in phoneInfo) {
//     if (phoneInfo.hasOwnProperty(key)) {
//         const element = phoneInfo[key];
//         console.log(key +  ":" +  element) ; 
//     }
// }

let phoneInfo = [
    {
        name: "S10e", 
        cost : 14e6,
        brand : "samsung" ,
    },
    {
        name: "S10",
        cost : 17e6,
        brand : "samsung" ,
    },
    {
        name : "XS" ,
        cost : 24e6 , 
        brand : "apple" 
    }
]
for ( let i=0 ; i<phoneInfo.length ; i++) {
   for (const key in phoneInfo[i]) {
       if (phoneInfo[i].hasOwnProperty(key)) {
           const element = phoneInfo[i][key];
           console.log(key + ": " + element) ;  
       }
   }
   console.log("----------------" ) ; 
}
let a = prompt("Nhap ten dien thoai vao") ; 
let b = +prompt("Nhap gia vao") ; 
let c = prompt("Nhap hang vao") ; 

let phoneInfo1 = {
    name : a ,
    cost : b , 
    brand : c
}
console.log("Danh sach dt sau khi them vao ") ; 
phoneInfo.push(phoneInfo1) ; 
for ( let i=0 ; i<phoneInfo.length ; i++) {
    for (const key in phoneInfo[i]) {
            let phone = phoneInfo[i] ; 
        if (phone.hasOwnProperty(key)) {
            const element = phone[key];
            console.log(key + ":" + element) ; 
        }
    }
}
let n = +prompt("Nhap so thu tu muon sua vao") ; 
let newkey = prompt("Nhap key muon sua vao")  ;
let m = prompt("Nhap thong tin muon sua vao") ; 
phoneInfo[n-1][newkey] = m ; 
let stt = +prompt("Nhap so thu tu vao") ; 
delete phoneInfo[stt-1] ; 
let ten = prompt("Nhap 1 ten dien thoai vao") ; 
for ( let i=0 ; i<phoneInfo.length ; i++ ) {
    if(phoneInfo[i].name.toLowerCase() == ten.toLowerCase()) {
        console.log(phoneInfo[i]) ; 
    }
}
let cost1 = +prompt("Nhap gia nho hon vao") ; 
let cost2 = +prompt("Nhap gia lon hon vao") ; 
for ( let i=0 ; i<a.length ; i++ ) {
    if(phoneInfo[i].cost>=cost1 && phoneInfo[i].cost<=cost2 ) {
        console.log(phoneInfo[i]) ; 
    }
}
let brandd = prompt("Nhap 1 hang dien thoai vao") ; 
for ( let i=0 ; i<phoneInfo.length ; i++ ) {
    if(phoneInfo[i].brand.toLowerCase() == brandd.toLowerCase()) {
        console.log(phoneInfo[i]) ; 
    }
}
for ( let i=0 ; i<a.length-1 ; i++ ) {
    for ( let j=i+1 ; j<a.length ; j++ ) {
        if(phoneInfo[i]>phoneInfo[j]) [phoneInfo[i] , phoneInfo[j]] = [phoneInfo[j] , phoneInfo[i]] ; 
    }
}


