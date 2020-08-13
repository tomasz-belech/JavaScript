function getAverage (a,b){

    var average = (a + b) / 2; // local variable
    console.log(average);
    return average;

}

 var myResult = getAverage(7,11); //global variable
 console.log("the average is " + myResult);

 function logResult(){

    console.log("the average is " + myResult + "inside the function");

 }

 logResult();