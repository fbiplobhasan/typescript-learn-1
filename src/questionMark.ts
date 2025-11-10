
// const biyerJonnoEligible = (age: number) => {
// // if(age >= 21){
// //     console.log('You are eligible');
// // } else {
// //     console.log('You are not eligible');
// // }
// const result = age >= 21 ? "You are eligible" : "You are not eligible"

// console.log(result);
// }

// biyerJonnoEligible(21)

//! Coalescing & optional chaining

// const userTheme = undefined;
// const userTheme = null;
// const userTheme = 'Green theme';
// const selectedTheme = userTheme ?? 'light theme';

// console.log(selectedTheme);

// const isAuthenticated = null;
const isAuthenticated = '';

const resultWithTernary = isAuthenticated ? isAuthenticated: "You are guest!";

const resultWithNulish = isAuthenticated ?? 'You are guest!';

console.log({resultWithTernary},{resultWithNulish});


const user: {
    address: {
        city: string;
        town:string;
        postalCode?:string;
    } ;
} = {
    address: {
        city: "Dhaka",
        town: "Banani",
    }
}

const postalCode = user?.address?.postalCode;
console.log(postalCode);
