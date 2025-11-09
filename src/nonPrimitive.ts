// let bazarList: string [] = ['eggs', 'milk', 'sugar'];

// bazarList.push(true)

// let mixedArr: (string | number) [] = ['eggs',12, 'milk', 1, 'sugar', 2];

// mixedArr.push('apple')
// mixedArr.push(123)
// mixedArr.push(true)

// Touple

// let coordinates: [number,number] = [20,30]

// let couple: [string,string] = ["Husband", "Wife"];

// let mezbaNameRoll: [string,number] = ["mezba", 79]

// let destination: [string,string,number] = ["Dhaka","Chitogong",123]

// refference type: object

const user: {
    //accessmodifire
    readonly organization: string //value type literel types
    // organization: string;
    firstName: string;
    middleName?: string; //optional type
    lastName: string;
    isMarried: boolean;
} = {
    firstName: 'jhankar',
    lastName: 'mahbub',
    isMarried: true,
    organization: 'Programming hero'
}

// user.organization = "programming hero fire"

console.log(user);