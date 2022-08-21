//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

const ages = [3, 9, 23, 64, 2, 8, 28, 93];

console.log(ages)

//a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.

function minAges(age1, age2){

return age1.shift() - age2.pop();

}

let ages2 = [...ages]

console.log(minAges(ages2, ages2));


//b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).

let ages3 = [...ages]

ages3.push(20)

console.log(minAges(ages3, ages3));

//c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.


let ages4 = [...ages];

function addAges(arr){

        let sum = 0;
        for (let age = 0;age < arr.length; age++){
        sum = sum + arr[age];
    }
    return sum / arr.length
}

console.log(addAges(ages4));


//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
 let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
//a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.


let names1 = [...names];

let sum1 = 0;
for (let name = 0; name < names1.length; name++){
    sum1 = sum1 + names1[name].length
}
console.log(sum1 / names1.length)

//b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

let names2 = [...names]

let sum2 = " ";
for (let name = 0; name < names2.length; name++){
    sum2 += names2[name] + ' ';
   
}

console.log(sum2)

