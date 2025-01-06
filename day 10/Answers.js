const studentsCSV =
    "Nandini Reddy, Arjun Kumar, Kavya Sharma, Rahul Jain, Priya Rao";
const blacklistedCSV = "Nandini Reddy, Kavya Sharma";
const yearOfPassing = 2015;

// Function template
// Function declaration
function generateStudentDetails(studentsCSV, blacklistedCSV, yearOfPassing) {
    const convertedStrudentsArray = studentsCSV.split(",");
    const convertedBlacklistArray = blacklistedCSV.split(",");
    const prefix = (yearOfPassing - 4) % 100;
    const collegeCode = "831a050";
    // see if person is blacklisted or not
    // array includes -  element is exiting in the array or not

    for (let i = 0; i < convertedStrudentsArray.length; i++) {
        if (!convertedBlacklistArray.includes(convertedStrudentsArray[i])) {
            // ! = Negation - it will filp the boolean value
            const rollno = prefix + collegeCode + i;
            const name = convertedStrudentsArray[i];
            const template = `${rollno} ${name} ${yearOfPassing}`;
            console.log(template);
        }
    }

    // Converting strings to array
}
//generateStudentDetails(studentsCSV, blacklistedCSV, yearOfPassing); // Function calling

// Question 3

const input =
    "Baahubali,2015,1200;Arjun Reddy,2017,55;Magadheera,2014,45;Pushpa,2018,370";
function printMovieDetails(input) {
    const movieArray = input.split(";");

    for (let i = 0; i < movieArray.length; i++) {
        const currentMovie = movieArray[i];
        const currentMovieDetailsArray = currentMovie.split(",");

        const nameOfMovie = currentMovieDetailsArray[0];
        const yearOfMovie = currentMovieDetailsArray[1];
        const collectionOfMovie = Number(currentMovieDetailsArray[2]);
        let curentCategory = "";

        if (collectionOfMovie < 50) {
            curentCategory = "Flop";
            const template = `${nameOfMovie} (${yearOfMovie}): ${curentCategory} with ₹${collectionOfMovie} crores`;
            console.log(template);
        } else if (50 <= collectionOfMovie && collectionOfMovie <= 100) {
            curentCategory = "Hit";
            const template = `${nameOfMovie} (${yearOfMovie}): ${curentCategory} with ₹${collectionOfMovie} crores`;
            console.log(template);
        } else if (101 <= collectionOfMovie && collectionOfMovie <= 500) {
            curentCategory = "Super Hit";
            const template = `${nameOfMovie} (${yearOfMovie}): ${curentCategory} with ₹${collectionOfMovie} crores`;
            console.log(template);
        } else if (collectionOfMovie > 500) {
            curentCategory = "Blockbuster";
            const template = `${nameOfMovie} (${yearOfMovie}): ${curentCategory} with ₹${collectionOfMovie} crores`;
            console.log(template);
        }
    }
}
//printMovieDetails(input);

// Question 2
const scores = [
    [85, 90, 78], // Student 1
    [88, 76, 95], // Student 2
    [70, 60, 80], // Student 3
];
// Output:
/* 
Student 1: 84.33  
Student 2: 86.33  
Student 3: 70  
Highest Average: 86.33
*/
function calculateStudentAverages(scores) {
    let higherAvg = 0;
    for (let i = 0; i < scores.length; i++) {
        const currentStudentScores = scores[i];
        let sumOfSubjectScores = 0;
        for (let j = 0; j < currentStudentScores.length; j++) {
            sumOfSubjectScores += currentStudentScores[j];
        }
        const currentStudentAvg =
            sumOfSubjectScores / currentStudentScores.length;
        const template = `Student ${i + 1} : ${currentStudentAvg}`;
        console.log(template);

        if (higherAvg < currentStudentAvg) {
            higherAvg = currentStudentAvg;
        }
    }
    console.log("Highest Average: ", higherAvg);
}
calculateStudentAverages(scores); // function call
