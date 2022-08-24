// // console.log(`firt: ${a}`);
// // var a = 'aaa';
// // console.log(`second: ${a}`);
// // var khac let va const la no co hoisting

// let student = {
//     firstname: 'John', // porpety
//     age: 18,
//     'ei adu': 'adudu',
//     bag: {
//         book: ['a','b','c']
//     },
//     greet: function () { //method
//         console.log('Hi');
//         console.log(`I am ${this.firstname}`);
//         //this ~ student
//     }
// };
// // let newstu = student;
// // newstu.age = 19;
// // console.log(newstu.firstname);
// // console.log(student.age);
// // console.log(newstu.age);
// // console.log(newstu['ei adu']);

// //destructuring
// // let {firstname, age} = student;

// // console.log(firstname);
// student.greet();
// // student.bye = function () {
// //     console.log('Bye');
// // }
// // console.log(student);
// // student.bye();
// // let vararr = Object.entries(student);
// // console.log(vararr);
// for ( let i in student) {
//     console.log(`${i}: ${student[i]}`);
// }
const bai1 = {
    id1: {
        albumTittle: 'Give it to me',
        artist: 'Son Tung MTP',
        tracks: [track1, track2, track3 ]
    }
}

bai1 = prompt('Nhap value')
// albumTittle: prompt('Enter new albumTittle'),
// artist: prompt('Enter new artist'),
// track: prompt('Enter new track')

let a = prompt('nhap')
