//

class Peddle
{
  constructor(x)
  {
    this.x = x;
    this.w = 20;
    this.h = 100;
    this.y = 200//height;
    this.vy = 0;
  }
//control speed of the peddle
  update()
  {
    if(this.y>=height-50 || this.y<=50)
    {
      this.vy *=-1;
    }
  }
  //control the peddle with button
  change_dir(y)
  {
    this.vy = y;
  }
  move()
  {
   this.y +=this.vy; 
  }
  show()
  {
    rect(this.x,this.y,this.w,this.h);
  }
  
}