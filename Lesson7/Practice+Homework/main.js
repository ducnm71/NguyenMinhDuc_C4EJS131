//Bai1: bat nguoi dung nhap vao day du ho ten va in ra man hinh ho rieng ten rieng
// let username = prompt('Nhap ho ten');
// console.log(`Ho cua ban: ${username.slice(0,7)}`);
// console.log(`Ten cua ban: ${username.slice(7,15)}`);

//BTVN: 
//Bai1
let greeting = 'Hello. My name is John';
console.log(greeting.charAt(8));

//Bai2
let str1 = 'The morning is upon us.';
console.log(str1.slice(12,23));

//Bai3
let str2 = 'Hello';
let str3 = 'World';
console.log(str2.concat(' ',str3));

//Viet so giay in ra gio:phut:giay
let time = prompt('Nhap so giay');
let t = parseInt(time);
let hour = parseInt((t/3600));
let minute = parseInt((t%3600)/60);
let second = parseInt((t%3600)%60);
console.log(hour,'h',minute,'m',second,'s');
