class Person {
    constructor(name='Anonmyous',age){
        this.name = name;
        this.age = age || 0;
    }
    getGreeting(){
        return `Hi . I am ${this.name} `;
    }
    getDescription(){
        //return "Hi. I am "+ this.name + "! I am "+this.age+"years old."
        //You can use backtick (`) to enclose the String and then inject the string value using the ${}
        return `Hi . I am ${this.name} ! I am ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age , major){
        super(name,age);
        this.major = major;        
    }
    hasMajor() {
        return !!this.major;
    }
    //Overrride parent method
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += `Their major is ${this.major}`;
        }
        return description;
    }
}

const me = new Person('Mike Smith',30);
console.log(me.getGreeting());

const other = new Person();
console.log(other.getGreeting());

const me1 = new Student('Mike Smith',30,'Computer Science');
console.log(me1.getGreeting());
console.log(me1.getDescription());

const other1 = new Student();
console.log(other1.getGreeting());
console.log(other1.getDescription());


