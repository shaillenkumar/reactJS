const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'Philadelphia',
        temp: 92
    }
};

console.log(`${person.name} age is ${person.age}`);

// The same can be written by destructuring
const { name, age } = person;
console.log(`${name} age is ${age}`);

const { city, temp } = person.location;
console.log(`It's ${temp} in ${city}`);

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};
const { title, author } = book;
const { name: publisherName = 'Self-Published'} = book.publisher;   
// rename variable with default value if publishe name is not present.
console.log(`The book ${title} was is published by ${publisherName}`);

//Array Destructuring
// We use {} in Object destructuring whereas we use [] in array destructuring
const address = ['1291 S Juniper Street', 'Philadelphia', 'Pensylvania','19147'];
const [ street, cityy , state = 'New York' , zipcode ] = address;
console.log(`You are in the  ${cityy} in  ${state}`);

const item = ['Coffee', '$2.25' , '$2.50', '$2.75'];
const [ item_name, small, , large] = item;
console.log(`The ${item_name} small costs  ${small}`);
