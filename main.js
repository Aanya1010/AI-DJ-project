 var song1="";
 var song2="";
var leftWrist = 0;
var rightWrist = 0;

 function preload() {
song1 = loadSound(sorry.mp3);
song2 = loadSound(Love-Me-Like-You-Do.mp3)
 }

 function setup() {
   canvas = createCanvas(600, 500);
   canvas.center();
   
   video=createCapture(VIDEO);
   video.hide();
   
   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
   
   }

   
 function draw() {
    image(0, 0, 600, 500);
 }

 function gotPoses(results);
 if(results > 0);
{
console.log(results);

leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;
console.log("leftWristX =" + leftWristX + "leftWristY =" + leftWristY);


rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
console.log("rightWristX =" + rightWristX + "rightWristY =" + rightWristY);
}