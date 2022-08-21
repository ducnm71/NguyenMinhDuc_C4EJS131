// function add(a,b) {
//     return a+b;
// }

// let sum = add(1,2);
// console.log('The total equal to ' + sum);

//push(): them vao cuoi mang
//unshift(): them vao dau mang
//pop(): xoa ptu cuoi mang
//shift():xoa ptu dau mang
//splice(itemIndex, 1): xoa ptu giua mang
let day; let month; let year;
function getDate () {
    day = parseInt(prompt('Enter the day'));
    month = parseInt(prompt('Enter the month'));
    year = parseInt(prompt('Enter the year'));
}
function checkYear (year) {
    return ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0);
}
function datesofmonth (month, year) {
    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            return 31;
        case 2:
            if (checkYear(year)) {
                return 29;
            }
            else{
                return 28;
            }
        case 4: case 6: case 9: case 11:
            return 30;
    }
}

function nextDate (day,month,year) {
    // let nextyear = year;let nextmonth = month;let nextday = day;
    if(year > 0 && month > 0 && month < 13 && day > 0 && day <= (datesofmonth(month,year))) {
        // day = day + 1;
        //nếu tháng nhập vào không phải tháng 12 và số ngày bằng số ngày tối đa của tháng thì ta tăng tháng lên 1 và ngày = 1
        if(month != 12 && day == datesofmonth(month,year)) {
            day = 1;
            month = month + 1;
        }
        //nếu tháng nhập vào là tháng 12 và số ngày bằng số ngày bằng 31 thì ta tăng tháng, năm lên 1 và ngày sẽ bằng 1
        else if(month == 12 && day == datesofmonth(month,year)) {
            day = 1;
            year = year + 1;
            month = 1;
        }
        else if(month == 2) {
        //nếu tháng nhập vào là tháng 2 và năm nhuận thì ngày tối đa sẽ là 29
            if(checkYear(year)) {
            //nếu người dùng nhập vào ngày 29 thì ta tăng tháng lên 1 và ngày bằng 1
                if(day == 29) {
                    day = 1;
                    month = month + 1;
            }
        }
        //ngược lại nếu tháng 2 và không phải năm nhuận thì tháng 2 có 28 ngày
            else {
                //nếu người dùng nhập vào ngày 28 thì tăng tháng lên 1 và ngày bằng 1
                if( day == 28) {
                    day = 1;
                    month = month + 1;
                }
            }
        } 
        else {
            day = day + 1;
        }    
    }
  alert(`The next date is ${day}  / ${month}  /  ${year}`);
}

// let day; let month; let year;
do {
    // let day; let month; let year;          
    getDate();
     
    
} while (year < 0 || month < 1 || month >12 || day < 0 || day > 31);

nextDate(day,month,year);


