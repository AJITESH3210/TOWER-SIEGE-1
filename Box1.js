class Box1 extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
    }
    display(){
      push();
      fill(255,0,0);
      super.display();
      pop();
    }
  }
