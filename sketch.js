let x=0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(220);
  // if(mousepressed){} else{}
  //若壓下滑鼠 用 筆刷1
  if(mouseIsPressed){
    fill(mouseX,mouseY,150);
    rect(mouseX, mouseY, 20+5*sin(x), 20+5*sin(x));
  }else{//若放開滑鼠 用筆刷2
    fill(mouseY,mouseX,150);
    //circle(mouseX, mouseY, 20+5*sin(x));
    circle(mouseX, mouseY, 20+5*sin(x));
  }
  x=x+0.1;
}