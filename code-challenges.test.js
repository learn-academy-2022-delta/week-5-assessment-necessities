// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"


// b) Create the function that makes the test pass.



// I am going to create a test that looks at a function called CodedMessage; it will have three tests that make sure the string input to the function is changed to match the code; 

describe ("CodedMessage", () => {
    it("Takes a string input and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
        expect(CodedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(CodedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(CodedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// test failed because i had a missing parentheses, then it failed correctly because there is no function
// Im going to create a function called CodedMessage; it will take one input called stringInput; it will have a map method that changes certain vowels to certain numbers; it will return that new string as an output

// while i was looking up the syntax on how to use map to change the values I came across the .replace method and decided to try that instead , i also learned you can just chain this method to keep replacing different characters

const CodedMessage = (stringInput) => {
    returnString = stringInput.replaceAll('a', '4').replaceAll('e', '3').replaceAll('i', '1').replaceAll('o', '0').replaceAll('A', '4').replaceAll('E', '3').replaceAll('I', '1').replaceAll('O', '0')
    return returnString
}

// I had one final error because i did not include the capital E, but chaining more methods onto the function fixed that, the test passes








// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]


// b) Create the function that makes the test pass.



// I need to create a test for a function called SelectCertainWords; it will have two tests that look at the input array and return only the words containing a certain input character

describe ("SelectCertainWords", () => {
    it("Takes in a array of strings and one characters string and returns all strings with that character", () => {
        expect(SelectCertainWords(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(SelectCertainWords(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})
// test failed because there is no function
// I'm going to create a function called SelectCertainWords that takes in one array of strings and one string character; it will filter the array to only return the strings that contain that particular character and return a new array with the selected strings

const SelectCertainWords = (arrayinput1, char1) => {
    returnArray = arrayinput1.filter(value => value.toLowerCase().includes(char1))
    return returnArray
}
// for some reason the filter method is still hard to understand for me, but this actually helped alot while i was researchign how to answer this i finally understand that the first argument in the filter method is each value of the array its being called on and since it is being called on a array it automatically loops through the entire array and feeds every value of the array into the method one at a time like a loop

// I had to add a .toLowerCase() function to get the second test to pass, and I had to change the letter input in the test itself because i had accidently put letterA twice




// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false


// b) Create the function that makes the test pass.

// I am going to create a test for a function called ShowHand; the function will take in five numbers and determine if it is a full house; there will be three tests

describe("ShowHand", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind", () => {
        expect(ShowHand(hand1)).toEqual(true)
        expect(ShowHand(hand2)).toEqual(false)
        expect(ShowHand(hand3)).toEqual(false)
    })
})


// got function not defined

// i am going to create a function called ShowHand; it will take in a array of numbers; it will map through the array and return true if its a full hand or false if it is not

const ShowHand = (array1) => {

    const count = {};

    array1.forEach(element => {
    count[element] = (count[element] || 0) + 1;
    });


    var array2 = Object.values(count)



    let pair = false
    let threeOf = false
    let fullHouse = false

    pair = array2.some(value => value === 2)
    

    threeOf = array2.some(value => value === 3)

    if (pair === true && threeOf === true) {
        fullHouse = true
    } else {
        fullHouse = false
    }


    return fullHouse

}


// This one was really tricky, I initially thought i could jsut map through the array but it was just returning new arrays and i needed a sinlge true or false variable for the return so i found the .some method to use instead; I just set the win condition fullhouse inside the function to be a true or false variable that the function ended up returning