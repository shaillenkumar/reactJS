var nameVar = 'Sam';
// var will allow to declare and assign sama variable again
var nameVar = 'Jim';
console.log('nameVar: '+nameVar);

let nameLet = 'Mary';
//let nameLet = 'Hary'; // will result in error if you declare same  let var again
nameLet = 'Harry';
console.log('nameLet '+nameLet);


const nameConst = 'Jennifer';
//nameConst = 'Julie'; // will result in error if you assign const variable again
console.log('nameConst '+nameConst);


// Function level
function getPetName(){
    var petName = 'Jimmy';
    return petName;
}

getPetName();
//console.log('petName '+petName); // var petNmae is functionn scope hence will error

// Block level
let fullName = "Angelina Jolie"
if(fullName){
    let firstName = fullName.split(' ')[0];
    console.log('firstName '+firstName);    
}
//console.log('firstName '+firstName); // Err firstName is in blockscope let variable declaration


