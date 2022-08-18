//Bai1
// let a = 10, b = 15;
// console.log(a > b);
// console.log(a == '10');
// console.log(a === '10');
// let x = '5', y = 6;
// console.log(x !==y);

//Bai 2
// let arr = [1,2,3,4,5,6,7,8,9];
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) {
//         console.log(arr[i]);
//     }
// }
//Bai 3
//Phuong trinh bac 2 ax^2 + bx + c = 0
let a = prompt('Nhap he so a');
let b = prompt('Nhap he so b');
let c = prompt('Nhap he so c');
let delta = b**2 - 4*a*c;
if (delta < 0) {
    console.log('Phuong trinh vo nghiem');
}
else if (delta == 0) {
    x = (-b) / (2*a);
    console.log('Phuong trin co nghiem kep x1 = x2 =', x);
}
else {
    x1 = (-b + Math.sqrt(delta)) / (2*a);
    x2 = (-b - Math.sqrt(delta)) / (2*a);
    console.log('Phuong trinh co 2 nghiem phan biet');
    console.log('x1 =', x1);
    console.log('x2 =', x2);
}