// A. arguments object - is no longer bound with the arrow functions
// =================================================================
// lets see an anonmyous ES-5 function
const add = function(a,b){
    console.log(arguments) // prints out all the arguments passed to the function
    return a + b;
};
console.log(add(10, 20));

// lets see an ES-6 arrow function
const add2 = (a,b) =>{
    //console.log(arguments) // shows we no longer hvae the access to the arguments in the ES6 arrowfunction
    return a + b;
};
console.log(add2(10, 20));

// B. this keyword is no longer bound with the arrow function
// ==========================================================

const user1 = {
    name : 'Maria',
    cities : ['Philadelphia','Dublin','Seatle'],
    printPlacesLived: function() { // declaring a ES-5 anonmyous function
        console.log(this.name); // we can see the name and cities can be refeered by the this operator
        console.log(this.cities);  
        //This is going to crash since this.name cannot be refernced or not in scope of the function printPlacesLived
        // the work around would be as in user2
        this.cities.forEach(function(city){
            //console.log(this.name +'has lived in '+ city)
        });
    }
};
user1.printPlacesLived();

const user2 = {
    name : 'Maria',
    cities : ['Philadelphia','Dublin','Seatle'],
    printPlacesLived: function() { // declaring a ES-5 anonmyous function
        console.log(this.name); // we can see the name and cities can be referred by the this operator
        console.log(this.cities); 
        const that = this; 
        // the work around would be as in user2 assign this to a variable called that
        this.cities.forEach(function(city){
            console.log(that.name +' has lived in '+ city);
        });
    }
};
user2.printPlacesLived();

const user3 = {
    name : 'Maria',
    cities : ['Philadelphia','Dublin','Seatle'],
    printPlacesLived: function() { // declaring a ES-5 anonmyous function
        console.log(this.name); // we can see the name and cities can be referred by the this operator
        console.log(this.cities); 
        // In case of the ES6 arrow function the scope has the upper hierarchial scope
        this.cities.forEach((city) => {
            console.log(this.name +' has lived in '+ city);
        });
    }
};
user3.printPlacesLived();

const user4 = {
    name : 'Dennis',
    cities : ['Philadelphia','Dublin','Seatle'],
    printPlacesLived() { // declaring a ES-6 anonmyous function eliminating the function keyword
        console.log(this.name); // we can see the name and cities can be refeered by the this operator
        console.log(this.cities); 

        // Using the  ES6 Map function
        /*
        const cityMessages = this.cities.map((city) => {
            return this.name + 'has lived in ' + city;
        });
        return cityMessages;
        */

        // Using the  ES6 Map function - can be written as 
        return this.cities.map((city) => {
            return (this.name +' has lived in '+ city);
        });
    }
};
console.log(user4.printPlacesLived());

const numArr = [2, 4 , 6 , 8, 10];
const numArrMul = numArr.map((num) => {
    return num * 6;
})
console.log(numArrMul);

console.log( numArr.map((num) => {
    return num * 5;
}))




