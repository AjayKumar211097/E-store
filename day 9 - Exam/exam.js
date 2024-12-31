/* Interview Question (5 Marks)

Input:
A string of student names separated by commas.
A string of blacklisted student names separated by commas.
The year of passing.

Output:
The function should output eligible students in the format:
<Prefix + Roll Number> <Full Name> <Year of Passing>, skipping blacklisted students.
Eg: 
12831a0501 Ajay Kumar 2016
12831a0502 Sai Divya 2016
---------------------------------------------------------------------------------------
Sub-points for Evaluation (Marks Allocation):
Input Handling (1 mark)

Process the input strings to extract individual names.
Ignore leading or trailing spaces in names.
Prefix Calculation (1 mark)

Calculate the prefix using (yearOfPassing - 4) % 100 without additional guidance.
Blacklist Filtering (1 mark)

Correctly exclude names that are blacklisted.
Formatting Output (1 mark)

Generate the correct output format without using padding.
Completeness (1 mark)

Ensure all steps are implemented, and the function works correctly for all inputs.
 
Case 1: 
const studentsCSV = "Ajay Kumar, Ravi Kumar, Sandhya Rani, Sita Ram, Mohan Krishna";
const blacklistedCSV = "Ravi Kumar";
const yearOfPassing = 2020;

Case 2:
const studentsCSV = " Rajesh Yadav , Anita Sharma , Suresh Reddy , Rakesh Rao , Kiran Kumar , Meena Jain ";
const blacklistedCSV = "Rakesh Rao, Meena Jain";
const yearOfPassing = 2018;

Case 3:
const studentsCSV = "Nandini Reddy, Arjun Kumar, Kavya Sharma, Rahul Jain, Priya Rao";
const blacklistedCSV = "Nandini Reddy, Kavya Sharma";
const yearOfPassing = 2015;
*/

function generateStudentDetails(studentsCSV, blacklistedCSV, yearOfPassing) {}
generateStudentDetails(studentsCSV, blacklistedCSV, yearOfPassing);

/* Question 2 */

/* 
Problem Statement:
Write a JavaScript function that processes a 2D array of student scores. Each row represents the scores of a student in multiple subjects. The function should calculate:

The average score of each student.
The highest average score among all students.
Input:

A 2D array of integers representing student scores (each row is a student, and each column is a subject).
Output:

The average score of each student in the format:
Student <index>: <average>
(e.g., "Student 1: 85")
The highest average score among all students in the format:
Highest Average: <score>
Constraints:

Scores are integers between 0 and 100.
Handle edge cases where students have no scores or all scores are zero.
Sub-points for Evaluation (Marks Allocation):

Input Handling (1 Mark):
Correctly process the 2D array, and handle cases like empty rows or invalid data.

Outer Loop Logic (1 Mark):
Correctly iterate over each student in the array.

Inner Loop Logic (1 Mark):
Correctly calculate the sum of scores for each student using an inner loop.

Average Calculation and Formatting (1 Mark):
Compute and format the average scores correctly.

Highest Average (1 Mark):
Correctly identify and display the highest average score.

Input:
const scores = [
  [85, 90, 78], // Student 1
  [88, 76, 95], // Student 2
  [70, 60, 80]  // Student 3
];
Output:
Student 1: 84.33  
Student 2: 86.33  
Student 3: 70  
Highest Average: 86.33  

const scores2 = [
    [50, 60],
    [90, 100],
    [45]
];
const scores3 = [
    [],
    [0, 0, 0],
    [100, 100, 100]
];
 */
function calculateStudentAverages(scores) {
    // Your implementation here
}
calculateStudentAverages(scores);

/* Question 3
Write a JavaScript function that processes a string of movie data. Each movie in the input string is represented in the format:
<Movie Name>,<Year>,<Box Office Collection> and movies are separated by semicolons (;).

The function should classify and print details for each movie using the following rules:

If the box office collection is less than ₹50 crores, classify it as a Flop.
If the box office collection is between ₹50 crores and ₹100 crores (inclusive), classify it as a Hit.
If the box office collection is between ₹101 crores and ₹500 crores (inclusive), classify it as a Super Hit.
If the box office collection is greater than ₹500 crores, classify it as a Blockbuster.
The output for each movie should be printed in the format:
<Movie Name> (<Year>): <Category> with ₹<Box Office Collection> crores
Example :
RRR (2022): Blockbuster with ₹1150 crores
Magadheera (2009): Super Hit with ₹80 crores

Sub-Points for Evaluation (Marks Allocation):
Input Handling (1 Mark):

Correctly parse the input string into individual movies and split the details (name, year, collection).
Handle spaces and trim unnecessary whitespace.
Categorization (2 Marks):

Implement correct conditions for categorizing movies into Flop, Hit, Super Hit, and Blockbuster.
Output Formatting (1 Mark):

Use string literals to format and display each movie's details correctly in the specified format.
Completeness (1 Mark):

Ensure the function works for all inputs and edge cases (e.g., no movies, incorrect formats, etc.).

const case1 = "Baahubali,2015,1200;Arjun Reddy,2017,55;Magadheera,2014,45;Pushpa,2018,370";
const case2 = "RRR,2022,1150;Sye Raa,2019,210;Geetha Govindam,2018,70;Maharshi,2019,175";
const case3 = "Pathaan,2023,1050;Jawan,2023,750;Adipurush,2023,45;Kantara,2022,200";
*/
function printMovieDetails(input) {}
printMovieDetails(input);
