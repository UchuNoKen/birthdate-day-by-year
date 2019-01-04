/*

===================================|o---> v1.0.0 
|    app.js                        |o---> 1.2.2019
===================================|o---> numaeon

*/


console.log('=================================');

let year = prompt('Enter your birth year: ');
let date = prompt('Enter your birth date: ');
let month = prompt('Enter your birth month: ');

let currDate = new Date();
let currYear = currDate.getFullYear();
let birthday;

let friday = document.getElementById('on-friday');
let saturday = document.getElementById('on-saturday');
let sunday = document.getElementById('on-sunday');
let monday = document.getElementById('on-monday');
let tuesday = document.getElementById('on-tuesday');
let wednesday = document.getElementById('on-wednesday');
let thursday = document.getElementById('on-thursday');


while (year < currYear){

    birthday = new Date(year, (month - 1), date);
    
    if(birthday.getDay() === 0){
        let newpara = document.createTextNode(`...${year} `);
        sunday.appendChild(newpara);
    }

    if(birthday.getDay() === 1){
        let newpara = document.createTextNode(`...${year} `);
        monday.appendChild(newpara);
    }

    if(birthday.getDay() === 2){
        let newpara = document.createTextNode(`...${year} `);
        tuesday.appendChild(newpara);
    }

    if(birthday.getDay() === 3){
        let newpara = document.createTextNode(`...${year} `);
        wednesday.appendChild(newpara);
    }

    if(birthday.getDay() === 4){
        let newpara = document.createTextNode(`...${year} `);
        thursday.appendChild(newpara);
    }

    if(birthday.getDay() === 5){
        let newpara = document.createTextNode(`...${year} `);
        friday.appendChild(newpara);
    }

    if(birthday.getDay() === 6){
        let newpara = document.createTextNode(`...${year} `);
        saturday.appendChild(newpara);
    }

    year++;
}

console.log('=================================');