class Box extends BaseClass 
{
  constructor(x,y,width,height)
  {
    super(x,y,width,height);
  }

  display()
  {
    fill(130, 237, 237);
    super.display();
    if(this.body.speed < 3){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();

    }

    else{
      World.remove(world,this.body);
      push();
      this.Visibility=this.Visibility-3;
      tint(255,this.Visibility);
      
      pop();
    }
  }
}