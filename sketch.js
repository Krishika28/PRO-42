var hr, mn, sec,c,d;

function setup() {
  createCanvas(800,400);
  
   angleMode(DEGREES);

}

function draw() {
  background(0);  
  
  translate(200,200);
  rotate(-90);
  
  hr = hour();
  mn = minute();
  sec = second();
  
  strokeWeight(10);
  noFill();
  
  scAngle = map(sec,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr % 12,0,12 ,0,360);

  //sec
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);
  //min
   stroke(0,255,0);
  arc(0,0,280,280,0,mnAngle);
  //hr
   stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle);
  
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  drawSprites();
}
