console.log('utils.js file is running!!');
const square = (x) => x * x;
const add = (a, b) => a + b;
// export default (a , b) => a - b; // Inline Default export can be wriiten like this since the name is not referenced in import
export const isAdult = (age) => age >= 18;     // we can export inline
const subtract = (a,b) => a - b;
export { square , add , subtract as default }  // one file can have one default export only.
