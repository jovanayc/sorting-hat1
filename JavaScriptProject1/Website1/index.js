// Debug Comment
console.log("Hello World!");
let userAnswersArray = []; //should push each user answer into this array in order to sort into houses later
let userName;//user input for name
let userGrade;//user choice for grade
let userTeacher;//user input for favorite teacher

//Next Step: Figure out why answerarray is not keeping all the submitted elements across each page?

//**Name Function *//

function getUserName(){

    console.log("In the name function!");
    
    userName = document.getElementById("name").value;//get user input
    
    console.log(userName);
    userAnswersArray.push(userName);//see if inputted teacher was added to the answers array
    
    console.log("User Answer Array Q2: " + userAnswersArray);

    return userName;

};


//**Grade Function *//


function getUserGrade(){

console.log("In the function!");

var gradesArray = document.getElementsByName("grade")
console.log("array");
console.log(gradesArray);

let isWorking;

//loops through radio answers to find user's checked answer
for(let i=0; i<gradesArray.length; i++){
    
    userGrade = gradesArray[i].value;//sets variable for the values of grades array
    
    if (gradesArray[i].checked === true){
        isWorking = userGrade + " is true";//when selected index comes up, set new variable to show it works
        userAnswersArray.push(userGrade);
    };
};

console.log(isWorking);
console.log("User Answer Array: " + userAnswersArray);

return isWorking;
};

//**Teacher Function *//

function getUserTeacher(){

    console.log("In the teacher function!");
    
    userTeacher = document.getElementById("teacher").value;//get user input
    
    console.log(userTeacher);
    userAnswersArray.push(userTeacher);//see if inputted teacher was added to the answers array
    
    console.log("User Answer Array Q2: " + userAnswersArray);

    return userTeacher;

};