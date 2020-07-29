class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        
        var options = {
            
            
            legnth:200,
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX, y:this.offsetY}
        }

       
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
        this.sling.bodyB = body;
    }
    
  

    display(){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
            strokeWeight(2);
             stroke("red");
             var Anchor1X = pointA.x;
             var Anchor1Y = pointA.x;

             var Anchor2X=pointB.x+this.offsetX;
             var Anchor2Y=pointB.y+this.offsetY;
          line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
          

         
            
    
      }
    
}