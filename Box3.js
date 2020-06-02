class Box3 extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
    }
    display(){
      push();
       fill(63, 82, 255);
       super.display();
       pop();
     }
  }
