var xnariz=0;
var ynariz=0;
var xmuñecaderecha=0;
var xmuñecaizquierda=0;
var distancia_muñecas=0;
function preload(){
    rosas=loadImage("rosas.jpg");
}
function setup(){
video=createCapture(VIDEO);
    var canvas=createCanvas(550,490);
    canvas.position(560,110);
    video.size(550,500);
    var poseNet=ml5.poseNet(video,modelo_listo);
    poseNet.on("pose",poses)
}
function draw(){
    background(rosas);
    fill("pink");
    stroke("pink");
    square(xnariz,ynariz,distancia_muñecas)
}
function modelo_listo(){
    console.log("modelo cargado")
}
function poses(resultados){
    if(resultados.length>0){
        console.log(resultados);
        xnariz=resultados[0].pose.nose.x;
        ynariz=res8ltados[0].pose.nose.y;
        xmuñecaderecha=resultados[0].pose.rightWrist.x;
        xmuñecaizquierda=resultados[0].pose.leftWrist.x;
        distancia_muñecas=xmuñecaizquierda-xmuñecaderecha;
    }
}