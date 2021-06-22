//without destructing

const array = ['thing', 42, false, {key: 'value'}, [1, 2, 3, 4, undefined], NaN]

let stringVar = array[0]
let numVar = array[1]
let objVar = array[2]
let nanVar = array[array.length - 1]

//with destructing

let [string, num, , obj, , nan] = array
console.log(string, num, obj, nan); // thing 42 { key: 'value } NaN

//spread operator

let newArr = ['a', 1, undefined, ...array]
console.log(newArr);

// ... pulls in all of the individual values of the array created above

const testObj = {
    testString: 'stringy thingy',
    testNum: 2,
    testBool: true,
    testObject: {key: 'waluigi'},
    testArray: [1, 2, 3, 4, undefined],
    testNaN: NaN
}

const objString = testObj.testString
const objNum = testObj.testNum
const objObj = testObj.testObject
const objNan = testObj.testNaN

//same thing written with destructuring
let {testString, testNum, testObject, testNan} = testObj

//insert properties of testObj into new object

let newObj = {newString: 'more strings', anotherString: 'this is a string', ...testObj}
