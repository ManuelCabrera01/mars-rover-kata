// creating my rover factory  to complete the las iteration
function Rovers(position, direction ){
  this.position= position;
  this.direction= direction;
}
// rover1 and rover 2 to complete lthe last iteration super bonus
var myRover1 = new Rovers(
[0,0],
"N"
);
var myRover2 = new Rovers (
   [1,0],
    "N"
 );

// declaring my obstacles in the grid
var MyObstacle1= [3,4];
var MyObstacle2= [6,2];
var MyObstacle3= [1,3];

function goForward(fOrB) {
  switch(this.direction) {
    case 'N':
      this.position[0]++;
      break;
    case 'E':
        this.position[1]++;
      break;
    case 'S':
        this.position[0]--;
      break;
    case 'W':
        this.position[1]--;
      break;
      default:
      console.log('you don\'t know how to operate rover' );
  }

}
function goBackward(fOrB) {
  switch(this.direction) {
    case 'N':
        this.position[1] -=1;
      break;
    case 'E':
        this.position[0]-=1;
      break;
    case 'S':
      this.position[0]++;
      break;
    case 'W':
        this.position[0]++;
      break;
      default:
      console.log('you don\'t know how to operate rover' );
  }
//
  // console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}


function turnRigth(lOrR) {
  switch (lOrR){
        case "r":
      switch (this.direction) {
        case "N":
          this.direction = "E";
          break;
        case "E":
        this.direction= "S";
           break;
        case "S":
       this.direction = "W";
           break;
         case "W":
          this.direction = "N";
           break;
         default:

       }
  console.log("my rover! position: [" + myRover1.position[0] + ", " + myRover1.position[1] + "]");
      }
    }

  function turnLeft(lOrR){
    switch (lOrR){
  case "l":
      switch (this.direction) {
        case "N":
          this.direction = "W";
          break;
        case "E":
          this.direction = "N";
          break;
        case "S":
          this.direction= "E";
          break;
        case "W":
        this.direction = "S";
          break;
        default:

      }
  }
}

function checkForObtacles(){
  if (this.position === MyObstacle1 ){
    console.log("you just hit something at "+ MyObstacle1 +",  you better change your route");
  }
  else if (this.position === MyObstacle2){
      console.log("you just hit something at "+ MyObstacle2 +",  you better change your route");

  }
  else if (this.position === MyObstacle3){
      console.log("you just hit something at "+ MyObstacle3 +",  you better change your route");
  }else{
    console.log('path is clear');
  }
}

function moveTheBot(arr){
  arr.forEach((el) => {
    if (el==='f' ) {
      goFoward(fOrB);
    }else if ( el === 'b'){
      goBackward(fOrB);
    }else if (el === 'l'  ){
        turnLeft(lOrR);
      }else if (el === 'r'){
        turnRigth(lOrR);
      }else{
       console.log("your better learn how to type before even think to drive one of my rovers");
      }
  });
}
