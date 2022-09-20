// Global Arrays
console.log("Hello World!");
let userAnswersArray = []; //should push each user answer into this array in order to sort into houses later
let userName;//user input for name
let userGrade;//user choice for grade
let userTeacher;//user input for favorite teacher

//Object for sorting students into houses
let sorting = { 
    hufflepuff: 0,
    griffindor: 0,
    slytherin: 0,
    ravenclaw: 0
};

// global arrays for sorting algo
let ag = ['a','b','c','d','e','f','g'];
let hm = ['h','i','j','k','l','m'];
let nt = ['n','o','p','q','r','s','t'];
let uz = ['u','v','w','x','y','z'];
let specConstraints = ['`','~','!','@','#','$','%','^','&','*','(',')','-','_','=','+','[','{',']','}','|',';',':','"',' ',',','<','.','>','/','?'];//missing '\'
let numConstraints = ['0','1,','2','3','4','5','6','7','8','9',]; 


//**Name Function *//


function getUserName(){

    console.log("In the NAME function!");//log when in function
    
    userName = document.getElementById("name").value.toLowerCase();//get user name and make lower case

    //Log user name and first letter
    console.log("user name is: " + userName);
    console.log("first letter is: " + userName[0]);

    //Sort user input into relevant house based on first letter of name
    letterAlgo();

    return userName;

};

function letterAlgo(){
    if (ag.includes(userName[0]) === true){
        sorting.hufflepuff ++;//if username first character starts with letters a-g, +1 to hufflepuff
    } else if (hm.includes(userName[0]) === true){
        sorting.griffindor ++;
    } else if (nt.includes(userName[0]) === true){
        sorting.slytherin ++;
    } else if (uz.includes(userName[0]) === true){
        sorting.ravenclaw ++;
    } else if (specConstraints.includes(userName[0]) === true){
        console.log("Uh-oh, this input field does not accept special characters. Try again!")
    } else if (numConstraints.includes(userName[0]) === true){
        console.log("Uh-oh, this input field does not accept numbers. Try again!")
    };

    for (var [key,value] of Object.entries(sorting)){
        console.log(`${key}: ${value}`);
    };
};

//user grade multiple choice question sorting algo
function multipleChoiceQ1Algo(){
    console.log(userGrade);
    if (userGrade.includes('5th')){
        sorting.ravenclaw ++;
    } else if (userGrade.includes('6th')){
        sorting.hufflepuff ++
    } else if (userGrade.includes('7th')){
        sorting.slytherin ++;
    } else if (userGrade.includes('8th')){
        sorting.griffindor ++;
    };

    // print out current sorting tracker
    for (var [key,value] of Object.entries(sorting)){
        console.log(`${key}: ${value}`);
     };
};

/*TO-DO
***You can store in local storage & reset to 0 to update that.
***Change array so that after each question you add their value to the 
associated house so that at the end, you just print the house they're in

Access dictionary in local storage:
Set item Slytherin = 1

In local storage you can only store strings, parse or convert your value to
an 'int' when you access it.
*/

//**Grade Function *//


function getUserGrade(){

console.log("In the GRADE function!");

let gradesList = document.getElementsByName("grade")//gets all grades listed
console.log(gradesList);//logs all grades

//loops through radio answers to find user's checked answer
for(let i=0; i<gradesList.length; i++){
    userGrade = gradesList[i].value;//sets variable for the values of grades array
    
    if (gradesList[i].checked === true){
        console.log(`UserGrade is: ${userGrade}`);//print checked grade value
        multipleChoiceQ1Algo();
        return userGrade;
    };
};

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



//function shortAnswerQ1(){ //used for short answer # questions
    //if the question 1 answer < 0.5
        //add to sly +1
    //if btw 0.5 and 1
        //add to gryf
    //if C btw 1 and 5
        //add to huff
    //if D greater than 5
        //add to raven
    //make sure user inputs numbers and not other text
//}