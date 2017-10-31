
// this is an anonmyous function
const square1 = function (x){
    return x * x;
}
console.log(square1(3));


//can be written as
const square2 = (x) => {
    return x * x;
};

console.log(square2(9));

//can be written in concise manner since it returns only expression
const square3 = (x) =>  x * x;


console.log(square3(5));

// Es6 arrow function to get first name
const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName('Jason Bourne'));