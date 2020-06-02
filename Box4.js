class Box4 extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
    }
    display(){
      push();
       fill(255,0,255);
       super.display();
       pop();
     }
  }
