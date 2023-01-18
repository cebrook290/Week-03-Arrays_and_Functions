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

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

function nameAverage() {
    let sum = 0;
    for(i = 0; i < names.length; i++) {
        sum += names[i].length;
    }
    console.log (sum / (names.length));
}

nameAverage();

let output = '';
for(i = 0; i < names.length; i++)
{
    output += names[i] + ' '
};

console.log(output);

let nameLengths = [];

for(i = 0; i < names.length; i++)
{
    nameLengths.push(names[i].length);
}

console.log(nameLengths);

function nameSum () {
    let sum = 0;
    for(i = 0; i < nameLengths.length; i++) {
        sum += nameLengths[i];
    }
    console.log(sum);
}

nameSum();

function wordJoin (word,n) {
    console.log(word.repeat(n));
}

wordJoin('hello',3);

function nameJoin (firstName, lastName) {
    console.log(firstName + ' ' + lastName);
}

nameJoin ('Ranma', 'Saotome');

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