class Ball {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0,
          'isStatic':false
      }
      this.body = Bodies.circle(x, y,radius, options);
      //this.height = 30;
      //this.width = width;
      this.radius = radius
      this.x = x
      this.y = y
      //Matter.Body.setAngle(this.body,angle)
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //rectMode(CENTER);
      push()
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      fill("pink");
      circle(0,0,this.radius);
      imageMode(RADIUS)
      image(this.image,0,0,this.radius);
      pop();
    }
  };