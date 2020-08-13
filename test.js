
var myCar3 = {


    maxSpeed: 70,
    driver: "Tomek",
    drive: function(speed, time){
         console.log(speed * time);
        },
        logDriver: function() {
            console.log("driver name is " + this.driver);
        }


};
 myCar3.logDriver();   
 console.log(myCar3.maxSpeed);
 myCar3.drive(50, 3);

