// creating my rover factory  to complete the las iteration
function Rovers(position, direction ){
  this.position= position;
  this.direction= direction;
}
// rover1 and rover 2 to complete lthe last iteration super bonus
var myRover1 = new Rovers(
[0,0], "N"
);
var myRover2 = new Rovers (
   [1,0], "N"
 );

// declaring my obstacles in the grid
var MyObstacle1= [3,4];
var MyObstacle2= [6,2];
var MyObstacle3= [1,3];

function goForward(fOrB) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++;
      break;
    case 'E':
      rover.position[1]++;
      break;
    case 'S':
      rover.position[0]--;
      break;
    case 'W':
      rover.position[1]--;
      break;
      default:
      console.log('you don\'t know how to operate rover' );
  }

}
function goBackward(fOrB) {
  switch(rover.direction) {
    case 'N':
      rover.position[1] -=1;
      break;
    case 'E':
      rover.position[0]-=1;
      break;
    case 'S':
      rover.position[0]++;
      break;
    case 'W':
      rover.position[0]++;
      break;
      default:
      console.log('you don\'t know how to operate rover' );
  }
//
  // console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}


function turnRigth(lOrR) {
    case "r":
  +  switch (lOrR) {
  +
  +      switch (rover.direction) {
  +        case "N":
  +          rover.direction = "E";
  +          break;
  +        case "E":
  +          rover.direction = "S";
  +          break;
  +        case "S":
  +          rover.direction = "W";
  +          break;
  +        case "W":
  +          rover.direction = "N";
  +          break;
  +        default:
  +
  +      }
  // console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
  }

  function turnLeft(lOrR)
  case "l":
+      switch (rover.direction) {
+        case "N":
+          rover.direction = "W";
+          break;
+        case "E":
+          rover.direction = "N";
+          break;
+        case "S":
+          rover.direction = "E";
+          break;
+        case "W":
+          rover.direction = "S";
+          break;
+        default:
+
+      }
-  }

function checkForObtacles(){
  if (this.position === MyObstacle1 ){
    console.log("you just hit something at "+ MyObstacle1 +",  you better change your route")
  }
  else if (this.position === MyObstacle2){
      console.log("you just hit something at "+ MyObstacle2 +",  you better change your route")

  }
  else if (this.position === MyObstacle3){
      console.log("you just hit something at "+ MyObstacle3 +",  you better change your route")
  }else{
    console.log('path is clear')
  }
}
