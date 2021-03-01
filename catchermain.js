class Catchermain {
    constructor(x, y, width) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
          'isStatic': true
      }
      this.body = Bodies.rectangle(x, y, width, 20, options);
      this.width = width;
      this.height = 20;
      this.image = loadImage("dustbingreen.png");
      //Matter.Body.setAngle(this.body, angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      rect(0, 0, this.width, this.height);
      imageMode(CENTER)
      image(this.image,0,-25,125,150);
      pop();
    }
  }