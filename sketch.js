
var spark=0;

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  background(120,mouseX,230); 
}

//The draw function happens over and over again
      createCanvas(500,500);
function draw() {
  //an RGB color for the canvas' background (purple);
  //circle
  stroke(255,255,127); // an RGB color for the circle's border
  strokeWeight(10);
  fill(255,120,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(100,300,spark,spark); // center of canvas, 20px dia
  
  fill(122,spark,142,255);//gold
  stroke(228,153,163);
  strokeWeight(5);
  rect(spark,200,30,100)
  stroke(0);
  line(20,spark,spark,175);
  strokeWeight(10);
  point(random(width),random(height));
  noStroke(0); 
  ellipse(mouseX,mouseY, 30,30);
 }

 function mousePressed() {

  if (spark>= 150) {
    spark=0;
  } else {
     spark=spark+5;
  }

}
