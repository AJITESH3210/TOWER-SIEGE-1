class Box2 extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
    }
    display(){
      push();
      fill(248, 255, 63);
      super.display();
      pop();
    }
  }
