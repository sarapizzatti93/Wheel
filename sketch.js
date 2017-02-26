function setup() {
  createCanvas(800,600);
  angleMode(DEGREES);
  frameRate(50);
  background(0);
}

function draw() {
stroke(lerpColor(color('#2A044A'),color('#7AB317'),(frameCount%360)/360));    
    
  translate(width/4,height/2);
  line(200,0,200*cos(frameCount),200*sin(frameCount));

  translate(width/2,0);
  line(-200,0,200*cos(frameCount-180),200*sin(frameCount-180));

}