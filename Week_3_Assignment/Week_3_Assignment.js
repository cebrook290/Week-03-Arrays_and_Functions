let ages = [3, 9, 23, 64, 2, 8, 28, 93];

function ageSubtraction() {
    
    return(ages[0] - (ages[ages.length - 1]));

}

console.log(ageSubtraction());

ages.push(33);

console.log(ageSubtraction());

function averageAge() {
    var total = 0;
    for(i = 0; i < ages.length; i++) {
        total += ages[i];
    }
    return (total / ages.length);
}

console.log(averageAge());

//2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 

function nameAverage() {
    let sum = 0;
    for(i = 0; i < names.length; i++) {
        sum += names[i].length;
    }
    console.log (sum / (names.length));
}

nameAverage();

//2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 

let output = '';
for(i = 0; i < names.length; i++)
{
    output += names[i] + ' '
};

console.log(output);

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let nameLengths = [];

for(i = 0; i < names.length; i++)
{
    nameLengths.push(names[i].length);
}

console.log(nameLengths);

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 

function nameSum () {
    let sum = 0;
    for(i = 0; i < nameLengths.length; i++) {
        sum += nameLengths[i];
    }
    console.log(sum);
}

nameSum();

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 

function wordJoin (word,n) {
    console.log(word.repeat(n));
}

wordJoin('hello',3);

//8. Write a function that takes two parameters, firstName and lastName, and returns a full name.

function nameJoin (firstName, lastName) {
    console.log(firstName + ' ' + lastName);
}

nameJoin ('Ranma', 'Saotome');

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function sumCheck (array) {
    let sum = 0
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    if (sum > 100) {
        console.log(true);
    } else {
        console.log (false);
    }
}

sumCheck(nameLengths);


let numberArray1 = [2,4,6,8,10]; // 30 total, av 6
let numberArray2 = [1,3,5,7,9]; // 25 total, av 5

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array

let sum = 0
for(let i = 0; i < numberArray1.length; i++){
    sum += numberArray1[i];
}
console.log(sum / numberArray1.length);

//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function arrayCheck (array1, array2) {
    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0; i < array1.length; i++) {
        sum1 += array1[i];
    }
    var av1 = (sum1 / (array1.length));
    
    for(let a = 0; a < array2.length; a++) {
        sum2 += array2[a];
    }
    var av2 = (sum2 / (array2.length));

    if (av1 > av2) {
        console.log (true);
    } else {
        console.log(false);
    }
}

arrayCheck(numberArray1, numberArray2);

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink (isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket > 10.5) {
        console.log(true);
    } else { 
        console.log(false);
    }
}

willBuyDrink(true, 11.5);


//13. Create a function of your own that solves a problem. 

function watchNextEpisode (currentTime, isWorkTomorrow) {
    if (currentTime <= 2100 || isWorkTomorrow === false) {
        console.log ('Continue watching!')
    } else {
        console.log ('Take your behind to bed')
    }
}

watchNextEpisode(2101, true);

// function to determin if I can hit play on that next episode on Cruncyroll. It uses the time of day using 24hr time format and if I have to work tomorrow. 