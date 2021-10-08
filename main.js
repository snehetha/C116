noseX=0;
noseY=0;ng
function preload(){
clown_nose=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(300,300);
     posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotposes);
    video.size(300,300);
}
function modelLoaded(){
    console.log("posenet has started");
}
function gotposes(results){
if(results.length>0){
    console.log(results);
    console.log("nose x="+results[0].pose.nose.x);
    console.log("nose y="+results[0].pose.nose.y);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
}
}
function draw(){
image(video,0,0,300,300);
image(clown_nose,noseX-10,noseY,30,30);
}
function take_snapshot(){
save("My selfie.png");


}
