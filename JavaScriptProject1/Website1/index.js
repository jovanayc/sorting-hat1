// Global Arrays
console.log("Hello World!");
let userAnswersArray = []; //should push each user answer into this array in order to sort into houses later
let userName;//user input for name
let userGrade;//user choice for grade
let userAnimal;//user choice for animal
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

//**LocalStorage functions//
function storageSave() {//example save button
    var userName = document.getElementById("name").value;
    localStorage.setItem("name", userName);
    console.log('saved: '+ userName)
  }
  function storageLoad() {//example load button
    var myContent = localStorage.getItem("name");
    document.getElementById("name").value = myContent;
    console.log('loaded:' + myContent)
  }
  function loadHousing() {//actual housing load
    var myContent = localStorage.getItem("Current House");
    for (var [key,value] of Object.entries(myContent)){
        console.log(`${key}: ${value}`);
  }
}
function storageHousing() {//actual housing saving including sorting object --> need to figure out how to get the sorting object to be updated by this function
    var houseStorage = sorting;
    console.log(sorting);
    localStorage.setItem("Current House", houseStorage);
    //console.log('saved: ' + loadHousing);
  }

//**Algorithms for sorting *//

function letterAlgo(input){
    if (ag.includes(input[0]) === true){
        sorting.hufflepuff ++;//if input first character starts with letters a-g, +1 to hufflepuff
    } else if (hm.includes(input[0]) === true){
        sorting.griffindor ++;
    } else if (nt.includes(input[0]) === true){
        sorting.slytherin ++;
    } else if (uz.includes(input[0]) === true){
        sorting.ravenclaw ++;
    } else if (specConstraints.includes(input[0]) === true){
        console.log("Uh-oh, this input field does not accept special characters. Try again!")
    } else if (numConstraints.includes(input[0]) === true){
        console.log("Uh-oh, this input field does not accept numbers. Try again!")
    };

    for (var [key,value] of Object.entries(sorting)){
        console.log(`${key}: ${value}`);
    };
};

//user grade multiple choice question sorting algo
function multipleChoiceQuestion(userTopic, choice1, choice2, choice3, choice4){
    console.log(userTopic);
    if (userTopic.includes(choice1)){
        sorting.ravenclaw ++;
    } else if (userTopic.includes(choice2)){
        sorting.hufflepuff ++
    } else if (userTopic.includes(choice3)){
        sorting.slytherin ++;
    } else if (userTopic.includes(choice4)){
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

//**Name Function *//


function getUserName(){

    console.log("In the NAME function!");//log when in function
    
    userName = document.getElementById("name").value.toLowerCase();//get user name and make lower case

    //Log user name and first letter
    console.log("user name is: " + userName);
    console.log("first letter is: " + userName[0]);

    //Sort user input into relevant house based on first letter of name
    letterAlgo(userName);

    return userName;

};


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
        multipleChoiceQuestion(userGrade,'5th','6th','7th','8th');
        return userGrade;
    };
};

};

//**Teacher Function *//

function getUserTeacher(){

    console.log("In the teacher function!");
    userTeacher = document.getElementById("teacher").value.toLowerCase();//get user input and lowercase the answer
    console.log(userTeacher);
    
    letterAlgo(userTeacher);

    return userTeacher;

};


//**Animal Function *//


function getUserAnimal(){

    console.log("In the ANIMAL function!");
    
    let animalList = document.getElementsByName("animal")//gets all animals listed
    console.log(animalList);//logs all animals
    
    //loops through radio answers to find user's checked answer
    for(let i=0; i<animalList.length; i++){
        userAnimal = animalList[i].value;//sets variable for the values of animal array
        
        if (animalList[i].checked === true){
            console.log(`UserAnimal is: ${userAnimal}`);//print checked aimal value
            multipleChoiceQuestion(userAnimal, 'unicorn', 'dragon', 'basilisk','phoenix');
            return userAnimal;
        };
    };
    
    };


    //* House function -- currently hacked for slytherin*//
function getHouse(){
    console.log('In the HOUSE function');
    let hackSlytherinHouse = 1;//automatically puts users in slytherin

    console.log(`Houses before hack: ${Object.values(sorting)}`);

    sorting.slytherin += hackSlytherinHouse;//hacks house for slytherin

    console.log(`Selected house after hack: ${Object.values(sorting)}`);

    //IN THE FUTURE: The local storage should hold the house values. This function should 
    //look at the stored values to see which is the highest and log that one:
    //Meaning run a for loop comparing each value to the next, whichevr is highest adds to a variable, then is returned
    //The outcome should be that house's page loading

}


//IN THE FUTURE: Would like to add additional short answer questions that more arbitarily put users in houses in order to practice more algos

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