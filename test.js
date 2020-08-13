

var Car = function(maxSpeed, driver){

    this.maxSPeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){
        console.log(speed * time);
    };
    this.logDriver =    function() {
        console.log("driver name is " + this.driver);
    };    

}


var myCar = new Car(70, "ninja Man");
var myCar2 = new Car(50, "TOmek Man");
var myCar3 = new Car(90, "damn Man");
var myCar4 = new Car(20, "fejk Man");


myCar.drive(30,5);
myCar3.logDriver();
